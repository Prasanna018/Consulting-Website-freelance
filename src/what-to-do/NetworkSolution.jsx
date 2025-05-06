import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function NetworkSolution() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-[#1e2223] text-white overflow-y-auto" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
        }}>
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

                {/* Main content */}
                <div className="space-y-8">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                    >
                        Network Solution
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl leading-relaxed text-gray-300 space-y-6"
                    >
                        <p>
                            We offer comprehensive network solutions designed to optimize, secure, and scale your organization’s infrastructure. In today’s connected world, seamless and secure networking is the foundation of business continuity.
                        </p>

                        <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Network Solutions Services</h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: 'Network Design & Architecture',
                                        desc: 'Designing custom network architectures aligned with business goals for performance and scalability.'
                                    },
                                    {
                                        title: 'Network Security',
                                        desc: 'Implementing firewalls, intrusion detection systems, and encryption to guard against cyber threats.'
                                    },
                                    {
                                        title: 'Cloud Networking',
                                        desc: 'Seamlessly integrating cloud services into your infrastructure to enhance flexibility and speed.'
                                    },
                                    {
                                        title: 'Performance Management',
                                        desc: 'Monitoring and optimizing bandwidth and traffic flow for reliable connectivity.'
                                    },
                                    {
                                        title: 'Wireless & Remote Access',
                                        desc: 'Designing secure wireless networks for mobile teams, branch offices, and remote users.'
                                    },
                                    {
                                        title: 'Monitoring & Management',
                                        desc: 'Continuous network monitoring to detect and resolve issues before downtime occurs.'
                                    },
                                    {
                                        title: 'Disaster Recovery & Continuity',
                                        desc: 'Building resilient network strategies to recover quickly from outages or disasters.'
                                    }
                                ].map((item, index) => (
                                    <div className="flex items-start" key={index}>
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                                            <span className="text-white font-bold">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-blue-200">{item.title}</h3>
                                            <p className="text-gray-300 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="italic text-gray-300">
                            Our expert team ensures your network is built for reliability, scalability, and future-proof performance—enabling your business to operate securely and efficiently across all environments.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default NetworkSolution;
