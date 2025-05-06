import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function BIAnalytics() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'BI Strategy Development',
            description:
                'Creating a tailored BI strategy aligned with business goals to ensure that data collection, reporting, and analysis provide real business value.',
        },
        {
            title: 'Data Visualization & Reporting',
            description:
                'Designing intuitive dashboards and reports to simplify complex data and enhance real-time decision-making.',
        },
        {
            title: 'Advanced Analytics & Predictive Modeling',
            description:
                'Applying machine learning and statistical techniques to predict trends and drive proactive strategies.',
        },
        {
            title: 'Data Integration for BI',
            description:
                'Bringing together data from multiple systems to create unified, accurate, and timely business insights.',
        },
        {
            title: 'Data Warehousing & Data Lakes for Analytics',
            description:
                'Building scalable data infrastructure (warehouses and lakes) for storing structured and unstructured data.',
        },
        {
            title: 'Self-Service BI Tools',
            description:
                'Implementing user-friendly tools that allow teams to generate insights independently, increasing agility.',
        },
        {
            title: 'BI Platform Selection & Implementation',
            description:
                'Assisting in selecting and setting up tools like Power BI, Tableau, or Qlik to enhance your analytics ecosystem.',
        },
        {
            title: 'Performance & KPI Analysis',
            description:
                'Defining and tracking KPIs to measure success and support strategic decision-making.',
        },
        {
            title: 'BI Training & Adoption',
            description:
                'Training teams to effectively use BI tools, fostering a data-driven culture across the organization.',
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
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
                    BI & Analytics
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We offer expert Business Intelligence (BI) & Analytics consulting services to help organizations transform raw data into actionable insights that drive strategic decision-making. Using modern BI platforms and advanced analytics tools, we help businesses unlock their full potential through data.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our BI & Analytics Services</h2>

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
                        Our goal is to help you make smarter, faster decisions by building an intelligent analytics infrastructure that scales with your business. With the right strategy, tools, and guidance, we empower your organization to stay competitive, optimize operations, and uncover new growth opportunities.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default BIAnalytics;
