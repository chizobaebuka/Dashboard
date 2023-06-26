import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <div className='bg-purple-200'>Sidebar</div>
            <div className='bg-gray-200'>header</div>
            <div className=''>{<Outlet/>}</div>
            <p>Footer</p>
        </div>
    )
}
