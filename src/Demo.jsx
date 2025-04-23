import React from 'react';
import { motion } from 'framer-motion';

function Demo() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
        >
            At Data Insights Consulting, our mission is to empower businesses with the clarity and confidence that comes from data-driven decision-making. We believe that every organization, regardless of size or industry, can unlock transformative growth by harnessing the power of data. Through cutting-edge analytics, AI-driven insights, and strategic consulting, we turn complex data into actionable intelligence that drives real business results.
            <br /><br />
            Our vision is to be the trusted partner for companies navigating the evolving landscape of data and technology. We strive to bridge the gap between raw data and strategic execution, helping businesses not only interpret their data but also use it to stay ahead of the competition. By fostering a culture of innovation and continuous improvement, we enable our clients to make smarter, faster, and more impactful decisions.
            <br /><br />
            Ultimately, we measure our success by the success of our clients. Whether it’s optimizing operations, predicting market trends, or enhancing customer experiences, we are committed to delivering insights that create lasting value. At Data Insights Consulting, we don’t just analyze data—we transform it into a competitive advantage.
        </motion.div>
    );
}

export default Demo;
