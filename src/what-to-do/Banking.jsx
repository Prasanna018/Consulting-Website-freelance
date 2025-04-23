import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Banking() {
    return (
        <div className="pt-[72px] min-h-screen w-full bg-gray-900 px-4 md:px-12 py-10">
            <div className="bg-gray-800 z-50 p-8 rounded-lg shadow-xl">
                <div className="mb-6">
                    <Link
                        to="/what-we-do"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6"
                    >
                        <ArrowLeft size={18} className="mr-2" />
                        <span>Back to Industries</span>
                    </Link>

                    <h1 className="text-3xl font-bold text-white mb-2">Banking Solutions</h1>
                    <p className="text-gray-300 mb-8">Innovative digital solutions for the modern banking industry.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-white mb-4">Digital Banking Platforms</h2>
                        <p className="text-gray-300">
                            Our cutting-edge digital banking platforms enable financial institutions to provide
                            their customers with seamless, secure, and user-friendly online banking experiences.
                        </p>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-white mb-4">Fraud Detection</h2>
                        <p className="text-gray-300">
                            Advanced AI-powered fraud detection systems that help banks identify and prevent
                            fraudulent activities in real-time.
                        </p>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-white mb-4">Payment Solutions</h2>
                        <p className="text-gray-300">
                            Secure and efficient payment processing solutions for banks and financial institutions,
                            supporting multiple payment methods and currencies.
                        </p>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-white mb-4">Customer Analytics</h2>
                        <p className="text-gray-300">
                            Data-driven insights and analytics solutions to help banks understand customer behavior
                            and preferences for better service delivery.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banking;
