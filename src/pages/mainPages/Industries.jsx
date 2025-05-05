import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

function Industries({ selectedIndustryId }) {
    return (
        <div className="w-full text-white">
            <h1 className="text-3xl font-bold mb-6">Industries We Serve</h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                {industryList.map(industry => (
                    <motion.div
                        key={industry.id}
                        className={`p-6 rounded-lg transition-all duration-300 ${selectedIndustryId === industry.id
                            ? 'bg-blue-600'
                            : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                        whileHover={{ y: -5 }}
                    >
                        <Link
                            to={industry.link}
                            state={{ selectedIndustryId: industry.id }}
                            className="flex items-center text-white hover:underline"
                        >
                            {industry.name}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Industries;