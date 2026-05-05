import React from 'react'
import { PiStarFourBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { PiCrownLight } from "react-icons/pi";
import { CiClock2 } from 'react-icons/ci';
import { BsBackpack } from "react-icons/bs";
import { PiGift } from "react-icons/pi";


const Featured = ({ isMobile }) => {
    if (isMobile) {
        return (
            <section className='w-full h-fit! px-5 py-10 relative z-10'>
                <p className='text-[2.8vw] text-center uppercase text-gradient-gold font-subheading mb-2'>Curated For You</p>
                <h1 className='font-heading text-gradient-silver text-[7vw] font-semibold text-center leading-[90%]'>Featured Collection</h1>
                <div className="w-50 mx-auto h-0.5 mt-2 bg-linear-to-r rounded-full from-black via-yellow-600 to-black mb-5"></div>
                <div className='w-full h-fit flex gap-3 mt-10 flex-col'>
                    <div className='w-full h-auto rounded-2xl overflow-hidden relative border border-yellow-400/50 shadow-2xl shadow-yellow-400/0'>
                        <img src="./featured_products/oud_malaki_mobile.webp" loading='lazy'  className='size-full object-cover relative z-1' alt="" />
                        <div className='size-full bg-black/60 absolute top-0 z-2'></div>
                        <div className='absolute w-full h-full top-0 left-0 z-2 p-5 flex flex-col '>
                            <p className='flex items-center '>
                                <PiStarFourBold className='text-yellow-400/70 size-4' />
                                <span className='text-[3vw] ml-2 text-yellow-400/70 uppercase font-body'>Featured Pick</span>
                            </p>
                            <div className='mt-2'>
                                <h1 className='text-white font-heading text-[6vw] tracking-wider'>Oud Malaki</h1>
                                <p className='text-gradient uppercase font-body text-[3vw] mt-2 mb-1'>bold. mysterious. powerful</p>
                                <div className="w-10 h-0.5 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-5"></div>
                                <p className='font-body text-white/70 text-[3.5vw] pr-25'>
                                    A rich blend of oud and spice that <br /> embodies strength and sophistication.
                                </p>
                                <button className='flex items-center gap-2 text-[3vw] font-body uppercase border-2 border-yellow-400/50 text-yellow-400/80 hover:text-white transition-colors duration-300 px-6 py-2 mt-[70%] rounded-md hover:bg-yellow-400/80 cursor-pointer bg-[#222]/40 backdrop-blur-sm'>
                                    <span>Explore Now</span> <FaArrowRight />
                                </button>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <div>
                                    <IoDiamondOutline className='text-yellow-400/70 text-4xl' />
                                </div>
                                <div className='font-body'>
                                    <p className='uppercase text-xs text-white/70'>30% perfume concentration</p>
                                    <p className='text-xs text-white/70 pt-0.5'>Long Lasting &middot; Premium Quality</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit gap-3  flex flex-col'>
                        <div className="w-full h-1/2 rounded-2xl overflow-hidden relative border border-yellow-400/50 shadow-2xl shadow-yellow-400/0">
                            <img src="./featured_products/featured_white_oud.webp" loading='lazy'  className='size-full object-cover relative z-1' alt="" />
                            <div className="w-full h-full absolute top-0 left-0 z-2 flex justify-center flex-col p-5">
                                <p className='uppercase text-[3vw] font-body bg-clip-text text-transparent bg-linear-to-r from-yellow-700 to-yellow-800'>Timeless & elegant</p>
                                
                                <h1 className='text-[#222] font-medium font-heading text-[5.5vw]'>White Oud</h1>

                                <p className='text-[3vw] font-body text-black/70 mt-0.5'>Clean. Sophisticated. Timeless.</p>
                                <p className='text-[3.8vw] font-body text-[#222] mt-3 font-light'>₹ 429.00</p>
                                <button className='flex items-center gap-1.5 mt-10 cursor-pointer'>
                                    <span className='uppercase text-xs font-body bg-clip-text text-transparent bg-linear-to-r from-yellow-700 to-yellow-800 mt-0.5'>Discover</span>
                                    <FaArrowRight className='size-3 text-yellow-700/70' />
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-1/2 rounded-2xl overflow-hidden relative border border-yellow-400/50 shadow-2xl shadow-yellow-400/0">
                            <img src="./featured_products/featured_pink_cheffron.webp" loading='lazy'  className='size-full object-cover' alt="" />
                            <div className="w-full h-full absolute top-0 left-0 z-2 flex justify-center flex-col p-5">
                                <p className='uppercase text-[3vw] font-body bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-pink-400'>soft & romantic</p>
                                <h1 className='text-[#222] font-medium font-heading text-[5.5vw]'>Pink Chiffon</h1>

                                <p className='text-[3vw] font-body text-black/70 mt-0.5'>Feminine. Delicate. Captivating.</p>
                                <p className='text-[3.8vw] font-body text-[#222] mt-3 font-light'>₹ 459.00</p>
                                <button className='flex items-center gap-1.5 mt-13 cursor-pointer'>
                                    <span className='uppercase text-xs font-body bg-clip-text text-transparent bg-linear-to-r from-pink-700 to-pink-600 mt-0.5'>Discover</span>
                                    <FaArrowRight className='size-3 text-pink-700/70' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit border mt-3 border-yellow-400/40 rounded-2xl relative py-4 center gap-2 px-2 bg-[#222]/40'>
                    <div className='w-1/4 h-full center flex-col gap-2 px-2 border-r-2  border-white/20'>
                        <div className='center'><PiCrownLight className='size-10 text-yellow-500/70 border-2 border-yellow-500/70 p-2 rounded-full' /></div>
                        <div className='text-white font-body'>
                            <h1 className='text-[2.8vw] uppercase text-center'>Premium Quality</h1>
                        </div>
                    </div>
                    <div className='w-1/4 h-full center flex-col gap-2 px-2 border-r-2  border-white/20'>
                        <div className='center'><CiClock2 className='size-10 text-yellow-500/70 border-2 border-yellow-500/70 p-2 rounded-full' /></div>
                        <div className='text-white font-body '>
                            <h1 className='text-[2.8vw] uppercase text-center'>Long Lasting</h1>
                        </div>
                    </div>
                    <div className='w-1/4 h-full center flex-col gap-2 px-2 border-r-2  border-white/20'>
                        <div className='center'><BsBackpack className='size-10 text-yellow-500/80 border-2 border-yellow-500/70 p-2 rounded-full' /></div>
                        <div className='text-white font-body '>
                            <h1 className='text-[2.8vw] uppercase text-center'>Luxury Experience</h1>
                        </div>
                    </div>
                    <div className='w-1/4 h-full center flex-col gap-2 px-2'>
                        <div className='center'><PiGift className='size-10 text-yellow-500/70 border-2 border-yellow-500/70 p-2 rounded-full' /></div>
                        <div className='text-white font-body '>
                            <h1 className='text-[2.8vw] uppercase text-center'>Exclusive collection</h1>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
    return (
        <section className='w-full h-fit! px-30 py-10 relative z-10'>
            <p className='text-sm uppercase text-gradient-gold font-subheading mb-2'>Curated For You</p>
            <h1 className='font-heading text-gradient-silver text-3xl font-semibold'>Featured Collection</h1>
            <div className="w-10 h-0.5 mt-1 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-5"></div>
            <div className='w-full h-[70dvh] flex gap-3 mt-10'>
                <div className='w-3/5 h-full rounded-2xl overflow-hidden relative border border-yellow-400/50 shadow-2xl shadow-yellow-400/0'>
                    <img src="./featured_products/featured_oud_malaki.webp" loading='lazy' className='size-full object-cover relative z-1' alt="" />
                    <div className='absolute w-full h-full top-0 left-0 z-2 p-10 flex flex-col justify-between'>
                        <p className='flex items-center '>
                            <PiStarFourBold className='text-yellow-400/70 ' />
                            <span className='text-sm ml-2 text-yellow-400/70 uppercase font-body'>Featured Pick</span>
                        </p>
                        <div className='pb-10'>
                            <h1 className='text-white font-heading text-4xl tracking-wider'>Oud Malaki</h1>
                            <p className='text-gradient uppercase font-body text-sm mt-3 mb-4'>bold. mysterious. powerful</p>
                            <div className="w-10 h-0.5 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-5"></div>
                            <p className='font-body text-white/40'>
                                A rich blend of oud and spice that <br /> embodies strength and sophistication.
                            </p>
                            <button className='flex items-center gap-2 text-sm font-body uppercase border-2 border-yellow-400/50 text-yellow-400/80 hover:text-white transition-colors duration-300 px-6 py-2 mt-15 rounded-md hover:bg-yellow-400/80 cursor-pointer'>
                                <span>Explore Now</span> <FaArrowRight />
                            </button>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <IoDiamondOutline className='text-yellow-400/70 text-4xl' />
                            </div>
                            <div className='font-body'>
                                <p className='uppercase text-xs text-white/70'>30% perfume concentration</p>
                                <p className='text-xs text-white/70 pt-0.5'>Long Lasting &middot; Premium Quality</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-2/5 h-full gap-3  flex flex-col'>
                    <div className="w-full h-1/2 rounded-2xl overflow-hidden relative border border-yellow-400/50 shadow-2xl shadow-yellow-400/0">
                        <img src="./featured_products/featured_white_oud.webp" loading='lazy' className='size-full object-cover relative z-1' alt="" />
                        <div className="w-full h-full absolute top-0 left-0 z-2 flex justify-center flex-col p-10">
                            <p className='uppercase text-sm font-body bg-clip-text text-transparent bg-linear-to-r from-yellow-700 to-yellow-800'>Timeless & elegant</p>
                            <div className="w-10 h-0.5 mt-1 bg-linear-to-r rounded-full from-yellow-500 to-yellow-700 mb-4"></div>
                            <h1 className='text-[#222] font-medium font-heading text-2xl'>White Oud</h1>

                            <p className='text-xs font-body text-black/70 mt-1'>Clean. Sophisticated. Timeless.</p>
                            <p className='text-base font-body text-[#222] mt-4 font-light'>Rs. 429.00</p>
                            <button className='flex items-center gap-1.5 mt-10 cursor-pointer'>
                                <span className='uppercase text-xs font-body bg-clip-text text-transparent bg-linear-to-r from-yellow-700 to-yellow-800 mt-0.5'>Discover</span>
                                <FaArrowRight className='size-3 text-yellow-700/70' />
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-1/2 rounded-2xl overflow-hidden relative border border-yellow-400/50 shadow-2xl shadow-yellow-400/0">
                        <img src="./featured_products/featured_pink_cheffron.webp" className='size-full object-cover' loading='lazy' alt="" />
                        <div className="w-full h-full absolute top-0 left-0 z-2 flex justify-center flex-col p-10">
                            <p className='uppercase text-sm font-body bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-pink-400'>soft & romantic</p>
                            <div className="w-10 h-0.5 mt-1 bg-linear-to-r rounded-full from-pink-400 to-pink-500 mb-4"></div>
                            <h1 className='text-[#222] font-medium font-heading text-2xl'>Pink Chiffon</h1>

                            <p className='text-xs font-body text-black/70 mt-1'>Feminine. Delicate. Captivating.</p>
                            <p className='text-base font-body text-[#222] mt-4 font-light'>Rs. 459.00</p>
                            <button className='flex items-center gap-1.5 mt-13 cursor-pointer'>
                                <span className='uppercase text-xs font-body bg-clip-text text-transparent bg-linear-to-r from-pink-700 to-pink-600 mt-0.5'>Discover</span>
                                <FaArrowRight className='size-3 text-pink-700/70' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit border mt-3 border-yellow-400/40 rounded-2xl relative py-8 center gap-5 px-5 bg-[#222]/40'>
                <div className='w-1/4 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    <div className='center'><PiCrownLight className='size-14 text-yellow-500/70 border-2 border-yellow-500/70 p-2 rounded-full' /></div>
                    <div className='text-white font-body pr-5'>
                        <h1 className='text-xs uppercase'>Premium Quality</h1>
                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Sourced from the finest around the world</p>
                    </div>
                </div>
                <div className='w-1/4 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    <div className='center'><CiClock2 className='size-14 text-yellow-500/70 border-2 border-yellow-500/70 p-2 rounded-full' /></div>
                    <div className='text-white pr-5 font-body '>
                        <h1 className='text-xs uppercase'>Long Lasting</h1>
                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Fragrances that stay with you all day</p>
                    </div>
                </div>
                <div className='w-1/4 h-full center gap-5 px-5 border-r-2  border-white/20'>
                    <div className='center'><BsBackpack className='size-14 text-yellow-500/80 border-2 border-yellow-500/70 p-3 rounded-full' /></div>
                    <div className='text-white pr-5 font-body '>
                        <h1 className='text-xs uppercase'>Luxury Experience</h1>
                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Crafted with passion, delivered with care</p>
                    </div>
                </div>
                <div className='w-1/4 h-full center gap-4 px-5'>
                    <div className='center'><PiGift className='size-14 text-yellow-500/70 border-2 border-yellow-500/70 p-2 rounded-full' /></div>
                    <div className='text-white pr-5 font-body '>
                        <h1 className='text-xs uppercase'>Exclusive collection</h1>
                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Unique scents for every personality</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Featured