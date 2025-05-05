import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function Banking() {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedHover = location.state?.selectedHover
    console.log(selectedHover)
    return (
        <div className="bg-[#1e2223] text-white min-h-fit pb-20 mt-20">
            <div className="container mx-auto px-4 py-6">
                <button
                    onClick={() => navigate('/what-we-do', {
                        state: { selectedHover }
                    })}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Industries
                </button>

                <h1 className="text-4xl font-bold mb-8">Banking</h1>
                <div className='p-4'>
                    <p className='text-lg'>
                        We help financial institutions harness advanced analytics to drive smarter decisions across risk,
                        compliance, customer experience, and operations. Our expertise includes extracting actionable
                        insights from customer behavior, transactions, and loan performance, as well as deploying
                        real-time analytics for fraud detection and credit scoring. We build decision-support tools—such
                        as loan approval models and branch simulators—and implement dynamic dashboards to track KPIs like
                        NIM, NPLs, and churn. By combining predictive modeling, automation, and custom data pipelines,
                        we solve critical business challenges, from risk scoring to targeted customer engagement.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banking;