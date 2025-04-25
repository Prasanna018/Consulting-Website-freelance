import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function CyberSecurity() {
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

                <h1 className="text-4xl font-bold mb-8">Cybersecurity</h1>

                <div className='p-4 font-semibold'>
                    <p className='text-xl'>
                        We provide expert cybersecurity consulting services designed to protect your organization from evolving digital threats. In today’s fast-paced digital landscape, securing sensitive data, systems, and networks is more critical than ever. Our cybersecurity experts help organizations assess vulnerabilities, implement robust security measures, and develop proactive defense strategies to safeguard against cyber risks.
                        <br /><br />
                        Our cybersecurity consulting services include:
                    </p>
                </div>

                <div>
                    <p className='p-2 text-lg'>
                        <b className='text-xl'>Risk Assessment & Vulnerability Management:</b> Conducting comprehensive security audits to identify vulnerabilities, assess risks, and recommend tailored solutions to mitigate threats.

                        <br /><br />
                        <b className='text-xl'>Security Strategy Development:</b> Crafting customized cybersecurity strategies that align with your business goals, ensuring long-term protection and compliance with industry regulations.

                        <br /><br />
                        <b className='text-xl'>Threat Detection & Incident Response:</b> Implementing advanced threat detection tools and developing effective incident response plans to quickly identify and mitigate breaches or attacks.

                        <br /><br />
                        <b className='text-xl'>Data Protection & Encryption:</b> Designing and implementing encryption strategies to safeguard sensitive data and ensure secure communication within your organization.

                        <br /><br />
                        <b className='text-xl'>Compliance & Regulatory Support:</b> Assisting with compliance to industry regulations such as GDPR, HIPAA, and PCI-DSS, ensuring your organization meets required security standards.

                        <br /><br />
                        <b className='text-xl'>Security Awareness Training:</b> Providing ongoing cybersecurity education to employees to raise awareness about phishing, social engineering, and other common threats, reducing the risk of human error.

                        <p className='text-lg pt-4'>
                            Our approach ensures that your organization not only defends against immediate threats but also builds a resilient cybersecurity posture that evolves with new and emerging risks. By partnering with us, you can trust that your business is protected by cutting-edge cybersecurity solutions, allowing you to focus on growth while staying secure in a dynamic digital environment.
                        </p>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default CyberSecurity;
