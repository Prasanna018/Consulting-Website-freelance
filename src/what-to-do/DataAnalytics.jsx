import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataAnalytics() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Data Strategy & Roadmap Development',
            description: 'Creating a tailored data strategy aligned with business goals, identifying key data sources, and setting a roadmap for value extraction.',
        },
        {
            title: 'Data Visualization & Reporting',
            description: 'Designing dashboards and reports that make complex data understandable for real-time, informed decision-making.',
        },
        {
            title: 'Predictive Analytics & Modeling',
            description: 'Utilizing statistical models and machine learning to forecast trends, behaviors, and outcomes.',
        },
        {
            title: 'Descriptive & Diagnostic Analytics',
            description: 'Interpreting historical data to uncover patterns, performance drivers, and root causes.',
        },
        {
            title: 'Big Data Analytics',
            description: 'Analyzing large, complex data sets (structured/unstructured) to discover insights that fuel innovation.',
        },
        {
            title: 'Customer Analytics & Segmentation',
            description: 'Understanding customer behavior through segmentation and personalization to improve engagement and retention.',
        },
        {
            title: 'Data Governance & Quality Management',
            description: 'Implementing governance frameworks for data integrity, accuracy, and compliance with regulations like GDPR and HIPAA.',
        },
        {
            title: 'Advanced Analytics Solutions',
            description: 'Deploying AI, machine learning, and NLP for automation and deep analytical insight.',
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
                scrollbarWidth: 'none',
            }}
        >
            {/* Hide scrollbar */}
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 pt-20 pb-20"
            >
                {/* Back button */}
                <motion.button
                    whileHover={{ x: -3 }}
                    onClick={() => navigate('/what-we-do/technical-solutions', { replace: false })}
                    className="flex cursor-pointer items-center gap-2 text-blue-400 mb-8 hover:text-blue-300 transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Technical Solutions</span>
                </motion.button>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                >
                    Data Analytics
                </motion.h1>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We offer data analytics consulting services to help organizations unlock valuable insights from their data, enabling smarter decision-making and driving business growth. With the power of advanced analytics, we assist in transforming raw data into actionable insights, enhancing operational efficiency, improving customer experiences, and fostering innovation.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Data Analytics Services</h2>

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

                    <p className="italic text-gray-300">
                        We partner with your team to create a data-driven culture and embed analytics into your business processes. Our mission is to help you harness data to stay competitive, improve efficiency, and unlock new growth opportunities.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DataAnalytics;
