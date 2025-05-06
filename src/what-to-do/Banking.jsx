import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { replace, useNavigate } from 'react-router-dom';

function Banking() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#1e2223] h-screen text-white min-h-fit pb-20 mt-20">
            <div className="container mx-auto px-4 py-6">
                <button
                    onClick={() => navigate('/what-we-do/industries', { replace: false })}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Industries
                </button>

                <h1 className="text-4xl font-bold mb-8">Banking</h1>
                <div className='border-2 rounded-2xl border-gray-300 p-5'>
                    <p className='text-lg'>
                        We help financial institutions harness advanced analytics to drive smarter decisions across risk,
                        compliance, customer experience, and operations. Our expertise includes extracting actionable
                        insights from customer behavior, transactions, and loan performance, as well as deploying
                        real-time analytics for fraud detection and credit scoring.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banking;