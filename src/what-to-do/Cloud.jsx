import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Cloud() {
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

                <h1 className="text-4xl font-bold mb-8">Cloud</h1>

                <div className='p-4 font-semibold'>
                    <p className='text-xl'>

                        We provide expert cloud solutions consulting services designed to help organizations migrate, optimize, and manage their cloud infrastructure. As businesses increasingly move to the cloud for scalability, flexibility, and cost-efficiency, our team helps you leverage cloud technologies to streamline operations, enhance collaboration, and drive innovation.
                        Our cloud solutions consulting services include:

                    </p>
                </div>
                <br className='py-2'></br>

                <div>
                    <p className='p-2 text-lg
                    '>
                        <b className='text-xl'> Cloud Strategy & Roadmap Development:</b>  Crafting a tailored cloud strategy that aligns with your business objectives, ensuring a smooth and efficient cloud adoption or migration process.

                        <br className='py-2'></br>
                        <b className='text-xl'> Cloud Migration:</b> Guiding your organization through the seamless transition from on-premise systems to the cloud, minimizing downtime and ensuring data integrity throughout the process.

                        <br></br>
                        <b className='text-xl'> Multi-Cloud & Hybrid Cloud Solutions:</b>  Designing and implementing multi-cloud and hybrid cloud architectures to optimize resource allocation, enhance flexibility, and meet regulatory or business needs.

                        <br></br>
                        <b className='text-xl'> Cloud Security: </b> Protecting your cloud infrastructure by implementing robust security protocols, including data encryption, identity management, and compliance with industry regulations.

                        <br></br>
                        <b className='text-xl'>Cost Optimization & Management: </b>Helping you optimize cloud spending by selecting the most appropriate cloud services, managing resources effectively, and implementing cost-saving strategies.

                        <br></br>
                        <b className='text-xl'>    Cloud-Native Application Development: </b> Assisting in the development and deployment of cloud-native applications, utilizing microservices, containers, and serverless architectures to maximize scalability and efficiency.

                        <br></br>
                        <b className='text-xl'>Cloud Infrastructure Monitoring & Management:</b>  Providing ongoing monitoring and management of your cloud infrastructure to ensure performance, availability, and security, while minimizing downtime.

                        <br></br>

                        <p className='text-lg pt-4'>

                            We collaborate with your teams to ensure that your cloud environment is secure, efficient, and scalable, allowing you to focus on innovation and growth. Our goal is to help you harness the full potential of cloud technologies to drive operational excellence and business transformation.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default Cloud;