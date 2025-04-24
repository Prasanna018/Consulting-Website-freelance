import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function LifeSciences() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#1e2223] text-white min-h-fit pb-20">
            <div className="container mx-auto px-4 py-6">
                {/* Back button */}
                <button
                    onClick={() => navigate('/what-we-do')}
                    className="flex items-center gap-2 text-blue-400 mb-6 hover:underline cursor-pointer"
                >
                    <ArrowLeft size={16} />
                    Back to Industries
                </button>

                <h1 className="text-4xl font-bold mb-8">Life Sciences</h1>





                <div className='p-4
                '>
                    <p className='text-lg'>We partner with healthcare and biopharma leaders to transform data into strategic insights across R&D, regulatory compliance, clinical development, and commercialization. Our expertise includes analyzing clinical trial data, patient outcomes, and real-world evidence to drive decisive action—from optimizing trials to accelerating market access. We build scalable data architectures that unify clinical, manufacturing, and commercial operations, and develop tailored tools for critical decisions like R&D investments, supply chain planning, and pharmacovigilance monitoring.
                        <br></br>
                        For niche challenges, we deliver custom solutions—automated data pipelines, biomarker discovery platforms, or AI-driven personalized medicine workflows. Leveraging AI/ML, we enable breakthroughs in drug discovery (e.g., target identification), predict disease progression, and extract insights from scientific literature using NLP. Our goal: Turn complex data into faster, smarter decisions that improve patient outcomes and business performance.


                    </p>
                </div>
            </div>
        </div>
    );
}

export default LifeSciences;