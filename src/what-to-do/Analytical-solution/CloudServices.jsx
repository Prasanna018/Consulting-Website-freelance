import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function CloudServices() {
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

                <h1 className="text-4xl font-bold mb-8">Cloud Services</h1>

                <div className="p-4 font-semibold">
                    <p className="text-xl">
                        At CloudServices, we provide expert cloud consulting to empower organizations in unlocking the full potential of cloud computing, driving flexibility, scalability, and operational efficiency. Our team is dedicated to guiding businesses through every stage of their cloud journey—from strategy development and migration to continuous management—ensuring seamless integration with your existing infrastructure and business processes.
                        <br /><br />
                        Our cloud consulting services include:
                    </p>
                </div>

                <div>
                    <p className="p-2 text-lg">
                        <b className="text-xl">Cloud Strategy & Roadmap Development:</b> We create tailored cloud strategies that align with your business goals, ensuring a smooth adoption or migration process while optimizing costs and resources.
                        <br /><br />
                        <b className="text-xl">Cloud Migration & Implementation:</b> We assist with the seamless transition from on-premises infrastructure to the cloud, minimizing disruption and maximizing performance during migration.
                        <br /><br />
                        <b className="text-xl">Multi-Cloud & Hybrid Cloud Solutions:</b> We design and implement multi-cloud or hybrid cloud environments to deliver flexibility, resilience, and optimized resource allocation that meets both business and regulatory needs.
                        <br /><br />
                        <b className="text-xl">Cloud Infrastructure Optimization:</b> We help you optimize cloud resources and costs, ensuring that your cloud environment is efficient, secure, scalable, and meets your performance and availability requirements.
                        <br /><br />
                        <b className="text-xl">Cloud Security & Compliance:</b> We implement robust security measures and ensure compliance with industry regulations (such as GDPR, HIPAA) to protect your data and applications in the cloud.
                        <br /><br />
                        <b className="text-xl">Cloud-Native Application Development:</b> We develop and deploy cloud-native applications using microservices, containers, and serverless architectures to maximize scalability, flexibility, and speed.
                        <br /><br />
                        <b className="text-xl">Cloud Integration & Automation:</b> We integrate cloud services with existing systems and automate critical business processes, improving efficiency, reducing manual workloads, and enhancing productivity.
                        <br /><br />
                        <b className="text-xl">Ongoing Cloud Management & Monitoring:</b> We provide continuous cloud management, monitoring, and optimization to ensure high availability, security, and performance across your cloud infrastructure.
                        <p className="text-lg pt-4">
                            At CloudServices, we work closely with your team to ensure that your cloud strategy delivers both short-term value and long-term growth. By leveraging our expertise, you can drive digital transformation, reduce operational overhead, and maintain agility in today’s competitive market.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default CloudServices;
