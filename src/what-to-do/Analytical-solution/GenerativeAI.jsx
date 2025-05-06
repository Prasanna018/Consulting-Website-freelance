import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function GenerativeAI() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Generative AI Strategy Development',
            description: 'Crafting a tailored strategy to integrate generative AI into your business, aligning AI capabilities with your goals for innovation, efficiency, and growth.',
        },
        {
            title: 'AI Model Development & Training',
            description: 'Designing and building custom generative AI models that can create new content, simulate outcomes, or provide personalized recommendations, using deep learning, NLP, and other advanced techniques.',
        },
        {
            title: 'Content Creation & Automation',
            description: 'Utilizing generative AI for content generation (text, images, music, video) to automate creative processes, enhance marketing, and improve user engagement.',
        },
        {
            title: 'Product & Design Innovation',
            description: 'Leveraging generative AI to generate design prototypes, 3D models, or new product concepts for faster innovation and cost-effective design solutions.',
        },
        {
            title: 'Natural Language Generation (NLG)',
            description: 'Implementing NLG techniques to generate written content (e.g., reports, articles, customer communications), reducing manual effort while maintaining quality.',
        },
        {
            title: 'Data Augmentation & Simulation',
            description: 'Using generative models to create synthetic data for training ML models, addressing data scarcity and improving model accuracy.',
        },
        {
            title: 'Ethical AI & Responsible Use',
            description: 'Advising on ethical AI implementation, ensuring compliance with regulations and addressing bias, transparency, and societal impact.',
        },
        {
            title: 'AI Integration & Scalability',
            description: 'Ensuring seamless integration of generative AI into existing workflows and systems for enhanced scalability, performance, and efficiency.',
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
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
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
                    Generative AI
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl leading-relaxed text-gray-300 space-y-6 mt-8"
                >
                    <p>
                        We offer specialized generative AI consulting services to help organizations harness the power of AI to create innovative solutions, enhance creativity, and drive business transformation.
                        Generative AI can automate content creation, optimize design processes, and improve decision-making by generating new ideas, models, and simulations based on existing data.
                    </p>

                    <div className="bg-[#252a2b] rounded-xl p-6 border border-[#3a4042]">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Generative AI Services Include:</h2>

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

                    <p className="italic text-gray-300 mt-6">
                        We work closely with your team to ensure generative AI creates tangible value, drives innovation, and improves business outcomes—whether automating creativity, generating insights, or exploring new frontiers.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default GenerativeAI;
