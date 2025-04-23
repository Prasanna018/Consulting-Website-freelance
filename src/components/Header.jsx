import React, { useState, useEffect } from 'react';
import { Meneus } from '../data/Menues.jsx';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeRoute, setActiveRoute] = useState(location.pathname);

    const handleNavClick = (path, e) => {
        if (path === activeRoute) {
            e.preventDefault();
            setVisible(prev => !prev);
        } else {
            setVisible(true);
            setActiveRoute(path);
        }

        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        if (location.pathname !== activeRoute) {
            setVisible(true);
            setActiveRoute(location.pathname);
        }
    }, [location.pathname]);

    return (
        <>
            <nav className="w-full bg-black flex justify-between items-center p-4 px-8">
                {/* Logo */}
                <div className="font-bold text-xl text-white">
                    <Link to="/">CONSULTANTS</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-1"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-6">
                    {Meneus.map((data, id) => (
                        <div key={id} className="relative">
                            <Link
                                to={data.link}
                                className={`flex items-center text-white text-lg font-semibold gap-1 hover:underline ${activeRoute === data.link ? 'text-blue-300' : ''}`}
                                onClick={(e) => handleNavClick(data.link, e)}
                            >
                                {data.name}
                                {activeRoute === data.link ? (
                                    visible ? <ChevronUp size={20} /> : <ChevronDown size={20} />
                                ) : (
                                    <ChevronDown size={20} />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-gray-900 w-full"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {Meneus.map((data, id) => (
                            <Link
                                key={id}
                                to={data.link}
                                className={`block text-white p-4 border-b border-gray-800 last:border-b-0 flex justify-between items-center ${activeRoute === data.link ? 'bg-gray-800' : ''}`}
                                onClick={(e) => handleNavClick(data.link, e)}
                            >
                                {data.name}
                                {activeRoute === data.link ? (
                                    visible ? <ChevronUp size={20} /> : <ChevronDown size={20} />
                                ) : (
                                    <ChevronDown size={20} />
                                )}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page Content */}
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;
