import React, { useState } from "react";
import { NavLink } from "react-router"
import { PiUserCircleLight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
    const [user, setUser] = useState(true)
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
            <div>
                {user ? (
                    <div className="w-fit flex gap-4">
                        <FiSearch className="size-5 cursor-pointer text-white" />
                        <PiUserCircleLight className="size-5 cursor-pointer text-white" />
                        <GoHeart className="size-5 cursor-pointer text-white" />
                        <CiShoppingCart className="size-5 cursor-pointer text-white" />
                    </div>
                ) : (
                    <div>Login</div>
                )}
            </div>
        </nav>
    )
}

export default Navbar