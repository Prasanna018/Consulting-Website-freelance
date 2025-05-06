import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataGovernance() {
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

                <h1 className="text-4xl font-bold mb-8">Data Governance</h1>

                <div className="p-4 font-semibold text-xl">
                    We provide expert data governance consulting services to help organizations establish and maintain strong frameworks for managing their data effectively. Data governance ensures that data is accurate, secure, accessible, and compliant with industry regulations. Our services are designed to empower organizations to manage their data as a strategic asset, reduce risks, and maximize the value of their data.
                    <br /><br />
                    Our data governance consulting services include:
                </div>

                <div className="p-2 text-lg">
                    <p className="mb-4">
                        <b className="text-xl">Data Governance Framework Development:</b> Designing and implementing a customized data governance framework that aligns with your business goals, ensuring that data is managed consistently, securely, and responsibly across the organization.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Stewardship & Accountability:</b> Establishing clear roles and responsibilities for data stewardship, ensuring data owners and custodians are accountable for maintaining data quality, security, and compliance.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Quality Management:</b> Developing processes and tools to maintain high standards of data quality, including data cleansing, validation, and enrichment, ensuring that data is reliable, consistent, and accurate.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Security & Privacy:</b> Implementing robust data security and privacy protocols to protect sensitive information and ensure compliance with regulatory requirements such as GDPR, HIPAA, and CCPA.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Classification & Metadata Management:</b> Defining data classification standards and implementing metadata management practices to enhance data discovery, accessibility, and understanding, while ensuring the appropriate use of data across systems.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Compliance & Regulatory Management:</b> Ensuring that your data governance practices comply with industry standards and legal regulations, minimizing the risk of non-compliance and potential penalties.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Lineage & Auditability:</b> Implementing data lineage tracking to provide visibility into data flows, transformations, and usage, enabling better transparency and auditability of data throughout its lifecycle.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Master Data Management (MDM):</b> Establishing and maintaining a single, authoritative source of truth for key business data across systems, ensuring consistency and reducing duplication or discrepancies.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Data Governance Tools & Automation:</b> Selecting and implementing the right data governance tools and technologies to automate governance processes, monitor data quality, and ensure continuous improvement.
                    </p>
                    <p className="mb-4">
                        <b className="text-xl">Training & Change Management:</b> Providing training and support to ensure the effective adoption of data governance practices across the organization, helping to build a culture of data responsibility and accountability.
                    </p>
                    <p className="pt-4 text-lg">
                        Our goal is to help you create a solid data governance foundation that enhances data trustworthiness, security, and usability, empowering your organization to unlock the full potential of its data while mitigating risks. We work closely with your team to ensure that your data governance practices are effective, scalable, and aligned with your strategic business objectives.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default DataGovernance;
