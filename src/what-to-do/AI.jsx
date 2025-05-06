import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function AI() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen  w-full bg-[#1e2223] text-white overflow-y-auto" style={{
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="container mx-auto px-4 pt-20 pb-20"
            >
                {/* Back button */}
                <motion.button
                    whileHover={{ x: -3 }}
                    onClick={() => navigate('/what-we-do/technical-solutions', { replace: false })}
                    className="flex cursor-pointer items-center gap-2 text-blue-400 mb-8 hover:text-blue-300 transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span className="text-lg">Back to Technical Solutions</span>
                </motion.button>

                {/* Main content */}
                <div className="space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-2 border-b border-[#3a4042]"
                    >
                        Artificial Intelligence
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl leading-relaxed text-gray-300"
                    >
                        We offer cutting-edge AI consulting services to help organizations unlock the full potential of artificial intelligence. Our expertise enables businesses to optimize operations, enhance decision-making, and innovate across industries.
                    </motion.p>

                    {/* Services section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-300">Our AI Services</h2>

                        <div className="grid gap-5">
                            {/* Service Item 1 */}
                            <div className="p-5 bg-[#252a2b] rounded-lg border-l-4 border-blue-500 hover:bg-[#2a3032] transition-colors">
                                <h3 className="text-xl font-medium text-blue-200 mb-2">AI Strategy Development</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Crafting tailored AI strategies that align with your business objectives, driving long-term growth and efficiency.
                                </p>
                            </div>

                            {/* Service Item 2 */}
                            <div className="p-5 bg-[#252a2b] rounded-lg border-l-4 border-cyan-500 hover:bg-[#2a3032] transition-colors">
                                <h3 className="text-xl font-medium text-cyan-200 mb-2">Machine Learning Models</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Designing and implementing custom machine learning models for predictive analytics, personalization, and forecasting.
                                </p>
                            </div>

                            {/* Service Item 3 */}
                            <div className="p-5 bg-[#252a2b] rounded-lg border-l-4 border-purple-500 hover:bg-[#2a3032] transition-colors">
                                <h3 className="text-xl font-medium text-purple-200 mb-2">Natural Language Processing</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Applying NLP techniques to automate customer support, enhance content discovery, and streamline processes.
                                </p>
                            </div>

                            {/* Service Item 4 */}
                            <div className="p-5 bg-[#252a2b] rounded-lg border-l-4 border-green-500 hover:bg-[#2a3032] transition-colors">
                                <h3 className="text-xl font-medium text-green-200 mb-2">Computer Vision</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Integrating computer vision technology for applications like image recognition, quality control, and surveillance.
                                </p>
                            </div>

                            {/* Service Item 5 */}
                            <div className="p-5 bg-[#252a2b] rounded-lg border-l-4 border-indigo-500 hover:bg-[#2a3032] transition-colors">
                                <h3 className="text-xl font-medium text-indigo-200 mb-2">AI Integration & Deployment</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Ensuring seamless integration of AI solutions into your existing infrastructure and optimizing workflows.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Closing paragraph */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="pt-4"
                    >
                        <p className="text-lg leading-relaxed text-gray-300 italic bg-[#252a2b] p-5 rounded-lg">
                            We work alongside your teams to ensure AI technologies are seamlessly integrated into your operations, driving both short-term success and long-term innovation. Our goal is to help you stay ahead of the competition by transforming data into actionable insights.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default AI;