import React, { useState, useEffect } from 'react';
import { Meneus } from '../data/Menues.jsx';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    // Lock scroll when any link is active (not home)
    useEffect(() => {
        if (location.pathname !== '/') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // Reset on unmount
        };
    }, [location.pathname]);

    // Sync activeLink with current path
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleMobileClick = (link) => {
        setMobileMenuOpen(false);
        setActiveLink(link);
        navigate(link);
    };

    const handleDesktopClick = (link) => {
        if (activeLink === link) {
            setActiveLink('');
            navigate('/');
        } else {
            setActiveLink(link);
            navigate(link);
        }
    };

    return (
        <>
            <nav className="w-full bg-black flex justify-between items-center p-4 px-6 md:px-12">
                <div className="font-bold text-xl text-white">
                    <Link to="/" onClick={() => setActiveLink('')}>CONSULTANTS</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-1"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {Meneus.map((data, id) => (
                        <div key={id}>
                            <button
                                onClick={() => handleDesktopClick(data.link)}
                                className={`flex items-center text-white text-lg cursor-pointer font-semibold gap-1 hover:underline focus:outline-none ${activeLink === data.link ? 'underline' : ''}`}
                            >
                                {data.name}
                                {activeLink === data.link ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                        </div>
                    ))}
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-[#1e2223] w-full"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {Meneus.map((data, id) => (
                            <button
                                key={id}
                                onClick={() => handleMobileClick(data.link)}
                                className={`w-full text-left text-white p-4 border-b border-gray-800 last:border-b-0 flex justify-between items-center ${location.pathname === data.link ? 'bg-gray-800' : ''}`}
                            >
                                {data.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page Content */}
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full bg-[#1e2223]"
            >
                <Outlet />
            </motion.div>
        </>
    );
}

export default Header;
