import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Cloud() {
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
                scrollbarWidth: 'none',
            }}
        >
            {/* Hide scrollbar */}
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 pt-20 pb-20"
            >
                {/* Back button */}
                <motion.button
                    whileHover={{ x: -3 }}
                    onClick={() => navigate('/what-we-do/technical-solutions', { replace: false })}
                    className="flex cursor-pointer items-center gap-2 text-blue-400 mb-8 hover:text-blue-300 transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Technical Solutions</span>
                </motion.button>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                >
                    Cloud Solutions
                </motion.h1>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We provide expert cloud solutions consulting services designed to help organizations migrate, optimize, and manage their cloud infrastructure. As businesses increasingly move to the cloud for scalability, flexibility, and cost-efficiency, our team helps you leverage cloud technologies to streamline operations, enhance collaboration, and drive innovation.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Cloud Services</h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Cloud Strategy & Roadmap Development',
                                    description: 'Crafting a tailored cloud strategy that aligns with your business objectives for efficient adoption or migration.',
                                },
                                {
                                    title: 'Cloud Migration',
                                    description: 'Seamless transition from on-premise to cloud, minimizing downtime and preserving data integrity.',
                                },
                                {
                                    title: 'Multi-Cloud & Hybrid Cloud Solutions',
                                    description: 'Designing architectures that balance performance, cost, and compliance across multiple providers.',
                                },
                                {
                                    title: 'Cloud Security',
                                    description: 'Implementing robust protocols including encryption, access controls, and compliance measures.',
                                },
                                {
                                    title: 'Cost Optimization & Management',
                                    description: 'Maximizing value through smart resource allocation and continuous cost tracking.',
                                },
                                {
                                    title: 'Cloud-Native Application Development',
                                    description: 'Building scalable, resilient apps using microservices, containers, and serverless technologies.',
                                },
                                {
                                    title: 'Cloud Infrastructure Monitoring & Management',
                                    description: 'Ongoing support for performance, uptime, and security of your cloud environment.',
                                },
                            ].map((service, idx) => (
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
                        We collaborate with your teams to ensure that your cloud environment is secure, efficient, and scalable. Our goal is to help you harness the full potential of cloud technologies to drive operational excellence and business transformation.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Cloud;
