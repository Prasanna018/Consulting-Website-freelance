import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataVisualizationReporting() {
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

                <h1 className="text-4xl font-bold mb-8">Data Visualization & Reporting</h1>

                <div className="p-4 font-semibold text-xl">
                    We offer expert Data Visualization & Reporting consulting services to help organizations turn complex data into clear, actionable insights. By designing intuitive visualizations and automated reporting systems, we enable businesses to make data-driven decisions faster and with greater confidence, enhancing strategic planning and operational efficiency.
                    <br /><br />
                    Our Data Visualization & Reporting consulting services include:
                </div>

                <div className="p-2 text-lg">
                    <p className="mb-4">
                        <b className="text-xl">Custom Dashboard Development:</b> Designing and building tailored dashboards that provide real-time, interactive visualizations, allowing stakeholders to easily monitor KPIs, business performance, and trends at a glance.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Reporting Automation:</b> Implementing automated reporting solutions that streamline the generation, distribution, and scheduling of reports, reducing manual effort and ensuring consistent, timely updates.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Advanced Data Visualizations:</b> Creating advanced visualizations such as heatmaps, geospatial maps, and network graphs to reveal deeper insights from complex datasets, making them more accessible and easier to interpret.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Business Intelligence (BI) Tool Implementation:</b> Assisting with the selection and deployment of BI tools (e.g., Tableau, Power BI, Qlik) that best meet your reporting needs, ensuring scalability, security, and ease of use for business users.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Interactive & Self-Service Reporting:</b> Enabling self-service reporting capabilities, empowering business users to create their own reports and visualizations without relying on IT, promoting data democratization across the organization.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Integration for Reporting:</b> Integrating data from multiple sources into a centralized reporting system, ensuring accurate and consistent reporting across all business functions, and enabling comprehensive data analysis.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Performance Dashboards & KPI Monitoring:</b> Helping you define and track key performance indicators (KPIs) through custom dashboards that provide actionable insights, enabling timely and informed decision-making.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Storytelling & Visualization Best Practices:</b> Advising on data storytelling techniques to present complex information in a clear and compelling way, ensuring that insights are communicated effectively to diverse audiences.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Quality Assurance:</b> Ensuring the accuracy, consistency, and reliability of the data used in visualizations and reports, helping you trust the insights and make data-driven decisions with confidence.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Training & Adoption:</b> Providing training and support to help your team leverage data visualization and reporting tools, ensuring full adoption and empowering business users to take advantage of data insights independently.
                    </p>
                    <p className="pt-4 text-lg">
                        Our goal is to help you transform your data into clear, actionable insights through effective visualizations and streamlined reporting processes. We work with your team to ensure that your data is presented in a way that drives better decision-making, enhances collaboration, and supports your overall business objectives.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default DataVisualizationReporting;
