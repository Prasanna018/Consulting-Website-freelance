import React from 'react';
// First, you'll need to import the images for the new team members
import lw from '../assets/LynetteWuensch.jpg'
import ww from '../assets/BillWuensch.jpg'
import ja from '../assets/JeanieAlexander.jpg'
import wc from '../assets/WillCockrell_Website.jpg'
import sd from '../assets/stacey_updated2.png'
import ne from '../assets/nancy_2025.png'
import rf from '../assets/rachel_2025.png'
import tg from '../assets/todd_website_updated.png'
import weiHe from '../assets/Wei-He.jpg'
import tylerHinkle from '../assets/Untitled-design20.png'
import hannahMacKnight from '../assets/headshot_macknight1-e1625236860918.jpg'

import meganMcConville from '../assets/megan.png'
import chrisWarring from '../assets/chris_website_updated.png'
import charlesSmith from '../assets/charles_website_updated.png'
import alanSimpson from '../assets/alan_simpson.png'
import amandaPoncy from '../assets/amanda_2025.png'
const teamMembers = [
    {
        name: 'Lynette Wuensch, P.E., CFM, RSC, RS',
        title: 'President',
        image: lw,
        id: 1,
    },
    {
        name: 'William Wuensch, P.E., PTOE',
        title: 'Principal / Transportation Engineer',
        image: ww,
        id: 2
    },
    {
        name: 'Jeanie Alexander, P.E.',
        title: 'Principal Engineer',
        image: ja,
        id: 3
    },
    {
        name: 'Will Cockrell, AICP',
        title: 'Principal Planner',
        image: wc,
        id: 4
    },
    {
        name: 'Stacey Dahlstrom, AICP',
        title: 'Senior Planner',
        image: sd,
        id: 5
    },
    {
        name: 'Nancy Etro',
        title: 'Planner',
        image: ne,
        id: 6
    },
    {
        name: 'Rachel Fleisher',
        title: 'GIS Planner',
        image: rf,
        id: 7
    },
    {
        name: 'Todd Gordon, AICP, PMP',
        title: 'Principal Planner',
        image: tg,
        id: 8
    },
    // New team members from the image
    {
        name: 'Wei He',
        title: 'Senior Planner/Analyst',
        image: weiHe,
        id: 9
    },
    {
        name: 'Tyler Hinkle, AICP',
        title: 'Senior Planner',
        image: tylerHinkle,
        id: 10
    },
    {
        name: 'Hannah MacKnight, EIT',
        title: 'Engineering Analyst',
        image: hannahMacKnight,
        id: 11
    },
    {
        name: 'Megan McConville',
        title: 'Senior Planner',
        image: meganMcConville,
        id: 12
    },
    {
        name: 'Amanda Poncy, AICP',
        title: 'Principal Planner',
        image: amandaPoncy,
        id: 13
    },
    {
        name: 'Alan Simpson, AICP',
        title: 'Senior Planner',
        image: alanSimpson,
        id: 14
    },
    {
        name: 'Charles Smith, P.E., PTOE',
        title: 'Senior Engineer',
        image: charlesSmith,
        id: 15
    },
    {
        name: 'Chris Warring',
        title: 'Planner',
        image: chrisWarring,
        id: 16
    }
];

const Team = () => {


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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {teamMembers.map(member => (
                        <div key={member.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col items-center pb-4 p-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-center"
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
