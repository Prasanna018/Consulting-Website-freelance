import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function DataAnalytics() {
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

                <h1 className="text-4xl font-bold mb-8">Data Analytics</h1>

                <div className="p-4 font-semibold">
                    <p className="text-xl">
                        We offer data analytics consulting services to help organizations unlock valuable insights from their data, enabling smarter decision-making and driving business growth. With the power of advanced analytics, we assist in transforming raw data into actionable insights, enhancing operational efficiency, improving customer experiences, and fostering innovation.
                        <br /><br />
                        Our data analytics consulting services include:
                    </p>
                </div>

                <div>
                    <p className="p-2 text-lg">
                        <b className="text-xl">Data Strategy & Roadmap Development:</b> Creating a tailored data strategy that aligns with your business goals, helping you identify key data sources and establishing a roadmap for maximizing data value.

                        <br /><br />
                        <b className="text-xl">Data Visualization & Reporting:</b> Designing intuitive dashboards and reports that present complex data in an easily digestible format, enabling real-time decision-making across your organization.

                        <br /><br />
                        <b className="text-xl">Predictive Analytics & Modeling:</b> Leveraging statistical models and machine learning algorithms to predict future trends, behaviors, and outcomes, helping you make proactive business decisions.

                        <br /><br />
                        <b className="text-xl">Descriptive & Diagnostic Analytics:</b> Analyzing historical data to understand past performance, uncover root causes, and identify trends that influence decision-making.

                        <br /><br />
                        <b className="text-xl">Big Data Analytics:</b> Assisting organizations in managing and analyzing large, complex data sets (e.g., structured, unstructured) to uncover hidden patterns and insights that drive business transformation.

                        <br /><br />
                        <b className="text-xl">Customer Analytics & Segmentation:</b> Helping businesses better understand customer behavior through segmentation, personalization, and targeted marketing, ultimately enhancing customer retention and satisfaction.

                        <br /><br />
                        <b className="text-xl">Data Governance & Quality Management:</b> Establishing strong data governance frameworks to ensure data accuracy, integrity, and compliance with industry regulations, such as GDPR or HIPAA.

                        <br /><br />
                        <b className="text-xl">Advanced Analytics Solutions:</b> Implementing cutting-edge analytics technologies such as AI, machine learning, and natural language processing (NLP) to automate processes and drive deeper insights.

                        <p className="text-lg pt-4">
                            We partner with your team to create a data-driven culture, ensuring that analytics is embedded in your decision-making processes to improve business outcomes. Our goal is to help you harness the power of your data to stay competitive, increase efficiency, and unlock new growth opportunities.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default DataAnalytics;
