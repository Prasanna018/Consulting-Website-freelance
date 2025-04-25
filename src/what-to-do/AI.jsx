import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function AI() {
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

                <h1 className="text-4xl font-bold mb-8">Artificial Intelligence</h1>

                <div className="p-4 font-semibold">
                    <p className="text-xl">
                        We offer cutting-edge AI consulting services to help organizations unlock the full potential of artificial intelligence. Our expertise in AI enables businesses to optimize operations, enhance decision-making, and innovate across industries. By leveraging advanced machine learning, natural language processing, computer vision, and automation technologies, we empower companies to solve complex challenges and achieve tangible results.
                        <br /><br />
                        Our AI consulting services include:
                    </p>
                </div>

                <div>
                    <p className="p-2 text-lg">
                        <b className="text-xl">AI Strategy Development:</b> Crafting tailored AI strategies that align with your business objectives, driving long-term growth and efficiency.

                        <br /><br />
                        <b className="text-xl">Machine Learning Models:</b> Designing and implementing custom machine learning models to solve specific business problems, such as predictive analytics, personalization, and forecasting.

                        <br /><br />
                        <b className="text-xl">Natural Language Processing (NLP):</b> Applying NLP techniques to automate customer support, enhance content discovery, and streamline business processes.

                        <br /><br />
                        <b className="text-xl">Computer Vision:</b> Integrating computer vision technology for applications like image recognition, quality control, and surveillance.

                        <br /><br />
                        <b className="text-xl">AI Integration & Deployment:</b> Ensuring seamless integration of AI solutions into your existing infrastructure, optimizing workflows, and improving user experience.

                        <p className="text-lg pt-4">
                            We work alongside your teams to ensure that AI technologies are seamlessly integrated into your operations, driving both short-term success and long-term innovation. Our goal is to help you stay ahead of the competition by transforming data into actionable insights and empowering your business with AI-driven solutions.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default AI;
