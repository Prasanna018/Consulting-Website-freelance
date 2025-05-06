import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataVisualizationReporting() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Custom Dashboard Development',
            description: 'Designing and building tailored dashboards with real-time, interactive visualizations to monitor KPIs, business performance, and trends at a glance.',
        },
        {
            title: 'Data Reporting Automation',
            description: 'Implementing automated reporting systems for efficient generation, distribution, and scheduling of reports, reducing manual effort and improving timeliness.',
        },
        {
            title: 'Advanced Data Visualizations',
            description: 'Creating heatmaps, geospatial maps, and network graphs to uncover deeper insights from complex datasets and make them more accessible.',
        },
        {
            title: 'Business Intelligence (BI) Tool Implementation',
            description: 'Assisting with the selection and setup of BI tools like Tableau, Power BI, and Qlik to ensure scalability, ease of use, and business readiness.',
        },
        {
            title: 'Interactive & Self-Service Reporting',
            description: 'Enabling users to independently generate reports and visualizations, promoting data democratization and reducing IT dependency.',
        },
        {
            title: 'Data Integration for Reporting',
            description: 'Integrating data from multiple sources into centralized systems for consistent, accurate reporting and cross-functional analysis.',
        },
        {
            title: 'Performance Dashboards & KPI Monitoring',
            description: 'Developing custom dashboards to track KPIs and provide actionable insights that support strategic and operational decisions.',
        },
        {
            title: 'Data Storytelling & Visualization Best Practices',
            description: 'Advising on visual storytelling methods to clearly present complex information to varied audiences for maximum impact.',
        },
        {
            title: 'Data Quality Assurance',
            description: 'Ensuring accuracy, consistency, and reliability of reporting data so your team can trust the insights and make confident decisions.',
        },
        {
            title: 'Training & Adoption',
            description: 'Providing hands-on training and support to empower your team to fully adopt data tools and leverage insights independently.',
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
                    Data Visualization & Reporting
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We offer expert consulting services in Data Visualization & Reporting to help organizations transform raw data into clear, actionable insights. Through intuitive dashboards and automated reporting systems, we empower teams to make data-driven decisions with speed, accuracy, and confidence.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Data Visualization & Reporting Services Include:</h2>

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
                        Our goal is to help your organization make smarter, faster decisions by turning your data into meaningful, visually engaging insights that support collaboration and growth.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DataVisualizationReporting;
