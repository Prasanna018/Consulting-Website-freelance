import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const subroutes = [
    { id: 1, name: "Banking", link: "industries/banking" },
    { id: 2, name: "Education", link: "education" },
    { id: 3, name: "Life Sciences", link: "life-sciences" },
    { id: 4, name: "Energy and Utilities", link: "energy-utilities" },
    { id: 5, name: "Manufacturing", link: "manufacturing" },
    { id: 6, name: "Distribution", link: "distribution" },
    { id: 7, name: "Healthcare", link: "healthcare" },
    { id: 8, name: "Retail", link: "retail" },
    { id: 9, name: "Media and Information", link: "media-information" },
    { id: 10, name: "Insurance", link: "insurance" },
    { id: 11, name: "Travel and Logistics", link: "travel-logistics" }
];


const Industries = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Industries</h2>


            <div className='grid grid-cols-4 gap-10'>
                {subroutes.map((data) => (
                    <Link
                        className='p-2 hover:underline text-lg text-gray-200'
                        to={data.link} key={data.id}>
                        {data.name}
                    </Link>
                ))}
            </div>

            {/* Render sub-routes lik
            e Banking */}

            <div className=''>



            </div>



        </div>
    );
};

export default Industries;
