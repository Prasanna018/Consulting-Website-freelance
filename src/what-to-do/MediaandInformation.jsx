import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function MediaAndInformation() {
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

                <h1 className="text-4xl font-bold mb-8"> Media and Information</h1>





                <div className='border-2 rounded-2xl border-gray-300 p-5
                '>
                    <p className='text-lg'>We empower media companies and content creators to harness data for smarter storytelling, deeper engagement, and higher monetization. Our team transforms audience behavior, content performance, and advertising data into actionable strategies that boost reach, retention, and revenue—helping you create what resonates and monetize what works.
                        We build unified data ecosystems that connect audience analytics, content metadata, and ad performance—giving you a complete view of what’s driving engagement and revenue. Our tools help creators and marketers optimize content production, fine-tune ad targeting, and personalize recommendations, while real-time dashboards track KPIs like watch time, churn rates, and CPMs. Whether you need to refine ad pricing, convert more subscribers, or predict viral trends, we deliver tailored solutions that move the needle.
                        Through AI and NLP, we take content intelligence further: machine learning predicts what audiences will love, natural language processing helps scale content creation, and predictive models optimize ad inventory. From hyper-targeted recommendations to dynamic paywall strategies, we turn content data into competitive advantage—and clicks into lasting relationships.



                    </p>
                </div>
            </div>
        </div>
    );
}

export default MediaAndInformation;