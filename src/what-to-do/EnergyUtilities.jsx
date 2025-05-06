import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function EngergyUtilities() {
    const navigate = useNavigate();


    return (
        <div className="bg-[#1e2223] h-screen text-white min-h-fit pb-20">
            <div className="container mx-auto px-4 py-6 mt-20">
                {/* Back button */}
                <button
                    onClick={() => navigate('/what-we-do/industries', { replace: false })}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Industries
                </button>

                <h1 className="text-4xl font-bold mb-8">Engergy and Utilities</h1>





                <div className='border-2 rounded-2xl border-gray-300 p-5
                '>
                    <p className='text-lg'>We empower utilities and energy companies to harness data for grid modernization, sustainability, and regulatory excellence. Our team transforms raw operational data—from smart meters and SCADA systems to outage logs and customer usage patterns—into actionable intelligence. We design robust data platforms and governance frameworks to unify grid telemetry, compliance reporting, and business operations under a single source of truth.
                        From AI-driven load forecasting to predictive maintenance models, we build tailored solutions that optimize every facet of operations: outage response, fuel procurement, renewable integration, and emissions tracking. For leadership teams, we deliver executive dashboards that balance strategic priorities like reliability and decarbonization, while ensuring regulators receive accurate, audit-ready reporting. Whether it’s combating energy theft through machine learning or empowering customers with self-service analytics, we turn grid data into measurable business and societal value.


                    </p>
                </div>
            </div>
        </div>
    );
}

export default EngergyUtilities;