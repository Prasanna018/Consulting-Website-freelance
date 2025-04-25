import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataArchitecture() {
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
                    Back to Services
                </button>

                <h1 className="text-4xl font-bold mb-8">Data Architecture</h1>

                <div className="p-4 font-semibold">
                    <p className="text-xl">
                        We provide expert data architecture consulting services to help organizations design, implement, and optimize their data infrastructure. A robust data architecture is essential for efficiently managing, storing, and processing large volumes of data while ensuring scalability, security, and accessibility. Our team works with businesses to create custom data architectures that align with both current and future business needs, enabling data-driven decision-making and operational efficiency.
                        <br /><br />
                        Our data architecture consulting services include:
                    </p>
                </div>

                <div>
                    <p className="p-2 text-lg">
                        <b className="text-xl">Data Architecture Design:</b> Crafting custom data architectures that ensure seamless integration across systems, optimize data flow, and meet scalability and performance requirements for growing data needs.
                        <br /><br />
                        <b className="text-xl">Data Modeling & Database Design:</b> Designing logical and physical data models to structure data efficiently, ensuring easy access, consistency, and reliability across various platforms and systems.
                        <br /><br />
                        <b className="text-xl">Data Integration Strategy:</b> Developing strategies to integrate disparate data sources and platforms, enabling a unified view of data across your organization and improving decision-making capabilities.
                        <br /><br />
                        <b className="text-xl">Cloud Data Architecture:</b> Assisting in the design of cloud-native data architectures that leverage the flexibility, scalability, and cost efficiency of cloud platforms, ensuring seamless migration or integration with existing systems.
                        <br /><br />
                        <b className="text-xl">Big Data Architecture:</b> Designing architectures capable of handling large-scale, complex data sets, including unstructured data, ensuring high availability, fault tolerance, and performance for big data applications.
                        <br /><br />
                        <b className="text-xl">Real-Time Data Architecture:</b> Implementing real-time data processing frameworks to handle streaming data, providing timely insights and enabling businesses to respond rapidly to changing conditions.
                        <br /><br />
                        <b className="text-xl">Data Warehousing & Data Lakes:</b> Designing data warehouse and data lake solutions that provide centralized, structured, and unstructured data storage to support business intelligence, analytics, and machine learning initiatives.
                        <br /><br />
                        <b className="text-xl">Data Security & Compliance:</b> Integrating robust security and compliance protocols into the architecture to safeguard sensitive data and ensure adherence to regulatory standards such as GDPR or HIPAA.
                        <br /><br />
                        <b className="text-xl">Data Governance Integration:</b> Ensuring that data governance best practices are incorporated into the architecture, establishing clear data stewardship, access control, and data lineage for effective management and accountability.
                        <p className="text-lg pt-4">
                            We work closely with your team to design data architectures that empower your organization to harness the full potential of your data, enabling better decision-making, operational efficiency, and growth. Our goal is to build scalable, secure, and efficient data infrastructures that meet your specific business needs and future-proof your data environment.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default DataArchitecture;
