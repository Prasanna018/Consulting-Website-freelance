import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function BIAnalytics() {
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
                    onClick={() => navigate('/what-we-do')}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Services
                </button>

                <h1 className="text-4xl font-bold mb-8">BI & Analytics</h1>

                <div className="p-4 font-semibold text-xl">
                    We offer expert Business Intelligence (BI) & Analytics consulting services to help organizations transform raw data into actionable insights that drive strategic decision-making. With advanced analytics tools and BI technologies, we help businesses gain a deeper understanding of their performance, identify trends, and improve operational efficiency.
                    <br /><br />
                    Our BI & Analytics consulting services include:
                </div>

                <div className="p-2 text-lg">
                    <p className="mb-4">
                        <b className="text-xl">BI Strategy Development:</b> Creating a customized BI strategy that aligns with your business goals, ensuring that data collection, reporting, and analytics drive meaningful insights and value across the organization.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Visualization & Reporting:</b> Designing intuitive dashboards and visualizations that present complex data in an easy-to-understand format, enabling real-time decision-making and improving stakeholder communication.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Advanced Analytics & Predictive Modeling:</b> Leveraging advanced analytical techniques, including machine learning and predictive modeling, to uncover trends, forecast future outcomes, and enable data-driven decisions.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Integration for BI:</b> Integrating data from multiple sources into a centralized system, enabling accurate, comprehensive, and real-time reporting across all business functions.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Warehousing & Data Lakes for Analytics:</b> Developing data warehouse and data lake solutions that centralize structured and unstructured data for more effective querying, reporting, and analytics.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Self-Service BI Tools:</b> Implementing user-friendly, self-service BI tools that empower business users to generate their own insights and reports without relying on IT teams, improving agility and collaboration.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">BI Platform Selection & Implementation:</b> Helping you select and implement the best BI platforms (such as Power BI, Tableau, Qlik) based on your needs and business requirements to enhance analytics capabilities.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Performance & KPI Analysis:</b> Assisting with the development of key performance indicators (KPIs) and performance metrics to measure business success and track progress toward organizational objectives.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">BI Training & Adoption:</b> Providing training to help your teams effectively use BI tools and analytical capabilities, fostering a data-driven culture within the organization.
                    </p>
                    <p className="pt-4 text-lg">
                        Our goal is to enable your organization to make smarter, data-driven decisions by ensuring your BI and analytics infrastructure is optimized for performance, scalability, and insight. By leveraging our consulting services, we help you unlock the value of your data, improving business performance, customer insights, and competitive advantage.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default BIAnalytics;
