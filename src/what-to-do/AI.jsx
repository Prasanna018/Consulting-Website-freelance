import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function AI() {
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
                    onClick={() => navigate('/what-we-do/technical-solutions')}
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
                        Artificial Intelligence
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl leading-relaxed text-gray-300 space-y-6"
                    >
                        <p>
                            We offer cutting-edge AI consulting services to help organizations unlock the full potential of artificial intelligence. Our expertise enables businesses to optimize operations, enhance decision-making, and innovate across industries.
                        </p>

                        <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our AI Services</h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: 'AI Strategy Development',
                                        desc: 'Crafting tailored AI strategies that align with your business objectives, driving long-term growth and efficiency.',
                                    },
                                    {
                                        title: 'Machine Learning Models',
                                        desc: 'Designing and implementing custom machine learning models for predictive analytics, personalization, and forecasting.',
                                    },
                                    {
                                        title: 'Natural Language Processing',
                                        desc: 'Applying NLP techniques to automate customer support, enhance content discovery, and streamline processes.',
                                    },
                                    {
                                        title: 'Computer Vision',
                                        desc: 'Integrating computer vision technology for applications like image recognition, quality control, and surveillance.',
                                    },
                                    {
                                        title: 'AI Integration & Deployment',
                                        desc: 'Ensuring seamless integration of AI solutions into your existing infrastructure and optimizing workflows.',
                                    },
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
                            We work alongside your teams to ensure AI technologies are seamlessly integrated into your operations, driving both short-term success and long-term innovation. Our goal is to help you stay ahead of the competition by transforming data into actionable insights.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default AI;
