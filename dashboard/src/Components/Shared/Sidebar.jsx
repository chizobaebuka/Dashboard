import React from 'react';
import {FcComboChart} from 'react-icons/fc';

export default function Sidebar() {
    return (
        <div className='bg-slate-900 w-60 p-3 flex flex-col text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcComboChart fontSize={24}/>
                <span className='text-neutral-100 text-lg'>WhiteBoard</span>
            </div>
            <div className='flex-1'>top part</div>
            <div>bottom part</div>
        </div>
    )
}
