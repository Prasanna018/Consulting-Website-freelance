import React from 'react'
import { Meneus } from '../data/Menues.jsx'
import { Link } from 'react-router-dom'

function Header() {
    return (

        <nav className='w-full flex justify-between lg:px-30 md:px-20 sm:px-10 px-8 items-center p-4 '>

            <div className='font-bold text-xl text-white'>
                CONSULTANTS
            </div>

            <div className='md:flex gap-4 p-2 hidden '>
                {Meneus.map((data, id) => (
                    (
                        <a className='flex cursor-pointer font-semibold' key={id}>

                            {data.name}
                        </a>
                    )
                ))}
            </div>


        </nav>


    )
}

export default Header
