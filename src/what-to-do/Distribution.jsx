import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Distribution() {
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

                <h1 className="text-4xl font-bold mb-8"> Distribution</h1>





                <div className='border-2 rounded-2xl border-gray-300 p-5
                '>
                    <p className='text-lg'>
                        We empower logistics and supply chain organizations to transform data into operational excellence. Our team helps optimize every link in the supply chain - from inventory management to last-mile delivery - by turning logistics data into actionable intelligence. We analyze demand patterns, delivery performance, and inventory metrics to identify efficiency gains and cost-saving opportunities across your operations.
                        Our comprehensive data strategies unify siloed systems - integrating inventory, fleet tracking, and order processing into a single source of truth. We build intelligent dashboards and decision-support tools that give logistics teams real-time visibility into KPIs like on-time delivery rates, inventory turnover, and route efficiency. Whether you need to optimize warehouse operations, improve demand forecasting, or evaluate supplier performance, we deliver tailored solutions that drive measurable results.
                        Leveraging AI and machine learning, we take logistics optimization further - predicting demand fluctuations, optimizing delivery routes in real-time, and building more resilient supply chains. From reducing transportation costs to improving customer satisfaction, we help you turn supply chain data into a competitive advantage.


                    </p>
                </div>
            </div>
        </div>
    );
}

export default Distribution;