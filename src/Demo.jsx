import React from 'react';
import { motion } from 'framer-motion';

function Demo() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-white p-4 md:p-8 border-2 rounded-lg shadow-md"
        >
            <div className="mb-6">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Overview
                </h1>
            </div>

            <div className="text-gray-300 leading-relaxed space-y-4 text-[1.05rem]">
                <p>
                    At <span className="text-blue-400 font-semibold">Data Insights Consulting</span>, our mission is to empower businesses with the clarity and confidence that comes from data-driven decision-making. We believe that every organization, regardless of size or industry, can unlock transformative growth by harnessing the power of data.
                </p>
                <p>
                    Through cutting-edge analytics, AI-driven insights, and strategic consulting, we turn complex data into actionable intelligence that drives real business results.
                </p>
                <p>
                    Our vision is to be the trusted partner for companies navigating the evolving landscape of data and technology. We strive to bridge the gap between raw data and strategic execution, helping businesses not only interpret their data but also use it to stay ahead of the competition.
                </p>
                <p>
                    By fostering a culture of innovation and continuous improvement, we enable our clients to make smarter, faster, and more impactful decisions.
                </p>
                <p className="italic text-blue-200">
                    At Data Insights Consulting, we don’t just analyze data—we transform it into a competitive advantage.
                </p>
            </div>
        </motion.div>
    );
}

export default Demo;
