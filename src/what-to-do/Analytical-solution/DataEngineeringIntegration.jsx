import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataEngineeringIntegration() {
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

                <h1 className="text-4xl font-bold mb-8">Data Engineering & Integration</h1>

                <div className="p-4 font-semibold text-xl">
                    We offer expert Data Engineering & Integration consulting services to help organizations build robust data pipelines, integrate disparate data sources, and ensure seamless data flow across systems. By optimizing data engineering processes and integrating data sources effectively, we enable businesses to unlock valuable insights, improve decision-making, and enhance operational efficiency.
                    <br /><br />
                    Our Data Engineering & Integration consulting services include:
                </div>

                <div className="p-2 text-lg">
                    <p className="mb-4">
                        <b className="text-xl">Data Pipeline Development:</b> Designing and building scalable, high-performance data pipelines that automate data collection, transformation, and loading (ETL/ELT), ensuring data is readily available for analytics and reporting.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Integration Strategy:</b> Developing comprehensive strategies to integrate data from diverse sources, including on-premises systems, cloud platforms, and third-party applications, ensuring a unified and accessible data environment.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Real-Time Data Integration:</b> Implementing real-time data streaming and integration solutions that provide up-to-the-minute insights and enable businesses to respond quickly to changing conditions.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Cloud Data Integration:</b> Assisting with the seamless integration of cloud-based data solutions, helping you leverage cloud platforms for storage, processing, and analytics while ensuring data consistency and security.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Warehousing & Data Lakes:</b> Designing and implementing data warehousing solutions and data lakes to centralize and store structured and unstructured data for improved accessibility, scalability, and performance in analytics.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Transformation & Cleaning:</b> Ensuring that data is properly transformed and cleansed during the integration process, removing inconsistencies, duplicates, and errors to ensure data quality and reliability.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">API & Service Integration:</b> Developing APIs and service integrations to ensure smooth data exchange between internal systems and external platforms, improving automation and data accessibility across your ecosystem.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Big Data & Advanced Analytics Integration:</b> Integrating big data technologies and analytics tools into your data infrastructure to enable the handling of large-scale datasets and more complex analytical tasks, such as machine learning and AI.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Governance & Security in Integration:</b> Implementing governance frameworks and security protocols to ensure that integrated data is secure, compliant with regulations, and accurately tracked throughout its lifecycle.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Integration Platform Selection & Implementation:</b> Assisting in the selection and implementation of the most suitable data integration platforms (e.g., Talend, Apache Nifi, Informatica) based on your needs, ensuring scalability, reliability, and efficiency.
                    </p>
                    <p className="pt-4 text-lg">
                        Our goal is to help you create a seamless, efficient, and scalable data integration infrastructure that enables real-time access to clean, consistent, and reliable data across the organization. By optimizing data engineering and integration, we empower your business to make data-driven decisions, improve operational efficiency, and unlock new growth opportunities.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default DataEngineeringIntegration;
