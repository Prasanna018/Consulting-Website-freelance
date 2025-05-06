import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataGovernance() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Data Governance Framework Development',
            description: 'Tailored frameworks to manage data securely and consistently across your organization.',
        },
        {
            title: 'Data Stewardship & Accountability',
            description: 'Assigning roles to ensure ownership of data quality, compliance, and governance.',
        },
        {
            title: 'Data Quality Management',
            description: 'Implementing data cleansing and validation processes for accuracy and consistency.',
        },
        {
            title: 'Data Security & Privacy',
            description: 'Protecting sensitive data and ensuring compliance with GDPR, HIPAA, CCPA, etc.',
        },
        {
            title: 'Data Classification & Metadata Management',
            description: 'Improving discoverability and control by standardizing classification and metadata.',
        },
        {
            title: 'Compliance & Regulatory Management',
            description: 'Ensuring your data practices align with laws and minimize risk.',
        },
        {
            title: 'Data Lineage & Auditability',
            description: 'Tracking data flows and transformations for transparency and auditing.',
        },
        {
            title: 'Master Data Management (MDM)',
            description: 'Creating a single source of truth across enterprise systems.',
        },
        {
            title: 'Data Governance Tools & Automation',
            description: 'Deploying tools to monitor quality, automate workflows, and enforce policies.',
        },
        {
            title: 'Training & Change Management',
            description: 'Educating teams and fostering a culture of data accountability.',
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
                    Data Governance
                </motion.h1>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8">
                    <p>
                        We provide expert data governance consulting to help you manage data as a strategic asset. Our approach strengthens data accuracy, security, accessibility, and regulatory compliance.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Data Governance Services Include:</h2>
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
                        Our goal is to help you establish a trusted and scalable governance framework that enables responsible data use, minimizes risk, and drives long-term business value.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DataGovernance;
