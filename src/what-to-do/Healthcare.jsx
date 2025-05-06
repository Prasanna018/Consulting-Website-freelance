import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Healthcare() {
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

                <h1 className="text-4xl font-bold mb-8"> Healthcare</h1>





                <div className='border-2 rounded-2xl border-gray-300 p-5
                '>
                    <p className='text-lg'>We empower healthcare organizations to harness data for better patient care, operational excellence, and regulatory compliance. Our team transforms clinical and operational data—from EHRs and claims to patient outcomes—into actionable insights that improve care quality while reducing costs. We help providers, payers, and administrators navigate complex healthcare data landscapes while ensuring full HIPAA compliance.
                        Our comprehensive data strategies unify siloed systems—integrating EHRs, patient portals, and financial data—to create a 360-degree view of patient care and operations. We build intelligent dashboards and clinical decision-support tools that give providers real-time insights into patient risks, resource utilization, and care gaps, while helping administrators track KPIs like readmission rates, patient satisfaction, and revenue cycle performance.
                        Using AI and advanced analytics, we solve healthcare’s toughest challenges: machine learning models predict patient deterioration and readmission risks, NLP extracts insights from clinical notes, and predictive analytics optimizes staffing and resource allocation. From reducing preventable errors to streamlining revenue cycles, we turn healthcare data into better outcomes and healthier margins.


                    </p>
                </div>
            </div>
        </div>
    );
}

export default Healthcare;