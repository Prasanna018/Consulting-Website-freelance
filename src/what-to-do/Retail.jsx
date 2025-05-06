import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Retail() {
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

                <h1 className="text-4xl font-bold mb-8"> Retail</h1>





                <div className='
                '>
                    <p className='text-lg'>We help retailers unlock the power of their data to drive smarter merchandising, personalized experiences, and revenue growth. Our team transforms customer behavior, sales trends, and inventory data into actionable strategies that optimize pricing, product placement, and promotional effectiveness—keeping you ahead in competitive markets.
                        We create unified data ecosystems that connect POS systems, e-commerce platforms, and inventory management to give you a 360-degree view of your business. Our custom analytics tools empower teams to forecast demand with precision, optimize stock levels, and adjust pricing dynamically—reducing waste while maximizing margins. Interactive dashboards track KPIs like conversion rates, basket sizes, and inventory turnover in real time, putting critical insights at decision-makers’ fingertips.
                        Through AI and machine learning, we take retail intelligence further: predictive models anticipate buying trends, recommendation engines personalize shopping journeys, and dynamic pricing algorithms respond to market shifts instantly. From supply chain efficiencies to hyper-targeted loyalty programs, we turn retail data into measurable competitive advantage.


                    </p>
                </div>
            </div>
        </div>
    );
}

export default Retail;