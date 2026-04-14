import React from "react";
import { NavLink } from "react-router"
import { RiUserFill } from "react-icons/ri";
import { TbShoppingCartFilled } from "react-icons/tb";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = ({ user }) => {
    return (
        <nav className='w-full h-fit px-25 py-3 fixed top-0 z-50'>
            <div className='w-full px-15 flex justify-between items-center py-2 bg-white/10 rounded-full backdrop-blur-2xl'>
                <div className='w-20 text-2xl text-[#333]'>
                    <HiOutlineMenuAlt2 className='hover:text-black cursor-pointer' />
                </div>
                <div className='flex items-center gap-10'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-links text-gradient" : "nav-links text-[#333]"}>
                        Home
                    </NavLink>
                    <NavLink to="/collection" className={({ isActive }) => isActive ? "nav-links text-gradient" : "nav-links text-[#333]"}>
                        Collections
                    </NavLink>
                    <div className='flex items-center font-stylish text-4xl capitalize text-gradient '>
                        <p>aire</p>
                        <img src="./logo.png" className='size-12' alt="" />
                        <p>bliss</p>
                    </div>
                    <NavLink to="/collection/men" className={({ isActive }) => isActive ? "nav-links text-gradient" : "nav-links text-[#333]"}>
                        Men
                    </NavLink>
                    <NavLink to="/collection/women" className={({ isActive }) => isActive ? "nav-links text-gradient" : "nav-links text-[#333]"}>
                        Women
                    </NavLink>
                </div>
                {
                    user ? (
                        <div className='w-fit flex text-2xl items-center text-[#333]'>
                            <RiUserFill className='hover:text-black cursor-pointer' />
                            <div className='mx-5 w-[2px] bg-[#555] h-5'></div>
                            <TbShoppingCartFilled className='hover:text-black cursor-pointer' />
                        </div>
                    ) : (
                        <button className='px-8 font-body py-2 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-full text-white cursor-pointer uppercase text-xs'>login</button>
                    )
                }

            </div>
        </nav>
    )
}

export default Navbar