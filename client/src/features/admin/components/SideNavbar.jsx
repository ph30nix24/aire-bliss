import React from 'react'
import { NavLink } from 'react-router'
import { adminSidebarLinks } from '../../../utils'
const SideNavbar = () => {
    return (
        <div className='w-60 h-full p-5 bg-black flex flex-col items-center rounded-r-xl border-r border-white/10'>
            <img src="./../logo-2.png" className='size-20' alt="" />
            <h1 className='text-white text-[1.4vw] uppercase text-center font-stylish text-gradient mt-1.5'>Aire BLiss</h1>
            <div className='w-[95%] h-0.5 mx-auto bg-white/10 mt-3'></div>
            <div className='w-full h-fit py-5'>
                {adminSidebarLinks.map(link => (
                    <NavLink to={link.route} key={link.name} className={({isActive}) => isActive ? "bg-yellow-400/40 link-cls" : "link-cls"}>
                        <link.icon className='text-lg' />
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default SideNavbar