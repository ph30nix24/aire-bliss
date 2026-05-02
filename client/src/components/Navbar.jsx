import React, { useState } from "react";
import { NavLink } from "react-router"
import { PiUserCircleLight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    if (isMobile) {
        return (
            <nav className="px-5 w-full h-fit py-3 bg-black fixed top-0 z-50 flex justify-between items-center border-b border-yellow-400/20">
                <div className="text-white/70 ">
                    <CgMenu className="size-5" />
                </div>
                <div className='flex items-center font-stylish text-3xl capitalize text-gradient font-medium '>
                    <p>aire</p>
                    <img src="./logo.png" className='size-10' alt="" />
                    <p>bliss</p>
                </div>
                <div className="w-fit flex gap-4">
                    <FiSearch className="size-5 cursor-pointer text-white/70" />
                    <CiShoppingCart className="size-5 cursor-pointer text-white/80" />
                </div>
            </nav>
        )
    }
    return (
        <nav className='w-full h-fit px-30 py-3 fixed top-0 z-50 bg-black flex justify-between items-center border-b border-yellow-400/20'>
            <div className='flex items-center font-stylish text-3xl capitalize text-gradient '>
                <p>aire</p>
                <img src="./logo.png" className='size-12' alt="" />
                <p>bliss</p>
            </div>
            <ul className='flex items-center space-x-8 text-white font-body text-xs uppercase tracking-wider'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Home</NavLink></li>
                <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Shop</NavLink></li>
                <li><NavLink to="/collection" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Collection</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>About Us</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>Contact</NavLink></li>
            </ul>
            <div className="w-fit flex gap-4">
                <FiSearch className="size-5 cursor-pointer text-white" />
                <PiUserCircleLight className="size-5 cursor-pointer text-white" />
                <GoHeart className="size-5 cursor-pointer text-white" />
                <CiShoppingCart className="size-5 cursor-pointer text-white" />
            </div>
        </nav>
    )
}

export default Navbar