import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: 'Lynette Wuensch, P.E., CFM, RSC, RS',
            title: 'President',
            image: '/api/placeholder/200/250',
            id: 1
        },
        {
            name: 'William Wuensch, P.E., PTOE',
            title: 'Principal / Transportation Engineer',
            image: '/api/placeholder/200/250',
            id: 2
        },
        {
            name: 'Jeanie Alexander, P.E.',
            title: 'Principal Engineer',
            image: '/api/placeholder/200/250',
            id: 3
        },
        {
            name: 'Will Cockrell, AICP',
            title: 'Principal Planner',
            image: '/api/placeholder/200/250',
            id: 4
        },
        {
            name: 'Stacey Dahlstrom, AICP',
            title: 'Senior Planner',
            image: '/api/placeholder/200/250',
            id: 5
        },
        {
            name: 'Nancy Etro',
            title: 'Planner',
            image: '/api/placeholder/200/250',
            id: 6
        },
        {
            name: 'Rachel Fleisher',
            title: 'GIS Planner',
            image: '/api/placeholder/200/250',
            id: 7
        },
        {
            name: 'Todd Gordon, AICP, PMP',
            title: 'Principal Planner',
            image: '/api/placeholder/200/250',
            id: 8
        }
    ];

    return (
        <div
            className="min-h-screen w-full bg-white overflow-y-auto mt-20"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
            }}
        >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div className="container mx-auto px-4 py-8 pb-20 ">
                <h1 className="text-3xl font-normal text-gray-600 mb-8">Our Team</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map(member => (
                        <div key={member.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col items-center pb-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64 object-cover object-center"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-sm font-medium text-blue-800">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.title}</p>
                            </div>
                            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                                View Resume
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
