import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Industries from './mainPages/Industries';
import Demo from '../Demo';
import TechanicalSolution from './mainPages/TechanicalSolution';
import AnalyticalSolution from './mainPages/AnalyticalSolution';

const routeLinks = [
    {
        id: 1,
        name: 'Overview',
        link: 'overview',
        color: 'bg-blue-500'
    },
    {
        id: 2,
        name: 'Industries',
        link: 'industries',
        color: 'bg-purple-500'
    },
    {
        id: 3,
        name: 'Technical Solutions',
        link: 'technical-solutions',
        color: 'bg-green-500'
    },
    {
        id: 4,
        name: 'Analytics Solutions',
        link: 'analytics-solutions',
        color: 'bg-orange-500'
    }
];

function WhatWeDo() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const currentMainPath = pathSegments[pathSegments.indexOf('what-we-do') + 1] || '';

    const [hoveredLink, setHoveredLink] = useState(null);
    const [activeContent, setActiveContent] = useState(null);
    const [isMobileNavOpen, setMobileNavOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Check if viewport is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        if (currentMainPath === 'industries') {
            setActiveContent(2);
        } else if (currentMainPath === 'technical-solutions') {
            setActiveContent(3);
        } else if (currentMainPath === 'analytics-solutions') {
            setActiveContent(4);
        } else {
            setActiveContent(1);
        }
    }, [currentMainPath]);

    const handleLinkHover = (id) => {
        setHoveredLink(id);
        setActiveContent(id);
    };

    const handleLinkClick = (id) => {
        setHoveredLink(null);
        setActiveContent(id);

        // Only collapse sidebar in mobile view
        if (isMobile) {
            setMobileNavOpen(false);
        }
    };

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    const renderContent = () => {
        switch (activeContent) {
            case 2:
                return <Industries />;
            case 3:
                return <TechanicalSolution />;
            case 4:
                return <AnalyticalSolution />;
            default:
                return <Demo />;
        }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full min-h-screen pt-20 bg-[#1e2223] p-4 md:p-8 flex flex-col md:flex-row gap-8 rounded-lg shadow-xl overflow-hidden md:overflow-y-auto hide-scrollbar-mobile mt-20"
            style={{
                height: 'auto',
                maxHeight: '100vh'
            }}
        >
            {/* Mobile Nav Toggle Button */}
            <div className="flex justify-between items-center mb-4 md:hidden">
                <h2 className="text-white text-xl font-bold">
                    {routeLinks.find(item => item.id === activeContent)?.name || 'Overview'}
                </h2>
                <button
                    onClick={toggleMobileNav}
                    className="text-white p-2 rounded-lg bg-gray-700"
                >
                    {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Sidebar Navigation */}
            <AnimatePresence>
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

                        {routeLinks.map((data) => {
                            const isActive = activeContent === data.id ||
                                (currentMainPath === data.link && !hoveredLink);
                            const isHovered = hoveredLink === data.id;

                            return (
                                <div
                                    key={data.id}
                                    className="relative"
                                    onMouseEnter={() => handleLinkHover(data.id)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    <Link
                                        to={`/what-we-do/${data.link}`}
                                        className="block"
                                        onClick={() => handleLinkClick(data.id)}
                                    >
                                        <motion.div
                                            className={`flex items-center justify-between text-white p-3 rounded-md ${isActive || isHovered ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-all duration-300`}
                                            animate={{ x: isHovered ? 10 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="font-medium">{data.name}</span>
                                            <motion.div
                                                animate={{
                                                    x: isHovered ? [0, 5, 0] : 0,
                                                    opacity: isHovered || isActive ? 1 : 0
                                                }}
                                                transition={{
                                                    repeat: isHovered || isActive ? Infinity : 0,
                                                    duration: 1.5
                                                }}
                                            >
                                                <ArrowRight size={16} className="text-white" />
                                            </motion.div>
                                        </motion.div>
                                    </Link>

                                    {/* Hover or selected indicator */}
                                    <motion.div
                                        className={`h-1 ${data.color} absolute bottom-0 left-0 right-0 rounded-full pointer-events-none`}
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={
                                            isHovered || isActive
                                                ? { width: '100%', opacity: 1 }
                                                : { width: 0, opacity: 0 }
                                        }
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
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

export default WhatWeDo;