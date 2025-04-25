import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const dataServicesList = [
    { id: 1, name: 'Data Strategy', link: '/data-strategy' },
    { id: 2, name: 'Generative AI', link: '/generative-ai' },
    { id: 3, name: 'Cloud Services', link: '/cloud-services' },
    { id: 4, name: 'Data Management', link: '/data-management' },
    { id: 5, name: 'Data Architecture', link: '/data-architecture' },
    { id: 6, name: 'BI & Analytics', link: '/bi-analytics' },
    { id: 7, name: 'Data & Analytics Modernization', link: '/data-analytics-modernization' },
    { id: 8, name: 'Data Governance', link: '/data-governance' },
    { id: 9, name: 'Data Engineering & Integration', link: '/data-engineering-integration' },
    { id: 10, name: 'Data Visualization & Reporting', link: '/data-visualization-reporting' }
];




function AnalyticalSolution() {


    return (
        <div className="w-full text-white">
            <h1 className="text-3xl font-bold mb-6">Industries We Serve</h1>


            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                {dataServicesList.map(industry => (
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

export default AnalyticalSolution;