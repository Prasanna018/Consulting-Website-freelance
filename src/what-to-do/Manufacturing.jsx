import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Manufacturing() {
    const navigate = useNavigate();


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

                <h1 className="text-4xl font-bold mb-8"> Manufacturing</h1>





                <div className='border-2 rounded-2xl border-gray-300 p-5
                '>
                    <p className='text-lg'>We help manufacturers harness the power of data to drive efficiency, reduce waste, and optimize supply chain performance. Our team transforms production data, quality metrics, and operational logs into actionable insights that improve yield, minimize defects, and enhance on-time delivery. We develop comprehensive data strategies to integrate IoT sensors, robotics, and automation - creating smarter, more connected factories.
                        From the shop floor to the executive suite, we build custom tools and dashboards that empower teams to make data-driven decisions. Whether it's optimizing production schedules, managing inventory, or implementing predictive maintenance, we deliver tailored solutions that address your most pressing challenges. Our AI and machine learning expertise helps manufacturers anticipate supply chain disruptions, reduce scrap rates, and continuously improve processes - turning operational data into a competitive advantage.


                    </p>
                </div>
            </div>
        </div>
    );
}

export default Manufacturing;