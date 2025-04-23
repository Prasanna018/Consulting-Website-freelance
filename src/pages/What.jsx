
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function What() {
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
    );
}

export default What;
