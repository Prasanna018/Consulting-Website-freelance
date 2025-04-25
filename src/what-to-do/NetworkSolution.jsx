import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function NetworkSolution() {
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
                    onClick={() => navigate('/what-we-do')}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Technical Solution
                </button>

                <h1 className="text-4xl font-bold mb-8">Network Solution</h1>

                <div className="p-4 font-semibold">
                    <p className="text-xl">
                        We offer comprehensive network solutions consulting services designed to optimize, secure, and scale your organization's network infrastructure. In an increasingly connected world, a reliable, high-performance network is essential for business success. Our network experts help you design, implement, and manage networks that support business operations, enhance security, and ensure seamless connectivity.
                        <br /><br />
                        Our network solutions consulting services include:
                    </p>
                </div>

                <div>
                    <p className="p-2 text-lg">
                        <b className="text-xl">Network Design & Architecture:</b> Designing and implementing custom network architectures that align with your business needs, ensuring scalability, reliability, and performance.

                        <br /><br />
                        <b className="text-xl">Network Security:</b> Protecting your network from cyber threats by implementing advanced security measures such as firewalls, intrusion detection systems, and encryption technologies.

                        <br /><br />
                        <b className="text-xl">Cloud Networking:</b> Assisting in the seamless integration of cloud services into your network infrastructure, optimizing performance and enhancing flexibility.

                        <br /><br />
                        <b className="text-xl">Network Optimization & Performance Management:</b> Analyzing network traffic and performance to identify bottlenecks and optimize bandwidth usage, ensuring fast and reliable connectivity.

                        <br /><br />
                        <b className="text-xl">Wireless & Remote Networking:</b> Designing and implementing secure, high-performance wireless networks for remote workforces, branch offices, or mobile environments.

                        <br /><br />
                        <b className="text-xl">Network Monitoring & Management:</b> Providing continuous network monitoring to detect issues before they affect your operations, coupled with management services to ensure uptime and reliability.

                        <br /><br />
                        <b className="text-xl">Disaster Recovery & Business Continuity:</b> Developing and implementing robust disaster recovery strategies to ensure minimal downtime in the event of network failure or disaster.

                        <p className="text-lg pt-4">
                            We work closely with your team to ensure your network infrastructure is efficient, secure, and adaptable to changing business requirements. Our goal is to help you maximize the potential of your network, reduce risks, and maintain high availability for all business operations.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default NetworkSolution;
