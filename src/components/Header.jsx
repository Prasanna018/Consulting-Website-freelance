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
    const [bgColor, setBgColor] = useState('#1e2223');

    useEffect(() => {
        // Check if the current path matches any menu item
        const currentPath = location.pathname;
        const isTeamPath = currentPath.includes('/team');

        if (isTeamPath) {
            // For team pages, set the active link to the team base path
            setActiveLink('/team');
        } else {
            // For other pages, set active link to the exact path
            setActiveLink(currentPath);
        }

        // Set background color based on current path
        if (currentPath === '/') {
            setBgColor('#1e2223');
        } else {
            // Find menu item matching the current path or its parent path
            const activeMenu = Meneus.find(menu =>
                menu.link === currentPath ||
                (isTeamPath && menu.link === '/team')
            );

            if (activeMenu && activeMenu.bgColor) {
                setBgColor(activeMenu.bgColor);
            } else {
                setBgColor('#1e2223');
            }
        }
    }, [location.pathname]);

    const handleMobileClick = (link) => {
        setMobileMenuOpen(false);

        // Check if we're clicking on already active link
        if (activeLink === link || (location.pathname.includes('/team') && link === '/team')) {
            setActiveLink('');
            navigate('/');
        } else {
            setActiveLink(link);
            navigate(link);
        }
    };

    const handleDesktopClick = (link) => {
        // Check if clicking on already active link (including team pages)
        if ((activeLink === link) || (location.pathname.includes('/team') && link === '/team' && activeLink === '/team')) {
            // If clicked the active link, go to homepage
            setActiveLink('');
            navigate('/');
        } else {
            // Otherwise navigate to the clicked link
            setActiveLink(link);
            navigate(link);
        }
    };

    return (
        <>
            <nav className="w-full fixed top-0 z-50 bg-black flex justify-between items-center p-4 px-6 md:px-12">
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
                    {Meneus.map((data, id) => {
                        // Check if this menu item is the team menu and we're on a team page
                        const isTeamMenu = data.link === '/team';
                        const isTeamPath = location.pathname.includes('/team');
                        const isActive = isTeamMenu && isTeamPath ? true : activeLink === data.link;

                        return (
                            <div key={id}>
                                <button
                                    onClick={() => handleDesktopClick(data.link)}
                                    className={`flex items-center text-white text-lg cursor-pointer font-semibold gap-1 hover:underline focus:outline-none ${isActive ? 'underline' : ''}`}
                                >
                                    {data.name}
                                    {isActive ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden fixed w-full mt-16 overflow-y-auto"
                        style={{
                            backgroundColor: bgColor,
                            maxHeight: '70vh',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none'
                        }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {Meneus.map((data, id) => {
                            // Check if this menu item is the team menu and we're on a team page
                            const isTeamMenu = data.link === '/team';
                            const isTeamPath = location.pathname.includes('/team');
                            const isActive = isTeamMenu && isTeamPath ? true : location.pathname === data.link;

                            return (
                                <button
                                    key={id}
                                    onClick={() => handleMobileClick(data.link)}
                                    className={`w-full text-left text-white p-4 border-b border-gray-800 last:border-b-0 flex justify-between items-center ${isActive ? 'bg-gray-800' : ''}`}
                                >
                                    <span>{data.name}</span>
                                    {isActive ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}
                                </button>
                            );
                        })}
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
                style={{ backgroundColor: bgColor }}
                className="w-full overflow-auto"
            >
                <Outlet />
            </motion.div>
        </>
    );
}

export default Header;