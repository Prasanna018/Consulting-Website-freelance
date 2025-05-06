import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function GenerativeAI() {
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
                    onClick={() => navigate('/what-we-do/analytics-solutions', { replace: false })}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Analytical Solution
                </button>

                <h1 className="text-4xl font-bold mb-8">Generative AI</h1>

                <div className="p-4 font-semibold">
                    <p className="text-xl">
                        We offer specialized generative AI consulting services to help organizations harness the power of AI to create innovative solutions, enhance creativity, and drive business transformation. Generative AI can automate content creation, optimize design processes, and improve decision-making by generating new ideas, models, and simulations based on existing data.
                        <br /><br />
                        Our generative AI consulting services include:
                    </p>
                </div>

                <div>
                    <p className="p-2 text-lg">
                        <b className="text-xl">Generative AI Strategy Development:</b> Crafting a tailored strategy to integrate generative AI into your business, aligning AI capabilities with your goals for innovation, efficiency, and growth.
                        <br /><br />
                        <b className="text-xl">AI Model Development & Training:</b> Designing and building custom generative AI models that can create new content, simulate outcomes, or provide personalized recommendations, using deep learning, natural language processing, and other advanced AI techniques.
                        <br /><br />
                        <b className="text-xl">Content Creation & Automation:</b> Utilizing generative AI for content generation, such as text, images, music, and video, to automate creative processes, enhance marketing efforts, and improve user engagement.
                        <br /><br />
                        <b className="text-xl">Product & Design Innovation:</b> Leveraging generative AI to generate design prototypes, 3D models, or new product concepts, enabling faster innovation cycles and cost-effective design solutions.
                        <br /><br />
                        <b className="text-xl">Natural Language Generation (NLG):</b> Implementing NLG techniques to automatically generate written content for reports, articles, customer communications, and more, reducing manual effort while maintaining quality and relevance.
                        <br /><br />
                        <b className="text-xl">Data Augmentation & Simulation:</b> Using generative models to generate synthetic data for training machine learning models, improving accuracy, and addressing data scarcity challenges.
                        <br /><br />
                        <b className="text-xl">Ethical AI & Responsible Use:</b> Advising on the ethical implementation of generative AI, ensuring compliance with regulations and best practices while addressing potential biases and societal impacts.
                        <br /><br />
                        <b className="text-xl">AI Integration & Scalability:</b> Ensuring seamless integration of generative AI into your existing workflows, systems, and platforms to enhance scalability, performance, and operational efficiency.
                        <p className="text-lg pt-4">
                            We work closely with your team to ensure that generative AI is not only implemented effectively but also creates tangible value, driving innovation and improving business outcomes. Whether you're looking to automate creative processes, generate predictive models, or explore new possibilities, our generative AI consulting services empower you to unlock the full potential of AI.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default GenerativeAI;
