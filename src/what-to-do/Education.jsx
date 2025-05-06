import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Education() {
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

                <h1 className="text-4xl font-bold mb-8">Education</h1>





                <div className='border-2 rounded-2xl border-gray-300 p-5
                '>
                    <p className='text-lg'>We empower schools, universities, and edtech companies with data-driven strategies to enhance learning outcomes and operational efficiency. Our solutions include analyzing academic performance, student engagement, and faculty effectiveness to identify at-risk students and optimize programs. We design integrated data ecosystems—spanning admissions, academics, and HR—and build intuitive dashboards for leaders to track KPIs like graduation rates, test scores, and budgets. By delivering tailored analytics tools, we help educators allocate resources effectively and solve critical instructional or administrative challenges.

                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;