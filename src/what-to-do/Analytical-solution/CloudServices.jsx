import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function CloudServices() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Cloud Strategy & Roadmap Development',
            description:
                'Tailoring cloud strategies that align with business objectives for a smooth, cost-effective cloud journey.',
        },
        {
            title: 'Cloud Migration & Implementation',
            description:
                'Executing seamless cloud migrations from on-premise infrastructure to the cloud with minimal downtime.',
        },
        {
            title: 'Multi-Cloud & Hybrid Cloud Solutions',
            description:
                'Designing resilient and flexible environments using hybrid and multi-cloud architectures to optimize cost and performance.',
        },
        {
            title: 'Cloud Infrastructure Optimization',
            description:
                'Improving cloud efficiency by optimizing resources, reducing cost, and ensuring scalability and performance.',
        },
        {
            title: 'Cloud Security & Compliance',
            description:
                'Ensuring robust cloud security and compliance with industry standards like GDPR and HIPAA.',
        },
        {
            title: 'Cloud-Native Application Development',
            description:
                'Building scalable, modern applications using microservices, containers, and serverless frameworks.',
        },
        {
            title: 'Cloud Integration & Automation',
            description:
                'Integrating cloud services with your existing systems and automating processes to enhance business productivity.',
        },
        {
            title: 'Ongoing Cloud Management & Monitoring',
            description:
                'Providing continuous monitoring, support, and optimization to ensure a high-performing cloud environment.',
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
                scrollbarWidth: 'none',
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
                    Cloud Services
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We provide expert cloud consulting services to help organizations embrace the cloud with confidence. Our solutions are designed to enhance flexibility, scalability, and operational efficiency—supporting every stage of your cloud journey.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Cloud Services Include:</h2>

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
                        By partnering with us, you gain a strategic advantage in today’s digital landscape—ensuring business agility, reduced operational overhead, and long-term cloud success.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default CloudServices;
