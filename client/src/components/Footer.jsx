import React from 'react'
import { footerDivs } from '../utils'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaArrowRight, FaAward } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa6';

const Footer = ({ background, paddingY, overlay, toOver, translateY }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    if (isMobile) {
        return (
            <footer className={`w-full h-fit! p-5 relative z-10 bg-[#222]/40 ${background}`}>
                <div className='w-full flex flex-col justify-center gap-3 text-white pb-3 relative z-10'>
                    <div className="w-full flex center gap-2">
                        <img src="./../../logo.png"  className='size-26 object-cover z-1 pr-3' alt="" />
                        <div className='w-fit '>
                            <h1 className='font-stylish text-[6.5vw] text-gradient'>Aire Bliss</h1>
                            <p className='w-fit uppercase text-xs font-body pt-0.5'>Embrace the <br /> essence of luxury</p>
                        </div>
                    </div>
                    <div className='w-full flex gap-1'>
                        {footerDivs.slice(0, 3).map((div) => (
                            <div className="w-1/3 text-center" key={div.id}>
                                <h1 className='text-[3vw] uppercase font-body tracking-wider text-gradient'>{div.title}</h1>
                                <div className="w-10 h-0.5 mt-0.5 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-2 mx-auto"></div>
                                <ul className='text-[2.8vw] text-white/70 font-body mt-1'>
                                    {div.links.map((link, index) => (
                                        <li className='text-white/70 hover:text-white cursor-pointer' key={index}>{link}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full h-full text-white font-body'>
                    <h1 className='text-xs uppercase text-center'>Follow Us</h1>
                    <p className='w-full h-fit center gap-4 mt-2'>
                        <FaInstagram className='size-5 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                        <FaFacebookF className='size-4 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                        <FaTwitter className='size-5 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                        <FaPinterestP className='size-5 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                    </p>
                </div>
                <div className='w-full h-fit px-2 rounded-2xl bg-[#222]/40 py-5  center flex-col border-2 border-yellow-600/50 mt-3 mb-5'>
                    <div className='w-full h-fit center gap-3'>
                        <div className='w-1/2 flex gap-2 items-center border-r-2 border-white/30 flex-col pb-3'>
                            <VscWorkspaceTrusted className='text-yellow-500/70 size-8 ' />
                            <div className=''>
                                <h1 className='text-sm uppercase font-body tracking-wide text-white'>100% Authentic</h1>
                                
                            </div>
                        </div>
                        <div className='w-1/2 flex gap-2 items-center flex-col pb-3'>
                            <FaAward className='text-yellow-500/70 size-8 ' />
                            <div className=''>
                                <h1 className='text-sm uppercase font-body tracking-wide text-white'>Premium Quality</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border-t-2 border-white/30 px-3 pt-2 flex gap-3 items-center '>
                        <div className='w-full'>
                            <h1 className='text-sm uppercase font-body tracking-wide text-white flex items-center gap-2 justify-center'>
                                <CiMail className='text-yellow-500/70 size-5 ' />
                                <span>stay inspired</span></h1>
                            <div className='text-sm text-white/50 font-body mt-2 flex gap-2 items-center w-full'>
                                <form className="w-full flex items-center" action="">
                                    <input className='w-full h-[33.6px] px-2 text-xs outline-none border border-yellow-400/50 rounded-l-md' type="text" placeholder='Enter your email' />
                                    <button className='text-xs uppercase font-body text-yellow-500/50 py-2 px-3 border border-yellow-400/50 rounded-r-md cursor-pointer hover:text-black hover:bg-yellow-500/50'>Subscribe </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <p className='text-center text-white/50 text-xs font-light tracking-wide font-body'>© 2026 Aire Bliss. All rights reserved. | Designed by Team Aire Bliss</p>
            </footer>
        )
    }
    return (
        <footer className={`w-full h-fit! px-30 py-10 relative z-10 bg-[#222]/40 ${background} ${paddingY}`}>
            <img src="./../../footer-1.webp" className={`absolute w-40 top-0 left-0 ${translateY}`} loading="lazy" alt="footersImg" />
            <img src="./../../footer-2.webp" className={`size-85 object-cover absolute top-0 right-0 z-1 ${translateY}`} loading="lazy" alt="footersImg" />
            <div className={`size-85  absolute top-0 right-0 z-2 bg-radial-[at_center_right] from-transparent to-25% to-[#222]/30 ${overlay} ${toOver} ${translateY}`}></div>
            <div className='w-full flex justify-center gap-5 text-white  pb-10 relative z-10'>
                <div className="w-1/5 ">
                    <img src="./../../logo.png" className='size-30 object-cover z-1 mx-auto' alt="" />
                    <h1 className='text-center font-stylish text-3xl text-gradient mt-5'>Aire Bliss</h1>
                    <p className='text-center px-5 uppercase text-sm font-body pt-1'>Embrace the essence of luxury</p>
                </div>
                <div className='w-3/5 flex gap-2'>
                    {footerDivs.map((div) => (
                        <div className="w-1/4" key={div.id}>
                            <h1 className='text-base uppercase font-body tracking-wider text-gradient'>{div.title}</h1>
                            <div className="w-10 h-0.5 mt-1 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-5"></div>
                            <ul className='text-sm text-white/70 font-body mt-2'>
                                {div.links.map((link, index) => (
                                    <li className='text-white/70 hover:text-white cursor-pointer mt-1.5' key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='w-1/5 border-l-2 border-yellow-400/30 pl-5'>
                    <IoIosStar className='text-yellow-500/70 size-4 ' />
                    <h3 className='uppercase text-xs text-gradient font-subheading mt-4'>crafted to</h3>
                    <h1 className='text-gradient-silver font-heading text-2xl font-semibold'>Perfection</h1>
                    <p className='text-sm text-white/50 font-body mt-4 pr-15'>Crafted with precision and care for an unparalleled experience.</p>
                    <button className='flex items-center gap-2 text-xs font-body uppercase border-2 border-yellow-400/50 text-yellow-400/80 hover:text-white transition-colors duration-300 px-6 py-2 mt-18 rounded-md hover:bg-yellow-400/80 cursor-pointer'>
                        <span>Explore Now</span> <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className='w-full h-fit px-5 rounded-2xl bg-[#222]/40 py-10  center gap-5 border-2 border-yellow-600/50 mb-10'>
                <div className='w-1/4 pr-5 flex gap-5 items-center border-r-2 border-white/30'>
                    <VscWorkspaceTrusted className='text-yellow-500/70 size-14 ' />
                    <div className=''>
                        <h1 className='text-sm uppercase font-body tracking-wide text-white'>100% Authentic</h1>
                        <p className='text-sm text-white/50 font-body mt-2'>We guarantee genuine Aire Bliss products.</p>
                    </div>
                </div>
                <div className='w-1/2 border-r-2 border-white/30 px-5 flex gap-5 items-center'>
                    <CiMail className='text-yellow-500/70 size-14 ' />
                    <div className='w-full'>
                        <h1 className='text-sm uppercase font-body tracking-wide text-white'>stay inspired</h1>
                        <div className='text-sm text-white/50 font-body mt-2 flex gap-2 items-center w-full'>
                            <span className='w-1/2'>Get updates on new arrivals, exclusive offers and fragrances.</span>
                            <form className="w-1/2 flex items-center" action="">
                                <input className='w-full h-[33.6px] px-2 text-xs outline-none border border-yellow-400/50 rounded-l-md' type="text" placeholder='Enter your email' />
                                <button className='text-xs uppercase font-body text-yellow-500/50 py-2 px-3 border border-yellow-400/50 rounded-r-md cursor-pointer hover:text-black hover:bg-yellow-500/50'>Subscribe </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='w-1/4 pr-5 flex gap-5 items-center'>
                    <FaAward className='text-yellow-500/70 size-12 ' />
                    <div className=''>
                        <h1 className='text-sm uppercase font-body tracking-wide text-white'>Premium Quality</h1>
                        <p className='text-sm text-white/50 font-body mt-2'>Excellence in every bottle, crafted to perfection.</p>
                    </div>
                </div>
            </div>
                
        </footer>
    )
}

export default Footer