import React from 'react';
import { FcComboChart } from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/Navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkClasses = 'flex items-center gap-2 font-light px-5 py-2 hover:bg-violet-700 hover:no-underline active:bg-gray-900 rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className='bg-slate-900 w-60 p-3 flex flex-col text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcComboChart fontSize={24} />
                <span className='text-neutral-100 text-lg'>WhiteBoard</span>
            </div>
            <div className='flex-1 py-5 flex flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.label} item={item} />
                ))}
            </div>
            <div className='flex flex-col gap-0.5 border-t border-gray-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.label} item={item} />
                ))}
                <div className={classNames('text-red-500 cursor-pointer', linkClasses)}>
                    <span className='text-xl'><HiOutlineLogout/></span>
                    Logout
                </div>
            </div>

        </div>
    )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation();


    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-violet-700 text-white' : 'text-stone-400', linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
