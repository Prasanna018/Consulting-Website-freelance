import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataManagement() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Data Governance & Strategy',
            description: 'Developing a robust data governance framework ensuring data accuracy, security, compliance, and accessibility.',
        },
        {
            title: 'Data Quality Management',
            description: 'Implementing tools and processes to ensure data consistency, accuracy, and reliability.',
        },
        {
            title: 'Data Architecture Design',
            description: 'Creating scalable, flexible architectures for efficient storage, processing, and retrieval of data.',
        },
        {
            title: 'Data Integration & ETL (Extract, Transform, Load)',
            description: 'Seamless data integration across platforms with optimized ETL pipelines.',
        },
        {
            title: 'Master Data Management (MDM)',
            description: 'Creating unified, clean master data across all business systems.',
        },
        {
            title: 'Cloud Data Management',
            description: 'Deploying secure, scalable, and cost-effective cloud data solutions.',
        },
        {
            title: 'Big Data Management',
            description: 'Managing complex structured and unstructured datasets for insightful analysis.',
        },
        {
            title: 'Data Security & Compliance',
            description: 'Ensuring robust protection and adherence to GDPR, HIPAA, and more.',
        },
        {
            title: 'Data Analytics Enablement',
            description: 'Optimizing data infrastructure to support analytics, BI, and ML applications.',
        },
    ];

    return (
        <div className="min-h-screen w-full bg-[#1e2223] text-white overflow-y-auto" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="container mx-auto px-4 pt-20 pb-20">
                <motion.button whileHover={{ x: -3 }} onClick={() => navigate('/what-we-do/analytics-solutions')} className="flex cursor-pointer items-center gap-2 text-blue-400 mb-8 hover:text-blue-300 transition-colors">
                    <ArrowLeft size={18} />
                    <span>Back to Analytical Solution</span>
                </motion.button>

                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Data Management
                </motion.h1>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8">
                    <p>
                        We offer comprehensive data management consulting services to help organizations effectively collect, store, organize, and utilize their data. Our services ensure integrity, accessibility, security, and compliance across your entire organization.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Data Management Services Include:</h2>
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
                        We work closely with your team to align data management with business goals, enabling smarter decision-making, better insights, and operational excellence.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DataManagement;
