import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Industries from './mainPages/Industries';
import Demo from '../Demo';


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

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full bg-[#1e2223] p-8 flex flex-col md:flex-row gap-8 rounded-lg shadow-xl"
        >
            {/* Sidebar Navigation */}
            <div
                className="w-full md:w-1/4 flex flex-col gap-6 bg-[#1e2223] p-6 rounded-lg"
            >
                <h2 className="text-white text-xl font-bold mb-4 border-b border-gray-700 pb-2">
                    Navigation
                </h2>

                {routeLinks.map((data) => {
                    const isActive = currentMainPath === data.link;
                    const isHovered = hoveredLink === data.id;

                    return (
                        <div
                            key={data.id}
                            className="relative"
                            onMouseEnter={() => setHoveredLink(data.id)}
                        >
                            <Link to={`/what-we-do/${data.link}`} className="block">
                                <motion.div
                                    className={`flex items-center justify-between text-white p-3 rounded-md ${isActive || isHovered ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-all duration-300`}
                                    animate={{ x: isHovered ? 10 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="font-medium">{data.name}</span>
                                    <motion.div
                                        animate={{
                                            x: isHovered ? [0, 5, 0] : 0,
                                            opacity: isHovered ? 1 : 0
                                        }}
                                        transition={{
                                            repeat: isHovered ? Infinity : 0,
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
            </div>

            {/* Main Content Area */}
            <div className="w-full md:w-3/4 bg-[#1e2223] p-6 rounded-lg text-white relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="w-full"
                    >
                        {hoveredLink === 2 ? <Industries /> : <Demo />}
                    </motion.div>
                </AnimatePresence>



            </div>
        </motion.div>
    );
}

export default WhatWeDo;