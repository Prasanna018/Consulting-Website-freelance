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
].filter(item => item?.id && item?.name && item?.link)

function WhatWeDo() {
    return (

        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className=" w-full bg-gray-700  p-10  flex gap-8"
        >
            {/* Sidebar Navigation */}
            <div className="w-1/4 flex flex-col gap-4">
                {routeLinks.map((data) => (
                    <Link
                        key={data.id}
                        to={data.link}
                        className="text-blue-600 hover:underline font-medium"
                    >
                        {data.name}
                    </Link>
                ))}
            </div>

            {/* Dynamic Outlet Content */}
            <div className="w-3/4">
                <Outlet />
            </div>
        </motion.div>

    )
}

export default WhatWeDo
