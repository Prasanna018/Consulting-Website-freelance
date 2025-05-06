import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function TravelAndLogistics() {
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

                <h1 className="text-4xl font-bold mb-8"> Travel and Logistics</h1>





                <div className='border-2 rounded-2xl border-gray-300 p-5'>
                    <p className='text-lg'>
                        We help transportation and logistics companies harness the power of data to optimize operations, reduce costs, and elevate customer experiences. Our team transforms route data, fleet telematics, and customer insights into actionable strategies that maximize efficiency while improving service quality—helping you stay competitive in dynamic markets.
                        We build integrated data ecosystems that connect your transportation management systems, customer feedback, and booking platforms—providing end-to-end visibility across operations. Our AI-powered tools empower logistics teams to optimize routes in real time, allocate resources efficiently, and predict maintenance needs before breakdowns occur. Interactive dashboards track critical KPIs like on-time performance, fuel efficiency, and customer satisfaction, giving decision-makers the insights they need to act fast.
                        Through advanced analytics and machine learning, we take transportation intelligence further: predictive models anticipate demand surges, dynamic pricing algorithms adjust to market conditions, and personalized recommendations enhance customer loyalty. From reducing empty miles to automating dispatch decisions, we turn logistics data into smoother operations and stronger margins.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TravelAndLogistics;