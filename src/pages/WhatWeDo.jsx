import React from 'react'

function WhatWeDo() {
    return (
        <div className='text-black flex'>
            <div>
                <Link className='cursor-pointer' to="overview">
                    Overview
                </Link>
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default WhatWeDo
