import React, { useState } from "react";
import { NavLink } from "react-router"
import { PiUserCircleLight } from "react-icons/pi";
import { CiDeliveryTruck, CiLock, CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { mobileNavLinks } from "../utils";
import { FaAngleRight, FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsBox } from "react-icons/bs";


const Navbar = ({ additional }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isSideNavClicked, setisSideNavClicked] = useState(false)
    if (isMobile) {
        return (
            <nav className={`px-5 w-full h-fit py-3 bg-black ${additional} fixed top-0 z-50 flex justify-between items-center border-b border-yellow-400/20`}>

                <div className="text-white/70 " >
                    <CgMenu className="size-5 cursor-pointer" onClick={() => setisSideNavClicked(true)} />
                </div>
                <div className='flex items-center font-subheading text-2xl capitalize text-gradient font-medium gap-1'>
                    <p>aire</p>
                    <img src="./../../logo-2.png" className='size-8' alt="" />
                    <p>bliss</p>
                </div>
                <div className="w-fit flex gap-4">
                    <FiSearch className="size-5 cursor-pointer text-white/70" />
                    <NavLink to="/user/cart" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white/80'}><CiShoppingCart className="size-5 cursor-pointer" /></NavLink>
                </div>
                <div className={`w-full absolute top-0 right-0 h-screen  ${isSideNavClicked ? "translate-x-0 bg-[#111]/70" : "translate-x-full bg-[#111]"} transform-all duration-500 ease-out flex justify-end`}>
                    <div className="w-3/4 h-full flex flex-col justify-between px-8 py-5 bg-[#111]">
                        <div>
                            <div className="w-full flex items-center justify-between">
                                <div className="w-full items-center gap-2 flex ">
                                    <img src="./../../logo.png" className="size-10" alt="" />
                                    <h1 className="text-2xl font-stylish  capitalize text-gradient">aire bliss</h1>
                                </div>
                                <RxCross2 className="text-yellow-500/70 size-8 cursor-pointer" onClick={() => setisSideNavClicked(false)} />
                            </div>
                            <div className="w-full h-fit mt-5">
                                <div className="w-full text-white border-b border-yellow-400/70">
                                    {mobileNavLinks.map((link) => (
                                        <NavLink className={({ isActive }) => `w-full flex items-center px-1 justify-between py-3.5 ${link.id !== 5 ? "border-b border-white/30" : ""}  ${isActive ? 'text-yellow-400/70' : 'text-white/80 '}`} to={link.link}>
                                            <span className="flex gap-2 items-center"><link.icon className="text-yellow-500/70 text-[5vw]" /> <span className="uppercase font-body text-xs pt-0.5">{link.name}</span></span>
                                            {link.id !== 1 ? <FaAngleRight className="text-yellow-500/70 text-[4vw]" /> : <div></div>}
                                        </NavLink>
                                    ))}
                                </div>
                                <div className='w-full h-fit pb-3 mt-3 border-b border-yellow-400/70'>
                                    <div className='w-full h-full flex items-center gap-2  py-3'>
                                        < CiDeliveryTruck className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                                        <div className='text-white font-body pr-5'>
                                            <h1 className='text-xs uppercase'>Free Shipping</h1>
                                            <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>On all orders over ₹ 999</p>
                                        </div>
                                    </div>
                                    <div className='w-full h-full flex items-center gap-2 py-3'>
                                        <BsBox className='size-9  text-yellow-500/70 p-2.5 rounded-full bg-[#222]/40 center' />
                                        <div className='text-white pr-5 font-body '>
                                            <h1 className='text-xs uppercase'>Easy Return</h1>
                                            <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Hassle-free returns within 7 days</p>
                                        </div>
                                    </div>
                                    <div className='w-full h-full flex items-center gap-2  py-3'>
                                        <RiCustomerService2Fill className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                                        <div className='text-white pr-5 font-body '>
                                            <h1 className='text-xs uppercase'>Customer Support</h1>
                                            <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>24/7 dedicated support team</p>
                                        </div>
                                    </div>
                                    <div className='w-full h-full flex items-center gap-2 py-3'>
                                        <CiLock className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                                        <div className='text-white pr-5 font-body '>
                                            <h1 className='text-xs uppercase'>Secure Payment</h1>
                                            <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>100% secure & trusted payment methods</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-fit text-white font-body mt-3 px-1'>
                                    <h1 className='text-xs uppercase'>Follow Us</h1>
                                    <p className='w-full h-fit flex items-center gap-4 mt-3'>
                                        <FaInstagram className='size-5 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                                        <FaFacebookF className='size-4 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                                        <FaTwitter className='size-5 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                                        <FaPinterestP className='size-5 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-fit px-1 py-3">
                            <a href="/user/profile">
                                <button className="w-full flex items-center border border-yellow-500/70 rounded-md px-5 py-3 gap-3 justify-center cursor-pointer">
                                    <PiUserCircleLight className="text-yellow-500/70 size-6" />
                                    <span className="uppercase text-xs text-yellow-500/70">my account</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    return (
        <nav className={`w-full h-fit px-30 py-3 fixed top-0 z-50 bg-black flex justify-between items-center border-b border-yellow-400/20 ${additional}`}>
            <div className='flex items-center font-stylish text-3xl capitalize text-gradient '>
                <p>aire</p>
                <img src="./../../logo.png" className='size-12' alt="" />
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
                <NavLink to="/user/profile/" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}><PiUserCircleLight className="size-5 cursor-pointer " /></NavLink>
                <GoHeart className="size-5 cursor-pointer text-white" />
                <NavLink to="/user/cart/" className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'} ><CiShoppingCart className="size-5 cursor-pointer" /></NavLink>
            </div>
        </nav>
    )
}

export default Navbar