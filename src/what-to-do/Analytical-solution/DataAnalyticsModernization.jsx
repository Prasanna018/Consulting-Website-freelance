import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataAnalyticsModernization() {
    const navigate = useNavigate();

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
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="container mx-auto px-4 pt-20 pb-20"
            >
                <button
                    onClick={() => navigate('/what-we-do/analytics-solutions', { replace: false })}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Services
                </button>

                <h1 className="text-4xl font-bold mb-8">Data & Analytics Modernization</h1>

                <div className="p-4 font-semibold text-xl">
                    We offer Data & Analytics Modernization consulting services to help organizations transform their legacy data infrastructure and analytics capabilities into cutting-edge, scalable solutions. By modernizing your data environment, we enable businesses to enhance their data management, improve analytics accuracy, and achieve faster insights, all while driving innovation and maintaining a competitive edge in a data-driven world.
                    <br /><br />
                    Our Data & Analytics Modernization consulting services include:
                </div>

                <div className="p-2 text-lg">
                    <p className="mb-4">
                        <b className="text-xl">Legacy System Modernization:</b> Assessing and modernizing your existing data infrastructure and legacy systems to enhance performance, scalability, and integration with new technologies, ensuring future-proof solutions.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Cloud Data & Analytics Migration:</b> Helping organizations migrate from on-premise data solutions to cloud-based platforms, optimizing data storage, processing, and analytics with the flexibility, scalability, and cost-efficiency of the cloud.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Architecture & Platform Overhaul:</b> Designing and implementing modern, scalable data architectures that support real-time analytics, big data, and business intelligence applications while improving data flow, accessibility, and security.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Advanced Analytics & AI Integration:</b> Incorporating advanced analytics techniques such as machine learning, AI, and predictive modeling into your data infrastructure, enabling deeper insights, automation, and smarter decision-making.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Governance & Security Upgrades:</b> Enhancing your data governance framework to ensure the integrity, security, and compliance of your data across modern platforms, helping you adhere to regulations and protect sensitive information.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Real-Time & Streaming Data Solutions:</b> Implementing real-time data processing and streaming analytics capabilities, ensuring businesses can respond swiftly to changing conditions with up-to-the-minute insights.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Self-Service & Augmented Analytics:</b> Deploying modern self-service BI tools and augmented analytics platforms that empower business users to access and analyze data without the need for complex IT support, promoting data democratization.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Integration & Automation:</b> Modernizing data integration pipelines, automating data workflows, and eliminating manual processes to ensure seamless and efficient data flow from disparate systems to analytics platforms.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Analytics Performance Optimization:</b> Optimizing the performance of your analytics systems to ensure faster query processing, better scalability, and improved overall efficiency, enhancing decision-making capabilities across the business.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Change Management & Adoption:</b> Providing support in managing the cultural and organizational changes necessary for successful adoption of new data and analytics technologies, ensuring smooth transitions and maximizing value from new systems.
                    </p>
                    <p className="pt-4 text-lg">
                        Our goal is to help you modernize your data and analytics infrastructure, empowering your organization to leverage the latest technologies for better decision-making, enhanced operational efficiency, and sustainable business growth. We work with you to ensure that your data ecosystem supports current needs and is prepared for future opportunities.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default DataAnalyticsModernization;
