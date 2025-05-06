import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function CyberSecurity() {
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

                {/* Main content */}
                <div className="space-y-8">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                    >
                        Cybersecurity
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl leading-relaxed text-gray-300 space-y-6"
                    >
                        <p>
                            We provide expert cybersecurity consulting services designed to protect your organization from evolving digital threats. In today's fast-paced digital landscape, securing sensitive data, systems, and networks is more critical than ever.
                        </p>

                        <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Cybersecurity Services</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                                        <span className="text-white font-bold">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-blue-200">Risk Assessment & Vulnerability Management</h3>
                                        <p className="text-gray-300 mt-1">Comprehensive security audits to identify vulnerabilities and recommend tailored solutions.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                                        <span className="text-white font-bold">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-blue-200">Security Strategy Development</h3>
                                        <p className="text-gray-300 mt-1">Customized cybersecurity strategies aligned with your business goals.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                                        <span className="text-white font-bold">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-blue-200">Threat Detection & Incident Response</h3>
                                        <p className="text-gray-300 mt-1">Advanced threat detection tools and effective incident response plans.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                                        <span className="text-white font-bold">4</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-blue-200">Data Protection & Encryption</h3>
                                        <p className="text-gray-300 mt-1">Encryption strategies to safeguard sensitive data and communications.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                                        <span className="text-white font-bold">5</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-blue-200">Compliance & Regulatory Support</h3>
                                        <p className="text-gray-300 mt-1">Assistance with GDPR, HIPAA, PCI-DSS and other regulations.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 mt-1">
                                        <span className="text-white font-bold">6</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-blue-200">Security Awareness Training</h3>
                                        <p className="text-gray-300 mt-1">Cybersecurity education to reduce risks from human error.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="italic text-gray-300">
                            Our approach ensures that your organization not only defends against immediate threats but also builds a resilient cybersecurity posture that evolves with new and emerging risks. By partnering with us, you can trust that your business is protected by cutting-edge solutions.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default CyberSecurity;