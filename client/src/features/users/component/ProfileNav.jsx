import React from 'react'
import { profileLinks } from './../../../utils'
import { NavLink } from 'react-router'
import { MdOutlineLogout } from "react-icons/md";
const ProfileNav = () => {
    return (
        <div className='text-white border bg-[#0C0E0F] py-2 border-[#666]/20 rounded flex flex-col pr-1'>
            {profileLinks.map((link, index) => (
                <NavLink key={index} to={link.route} className={({ isActive }) => isActive ? 'profile-navlinks border-l-3 border-yellow-400 bg-linear-to-r from-yellow-400/30 to-yellow-400/10' : 'profile-navlinks'}>< link.icon className='size-4 text-yellow-400/80' /> <p className='font-body text-sm'>{link.name}</p></NavLink>
            ))}
            <div className='px-5 py-2 '>
                <div className='border-t border-[#777]/30 flex items-center gap-2 py-4'>
                    <MdOutlineLogout className='size-4 text-red-500' />
                    <p className='font-body text-red-500 text-sm'>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileNav