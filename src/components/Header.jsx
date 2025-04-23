import React from 'react';
import { Meneus } from '../data/Menues.jsx';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='w-full flex lg:px-30 md:px-20 sm:px-10 px-8 items-center p-4 '>
            <div className='font-bold text-xl text-white mr-30'>
                <Link to={'/'}>
                    CONSULTANTS
                </Link>
            </div>

            <div className='md:flex gap-4 p-2 hidden'>
                {Meneus.map((data, id) => (
                    <Link
                        className='flex text-lg text-white cursor-pointer font-semibold'
                        key={id}
                        to={data.link}
                    >
                        {data.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Header;
