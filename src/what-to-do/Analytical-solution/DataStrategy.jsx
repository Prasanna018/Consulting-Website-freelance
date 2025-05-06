import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataStrategy() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Data Strategy Development',
            description: 'Creating a customized data strategy aligned with your business goals to support long-term objectives and data maturity.',
        },
        {
            title: 'Data Governance & Management',
            description: 'Implementing governance frameworks to ensure data quality, accuracy, security, and compliance with regulations like GDPR and HIPAA.',
        },
        {
            title: 'Data Architecture & Infrastructure',
            description: 'Designing secure and scalable architectures that integrate with existing systems and enable efficient data flow and analysis.',
        },
        {
            title: 'Data Integration & Optimization',
            description: 'Connecting and optimizing disparate data sources—whether on-prem or in the cloud—for comprehensive analytics and seamless flow.',
        },
        {
            title: 'Advanced Analytics Enablement',
            description: 'Embedding capabilities like AI, machine learning, and predictive modeling into your strategy to unlock advanced insights.',
        },
        {
            title: 'Data-Driven Culture Development',
            description: 'Fostering a culture of data-driven decision-making through collaboration, team enablement, and organizational alignment.',
        },
        {
            title: 'Change Management & Data Adoption',
            description: 'Guiding smooth transitions to new data practices and tools, ensuring successful adoption aligned with strategic goals.',
        },
    ];

    return (
        <div
            className="min-h-screen w-full bg-[#1e2223] text-white overflow-y-auto"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
            }}
        >
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="container mx-auto px-4 pt-20 pb-20"
            >
                <motion.button
                    whileHover={{ x: -3 }}
                    onClick={() => navigate('/what-we-do/analytics-solutions', { replace: false })}
                    className="flex cursor-pointer items-center gap-2 text-blue-400 mb-8 hover:text-blue-300 transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Analytical Solution</span>
                </motion.button>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                >
                    Data Strategy
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We provide expert data strategy consulting services to help organizations harness the full potential of their data. A strong data strategy enables informed decisions, fosters innovation, and drives measurable outcomes by ensuring data is effectively managed and aligned with your core business objectives.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Data Strategy Consulting Services Include:</h2>

                        <div className="space-y-6">
                            {services.map((service, idx) => (
                                <div className="flex items-start" key={idx}>
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                                        <span className="text-white font-bold">{idx + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-blue-200">{service.title}</h3>
                                        <p className="text-gray-300 mt-1">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="italic text-gray-300 mt-6">
                        Our goal is to ensure your organization has a clear, actionable data strategy that empowers agility, fosters innovation, and drives long-term success through data.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DataStrategy;
