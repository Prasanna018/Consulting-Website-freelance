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
        <div className="w-full text-white">
            <h1 className="text-3xl font-bold mb-6">Industries We Serve</h1>


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
    );
}

export default TechanicalSolution;