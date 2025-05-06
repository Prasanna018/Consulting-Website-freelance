import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Navigation } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Industries from './mainPages/Industries';
import Demo from '../Demo';
import TechanicalSolution from './mainPages/TechanicalSolution';
import AnalyticalSolution from './mainPages/AnalyticalSolution';

const routeLinks = [
    { name: 'Overview', link: 'overview', color: 'bg-blue-500' },
    { name: 'Industries', link: 'industries', color: 'bg-purple-500' },
    { name: 'Technical Solutions', link: 'technical-solutions', color: 'bg-green-500' },
    { name: 'Analytics Solutions', link: 'analytics-solutions', color: 'bg-orange-500' }
];

function WhatWeDo() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathSegment = location.pathname.split('/').pop() || 'overview';

    const [activeContent, setActiveContent] = useState(
        routeLinks.some(item => item.link === pathSegment) ? pathSegment : 'overview'
    );
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (activeContent !== pathSegment) {
            navigate(`/what-we-do/${activeContent}`, { replace: true });
        }
    }, [activeContent, navigate, pathSegment]);

    const handleLinkClick = useCallback((link) => {
        setActiveContent(link);
        if (isMobile) setMobileNavOpen(false);
    }, [isMobile]);

    const toggleMobileNav = useCallback(() => {
        setMobileNavOpen(prev => !prev);
    }, []);

    const renderContent = useCallback(() => {
        switch (activeContent) {
            case 'overview': return <Demo />;
            case 'industries': return <Industries />;
            case 'technical-solutions': return <TechanicalSolution />;
            case 'analytics-solutions': return <AnalyticalSolution />;
            default:
                return (
                    <div className="text-center text-gray-400 text-lg py-20">
                        Please select a section to view its content.
                    </div>
                );
        }
    }, [activeContent]);

    const currentTabName = routeLinks.find(item => item.link === activeContent)?.name || 'What We Do';

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full min-h-screen pt-20 bg-[#1e2223] p-4 md:p-8 flex flex-col md:flex-row gap-8 rounded-lg shadow-xl overflow-hidden md:overflow-y-auto hide-scrollbar-mobile mt-20"
        >
            {/* Mobile Header */}
            <div className="flex justify-between items-center mb-4 md:hidden">
                <h2 className="text-white text-xl font-bold">
                    {currentTabName}
                </h2>
                <button
                    onClick={toggleMobileNav}
                    className="text-white p-2 rounded-lg bg-gray-700"
                    aria-label={isMobileNavOpen ? 'Close navigation' : 'Open navigation'}
                >
                    {isMobileNavOpen ? <X size={20} /> : <Navigation size={20} />}
                </button>
            </div>

            {/* Navigation */}
            <AnimatePresence mode="wait">
                {(!isMobile || isMobileNavOpen) && (
                    <motion.div
                        className="w-full md:w-1/4 flex flex-col gap-6 bg-[#1e2223] p-4 md:p-6 rounded-lg"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-white text-xl font-bold mb-4 border-b border-gray-700 pb-2 hidden md:block">
                            Navigation
                        </h2>

                        {routeLinks.map((item) => {
                            const isActive = activeContent === item.link;
                            return (
                                <div
                                    key={item.link}
                                    className="relative"
                                    onClick={() => handleLinkClick(item.link)}
                                    role="button"
                                    tabIndex={0}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    <motion.div
                                        className={`flex items-center justify-between text-white p-3 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-all duration-300 cursor-pointer`}
                                        animate={{ x: isActive ? 10 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="font-medium">{item.name}</span>
                                        {isActive && (
                                            <motion.div
                                                animate={{
                                                    x: [0, 5, 0],
                                                    opacity: 1
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.5
                                                }}
                                            >
                                                <ArrowRight size={16} className="text-white" />
                                            </motion.div>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        className={`h-1 ${item.color} absolute bottom-0 left-0 right-0 rounded-full pointer-events-none`}
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={isActive ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content */}
            <div className="w-full md:w-3/4 bg-[#1e2223] p-4 md:p-6 rounded-lg text-white relative overflow-y-auto hide-scrollbar-mobile">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeContent}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="w-full"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default React.memo(WhatWeDo);
