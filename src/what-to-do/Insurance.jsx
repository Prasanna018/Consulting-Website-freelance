import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Insurance() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/what-we-do', {
            state: {
                activeContent: 2, // Forces Industries section to be active
                fromBanking: true // Additional context if needed
            },
            replace: false // Keep history entry for proper back navigation
        });
    };
    return (
        <div className="bg-[#1e2223] h-screen text-white min-h-fit pb-20 mt-20">
            <div className="container mx-auto px-4 py-6">
                {/* Back button */}
                <button
                    onClick={() => navigate('/what-we-do/industries', { replace: false })}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Industries
                </button>

                <h1 className="text-4xl font-bold mb-8"> Insurance</h1>





                <div className='border-2 rounded-2xl border-gray-300 p-5
                '>
                    <p className='text-lg'>We empower insurers to transform data into smarter risk decisions, profitable growth, and exceptional customer experiences. Our team turns claims patterns, customer behavior, and actuarial data into actionable strategies that refine underwriting accuracy, optimize pricing, and streamline claims—helping you balance risk and reward in volatile markets.
                        We build integrated data ecosystems that connect underwriting, claims, and customer systems—eliminating silos to give you a 360-degree view of risk and profitability. Our AI-powered tools help underwriters assess risks with precision, claims teams detect fraud faster, and executives track KPIs like loss ratios and retention in real time. Whether you need to automate claims processing, segment high-value customers, or comply with evolving regulations, we deliver tailored solutions that reduce costs and boost competitiveness.
                        Through machine learning and predictive analytics, we take insurance intelligence further: AI models flag suspicious claims, risk-scoring algorithms adapt to emerging threats, and customer analytics personalize policy recommendations. From dynamic pricing to touchless claims, we turn insurance data into sharper decisions—and risks into opportunities.


                    </p>
                </div>
            </div>
        </div>
    );
}

export default Insurance;