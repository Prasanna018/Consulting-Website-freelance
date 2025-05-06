import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataEngineeringIntegration() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Data Pipeline Development',
            description: 'Designing and building scalable, high-performance data pipelines that automate data collection, transformation, and loading (ETL/ELT), ensuring data is readily available for analytics and reporting.',
        },
        {
            title: 'Data Integration Strategy',
            description: 'Developing comprehensive strategies to integrate data from diverse sources, including on-premises systems, cloud platforms, and third-party applications, ensuring a unified and accessible data environment.',
        },
        {
            title: 'Real-Time Data Integration',
            description: 'Implementing real-time data streaming and integration solutions that provide up-to-the-minute insights and enable businesses to respond quickly to changing conditions.',
        },
        {
            title: 'Cloud Data Integration',
            description: 'Assisting with the seamless integration of cloud-based data solutions, helping you leverage cloud platforms for storage, processing, and analytics while ensuring data consistency and security.',
        },
        {
            title: 'Data Warehousing & Data Lakes',
            description: 'Designing and implementing data warehousing solutions and data lakes to centralize and store structured and unstructured data for improved accessibility, scalability, and performance in analytics.',
        },
        {
            title: 'Data Transformation & Cleaning',
            description: 'Ensuring that data is properly transformed and cleansed during the integration process, removing inconsistencies, duplicates, and errors to ensure data quality and reliability.',
        },
        {
            title: 'API & Service Integration',
            description: 'Developing APIs and service integrations to ensure smooth data exchange between internal systems and external platforms, improving automation and data accessibility across your ecosystem.',
        },
        {
            title: 'Big Data & Advanced Analytics Integration',
            description: 'Integrating big data technologies and analytics tools into your data infrastructure to enable the handling of large-scale datasets and more complex analytical tasks, such as machine learning and AI.',
        },
        {
            title: 'Data Governance & Security in Integration',
            description: 'Implementing governance frameworks and security protocols to ensure that integrated data is secure, compliant with regulations, and accurately tracked throughout its lifecycle.',
        },
        {
            title: 'Data Integration Platform Selection & Implementation',
            description: 'Assisting in the selection and implementation of the most suitable data integration platforms (e.g., Talend, Apache Nifi, Informatica) based on your needs, ensuring scalability, reliability, and efficiency.',
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
                    Data Engineering & Integration
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We offer expert Data Engineering & Integration consulting services to help organizations build robust data pipelines, integrate disparate data sources, and ensure seamless data flow across systems. By optimizing data engineering processes and integrating data sources effectively, we enable businesses to unlock valuable insights, improve decision-making, and enhance operational efficiency.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Data Engineering & Integration Services Include:</h2>

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
                        Our goal is to help you create a seamless, efficient, and scalable data integration infrastructure that enables real-time access to clean, consistent, and reliable data across the organization. By optimizing data engineering and integration, we empower your business to make data-driven decisions, improve operational efficiency, and unlock new growth opportunities.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DataEngineeringIntegration;
