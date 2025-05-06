import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataAnalyticsModernization() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Legacy System Modernization',
            description:
                'Assessing and modernizing your existing data infrastructure and legacy systems to enhance performance, scalability, and integration with new technologies, ensuring future-proof solutions.',
        },
        {
            title: 'Cloud Data & Analytics Migration',
            description:
                'Helping organizations migrate from on-premise data solutions to cloud-based platforms, optimizing data storage, processing, and analytics with the flexibility, scalability, and cost-efficiency of the cloud.',
        },
        {
            title: 'Data Architecture & Platform Overhaul',
            description:
                'Designing and implementing modern, scalable data architectures that support real-time analytics, big data, and business intelligence applications while improving data flow, accessibility, and security.',
        },
        {
            title: 'Advanced Analytics & AI Integration',
            description:
                'Incorporating advanced analytics techniques such as machine learning, AI, and predictive modeling into your data infrastructure, enabling deeper insights, automation, and smarter decision-making.',
        },
        {
            title: 'Data Governance & Security Upgrades',
            description:
                'Enhancing your data governance framework to ensure the integrity, security, and compliance of your data across modern platforms, helping you adhere to regulations and protect sensitive information.',
        },
        {
            title: 'Real-Time & Streaming Data Solutions',
            description:
                'Implementing real-time data processing and streaming analytics capabilities, ensuring businesses can respond swiftly to changing conditions with up-to-the-minute insights.',
        },
        {
            title: 'Self-Service & Augmented Analytics',
            description:
                'Deploying modern self-service BI tools and augmented analytics platforms that empower business users to access and analyze data without the need for complex IT support, promoting data democratization.',
        },
        {
            title: 'Data Integration & Automation',
            description:
                'Modernizing data integration pipelines, automating data workflows, and eliminating manual processes to ensure seamless and efficient data flow from disparate systems to analytics platforms.',
        },
        {
            title: 'Analytics Performance Optimization',
            description:
                'Optimizing the performance of your analytics systems to ensure faster query processing, better scalability, and improved overall efficiency, enhancing decision-making capabilities across the business.',
        },
        {
            title: 'Change Management & Adoption',
            description:
                'Providing support in managing the cultural and organizational changes necessary for successful adoption of new data and analytics technologies, ensuring smooth transitions and maximizing value from new systems.',
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
                    Data & Analytics Modernization
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We offer Data & Analytics Modernization consulting services to help organizations transform their legacy data infrastructure and analytics capabilities into cutting-edge, scalable solutions. By modernizing your data environment, we enable businesses to enhance their data management, improve analytics accuracy, and achieve faster insights—all while driving innovation and maintaining a competitive edge in a data-driven world.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Data Modernization Services Include:</h2>

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
                        Our goal is to help you modernize your data and analytics infrastructure, empowering your organization to leverage the latest technologies for better decision-making, enhanced operational efficiency, and sustainable business growth.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DataAnalyticsModernization;
