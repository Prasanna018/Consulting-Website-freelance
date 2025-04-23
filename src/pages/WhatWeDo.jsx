import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

const routeLinks = [
    {
        id: 1,
        name: 'Overview',
        link: "overview"
    },
    {
        id: 2,
        name: 'Industries',
        link: "industries"
    },
    {
        id: 3,
        name: "Technical Solutions",
        link: "technical-solutions"
    },
    {
        id: 4,
        name: "Analytics Solutions",
        link: "analytics-solutions"
    }
    // Optional: filter out empty or invalid entries
].filter(item => item?.id && item?.name && item?.link)

function WhatWeDo() {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='text-black flex w-full'
        >
            <div className='flex flex-col w-1/4 gap-2'>
                {
                    routeLinks.map((data) => (
                        <Link
                            key={data.id}
                            to={data.link}
                            className='hover:underline text-blue-600'
                        >
                            {data.name}
                        </Link>
                    ))
                }
            </div>

            <div className='w-3/4 pl-4'>
                <Outlet />
            </div>
        </motion.div>
    )
}

export default WhatWeDo
