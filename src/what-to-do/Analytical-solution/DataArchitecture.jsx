import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataArchitecture() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Data Architecture Design',
            description:
                'Crafting custom data architectures that ensure seamless integration across systems, optimize data flow, and meet scalability and performance requirements for growing data needs.',
        },
        {
            title: 'Data Modeling & Database Design',
            description:
                'Designing logical and physical data models to structure data efficiently, ensuring easy access, consistency, and reliability across various platforms and systems.',
        },
        {
            title: 'Data Integration Strategy',
            description:
                'Developing strategies to integrate disparate data sources and platforms, enabling a unified view of data across your organization and improving decision-making capabilities.',
        },
        {
            title: 'Cloud Data Architecture',
            description:
                'Assisting in the design of cloud-native data architectures that leverage the flexibility, scalability, and cost efficiency of cloud platforms, ensuring seamless migration or integration with existing systems.',
        },
        {
            title: 'Big Data Architecture',
            description:
                'Designing architectures capable of handling large-scale, complex data sets, including unstructured data, ensuring high availability, fault tolerance, and performance for big data applications.',
        },
        {
            title: 'Real-Time Data Architecture',
            description:
                'Implementing real-time data processing frameworks to handle streaming data, providing timely insights and enabling businesses to respond rapidly to changing conditions.',
        },
        {
            title: 'Data Warehousing & Data Lakes',
            description:
                'Designing data warehouse and data lake solutions that provide centralized, structured, and unstructured data storage to support business intelligence, analytics, and machine learning initiatives.',
        },
        {
            title: 'Data Security & Compliance',
            description:
                'Integrating robust security and compliance protocols into the architecture to safeguard sensitive data and ensure adherence to regulatory standards such as GDPR or HIPAA.',
        },
        {
            title: 'Data Governance Integration',
            description:
                'Ensuring that data governance best practices are incorporated into the architecture, establishing clear data stewardship, access control, and data lineage for effective management and accountability.',
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
                    Data Architecture
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We provide expert data architecture consulting services to help organizations design, implement, and optimize their data infrastructure. A robust data architecture is essential for efficiently managing, storing, and processing large volumes of data while ensuring scalability, security, and accessibility.
                        <br /><br />
                        Our team works with businesses to create custom data architectures that align with both current and future business needs, enabling data-driven decision-making and operational efficiency.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Data Architecture Services Include:</h2>

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

                    <p className="italic text-gray-300">
                        We work closely with your team to design data architectures that empower your organization to harness the full potential of your data—enabling better decision-making, operational efficiency, and future growth.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DataArchitecture;
