import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataManagement() {
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
            {/* Hide scrollbar for Chrome, Safari, and Opera */}
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            {/* Animate the content wrapper */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="container mx-auto px-4 pt-20 pb-20"
            >
                {/* Back button */}
                <button
                    onClick={() => navigate('/what-we-do')}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Analytical Solution
                </button>

                <h1 className="text-4xl font-bold mb-8">Data Management</h1>

                <div className="p-4 font-semibold">
                    <p className="text-xl">
                        We offer comprehensive data management consulting services to help organizations effectively collect, store, organize, and utilize their data. Proper data management is critical to ensuring data integrity, accessibility, security, and compliance across the organization. Our team helps businesses develop and implement strategies that enable efficient data flow, governance, and analysis, empowering data-driven decision-making and operational efficiency.
                        <br /><br />
                        Our data management consulting services include:
                    </p>
                </div>

                <div>
                    <p className="p-2 text-lg">
                        <b className="text-xl">Data Governance & Strategy:</b> Developing a robust data governance framework that ensures data is accurate, secure, compliant with regulations (such as GDPR, HIPAA), and accessible across departments.
                        <br /><br />
                        <b className="text-xl">Data Quality Management:</b> Implementing processes and tools to maintain high data quality by cleansing, validating, and enriching data to ensure accuracy, consistency, and reliability.
                        <br /><br />
                        <b className="text-xl">Data Architecture Design:</b> Designing scalable and flexible data architectures that align with your organization’s needs, ensuring efficient storage, processing, and retrieval of data across systems.
                        <br /><br />
                        <b className="text-xl">Data Integration & ETL (Extract, Transform, Load):</b> Assisting in the integration of data from disparate sources, enabling seamless data flow, and providing tools for transforming and loading data for analysis and reporting.
                        <br /><br />
                        <b className="text-xl">Master Data Management (MDM):</b> Creating a unified view of critical business data across systems by consolidating, cleansing, and managing master data, ensuring consistency and accuracy.
                        <br /><br />
                        <b className="text-xl">Cloud Data Management:</b> Advising on the implementation of cloud-based data management solutions, ensuring secure, scalable, and cost-effective data storage and access in the cloud.
                        <br /><br />
                        <b className="text-xl">Big Data Management:</b> Implementing tools and strategies to manage large, complex data sets, including structured and unstructured data, to extract meaningful insights and drive business decisions.
                        <br /><br />
                        <b className="text-xl">Data Security & Compliance:</b> Designing and implementing security protocols to protect data from unauthorized access, breaches, and ensuring compliance with industry-specific regulations.
                        <br /><br />
                        <b className="text-xl">Data Analytics Enablement:</b> Preparing your data infrastructure for advanced analytics by ensuring data is organized, accessible, and optimized for business intelligence, predictive analytics, and machine learning.
                        <p className="text-lg pt-4">
                            We work closely with your team to ensure that your data management practices are aligned with business objectives and that your organization has the right tools, processes, and governance in place to maximize the value of your data. Our goal is to help you unlock the full potential of your data for smarter decision-making, better customer insights, and improved operational outcomes.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default DataManagement;
