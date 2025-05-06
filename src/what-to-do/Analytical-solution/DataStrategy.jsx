import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataStrategy() {
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
            {/* Hide scrollbar for Chrome, Safari and Opera */}
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
                    onClick={() => navigate('/what-we-do/analytics-solutions', { replace: false })}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Analytical Solution
                </button>

                <h1 className="text-4xl font-bold mb-8">Data Strategy</h1>

                <div className="p-4 font-semibold">
                    <p className="text-xl">
                        We provide expert data strategy consulting services to help organizations harness the full potential of their data. A well-crafted data strategy is essential for making informed decisions, driving innovation, and achieving business objectives. Our team helps you develop a comprehensive strategy that ensures your data is effectively collected, managed, analyzed, and used to deliver measurable results.
                        <br /><br />
                        Our data strategy consulting services include:
                    </p>
                </div>

                <div>
                    <p className="p-2 text-lg">
                        <b className="text-xl">Data Strategy Development:</b> Creating a tailored data strategy that aligns with your business goals, ensuring that data initiatives support long-term objectives and provide a clear path for success.
                        <br /><br />
                        <b className="text-xl">Data Governance & Management:</b> Establishing robust data governance frameworks to ensure data accuracy, quality, security, and compliance with industry regulations, such as GDPR or HIPAA.
                        <br /><br />
                        <b className="text-xl">Data Architecture & Infrastructure:</b> Designing scalable, secure, and high-performance data architectures that integrate with existing systems, providing the foundation for efficient data management and analytics.
                        <br /><br />
                        <b className="text-xl">Data Integration & Optimization:</b> Assisting in the integration of disparate data sources, whether on-premises or in the cloud, ensuring seamless data flow and enabling comprehensive analytics.
                        <br /><br />
                        <b className="text-xl">Advanced Analytics Enablement:</b> Ensuring that your data strategy includes the right tools and technologies to enable advanced analytics, such as machine learning, AI, and predictive modeling.
                        <br /><br />
                        <b className="text-xl">Data-Driven Culture Development:</b> Helping your organization build a data-driven culture by fostering collaboration, training teams, and embedding data-driven decision-making at all levels.
                        <br /><br />
                        <b className="text-xl">Change Management & Data Adoption:</b> Guiding your organization through the adoption of new data practices and technologies, ensuring smooth transitions and alignment with business objectives.
                        <p className="text-lg pt-4">
                            Our goal is to ensure that your organization has a clear, actionable data strategy that supports business agility, fosters innovation, and drives competitive advantage. We work closely with your team to help you maximize the value of your data, enabling smarter decision-making and improved business performance.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default DataStrategy;
