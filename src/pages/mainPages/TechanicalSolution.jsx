import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const techIndustryList = [
    { id: 1, name: 'Artificial Intelligence', link: '/artificial-intelligence' },
    { id: 2, name: 'Cybersecurity', link: '/cyber-security' },
    { id: 3, name: 'Network Solutions', link: '/network-solutions' },
    { id: 4, name: 'Cloud', link: '/cloud' },
    { id: 5, name: 'Data Analytics', link: '/data-analytics' },
];



function TechanicalSolution() {


    return (
        <motion.div
            className='p-4 md:p-8 border-2 rounded-lg shadow-md'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
        >

            <div className="w-full text-white">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6">Techanical Solution</h1>


                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {techIndustryList.map(industry => (
                        <motion.div
                            key={industry.id}
                            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >


                            <Link
                                to={industry.link}
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

export default TechanicalSolution;