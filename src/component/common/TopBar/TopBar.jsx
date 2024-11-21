import React from 'react'
import { FiCommand } from 'react-icons/fi'
import { IoMdSearch } from 'react-icons/io'
import { LuBell } from 'react-icons/lu'
import { MdOutlineShare } from 'react-icons/md'

function TopBar() {
    return (
        <div className='flex items-center justify-between'>
            <div className='relative md:min-w-80 me-3'>
                <IoMdSearch size={26} color="#6b7280" className='absolute top-1 left-2' />
                <input className='customInput w-full' placeholder='Search Keyword...' />
                <div className='flex items-center gap-1 bg-gray-100 rounded-md w-12 justify-center p-1 border border-slate-300 absolute top-1 right-2'>
                    <FiCommand color="#6b7280" size={12} />
                    <p className='text-gray-500 text-xs'>+ K</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='p-2 border-2 rounded-md'>
                    <LuBell />
                </div>
                <div className='p-2 border-2 rounded-md'>
                    <MdOutlineShare />
                </div>
            </div>
        </div>
    )
}

export default TopBar