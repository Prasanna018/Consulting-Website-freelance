import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const industryList = [
    { id: 1, name: 'Banking', link: '/banking' },
    { id: 2, name: 'Education', link: '/education' },
    { id: 3, name: 'Life Sciences', link: '/life-sciences' },
    { id: 4, name: 'Energy and Utilities', link: '/energy-and-utilities' },
    { id: 5, name: 'Manufacturing', link: '/manufacturing' },
    { id: 6, name: 'Distribution', link: '/distribution' },
    { id: 7, name: 'Healthcare', link: '/healthcare' },
    { id: 8, name: 'Retail', link: '/retail' },
    { id: 9, name: 'Media and Information', link: '/media-and-information' },
    { id: 10, name: 'Insurance', link: '/insurance' },
    { id: 11, name: 'Travel and Logistics', link: '/travel-and-logistics' },
];

function Industries({ hoverdlink }) {
    return (
        <motion.div
            className='p-4 md:p-8 border-2 rounded-lg shadow-md'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
        >
            <div className="w-full text-white">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6">Industries</h1>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {industryList.map(industry => (
                        <motion.div
                            key={industry.id}
                            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <Link
                                to={industry.link}
                                state={{ selectedHover: hoverdlink }}
                                className="flex items-center text-blue-400 hover:underline"
                            >
                                {industry.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Industries;
