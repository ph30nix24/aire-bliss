import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const BrandValue = ({ isMobile }) => {
    if (isMobile) {
        return (
            <section className='w-full h-fit! px-5 py-10 relative z-10'>
                <div className='w-40 mx-auto relative h-0.5 bg-linear-to-r from-black/70 via-yellow-500/50 to-black/70'>
                    <img src="./logo.png" className='size-8 bg-black/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl' loading='lazy' alt="logo" />
                </div>
                <h1 className='font-heading text-gradient-silver text-[6vw] font-semibold text-center my-4'>Aire Bliss Promise</h1>
                <div className='w-60 mx-auto relative h-0.5 bg-linear-to-r from-black/70 via-yellow-500/50 to-black/70'>
                    <div className='size-1 rotate-45 bg-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl shadow-sm shadow-yellow-500'></div>
                </div>
                <div className='w-full h-fit border-2 border-yellow-500/30 rounded-xl mt-5 flex items-center flex-col justify-center bg-[#222]/40 overflow-hidden'>
                    <img src="./brandValue.webp" loading='lazy'  className='w-full h-full object-cover' alt="brand" />
                    <div className='w-full h-fit center gap-2 px-3'>
                        <div className='w-3/5 h-full py-5 border-r '>
                            <div className='size-full border-r-2 border-yellow-400/30 '>
                                <h1 className='font-heading text-gradient-silver text-[4vw] font-semibold'>More than a Fragrance,</h1>
                                <p className='pl-0.5 font-subheading text-gradient text-[4vw] italic mt-0.5'>It's an Experience </p>
                                <p className='font-body text-white/60 mt-4 text-[3vw] '>From the first spray to the lasting impression, Aire Bliss is designed to be a part of your most memorable moments.</p>
                            </div>
                        </div>
                        <div className='w-2/4 h-full py-5 px-3 center flex-col'>
                            <img src="./logo.png" className='size-20 object-cover z-1' alt="" />
                            <h1 className='font-stylish text-gradient text-[6.5vw] font-medium mt-2 mb-1 z-3'>Aire Bliss</h1>
                            <p className='text-white uppercase text-[2.6vw] font-body text-center'>embrace the essence of luxury</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit border mt-3 border-yellow-400/40 rounded-2xl relative py-4 center gap-2 px-2 bg-[#222]/40'>
                    <div className='w-1/4 h-full px-2 border-r-2  border-white/20 flex-col center gap-2'>
                        < CiDeliveryTruck className='size-8 text-yellow-500/70' />
                        <div className='text-white font-body'>
                            <h1 className='text-[2.8vw] uppercase text-center'>Fast Shipping</h1>
                        </div>
                    </div>
                    <div className='w-1/4 h-full px-2 border-r-2  border-white/20 flex-col center gap-2'>
                        <BsBox className='size-8 text-yellow-500/70 ' />
                        <div className='text-white font-body'>
                            <h1 className='text-[2.8vw] uppercase text-center'>Easy <br/> Return</h1>
                        </div>
                    </div>
                    <div className='w-1/4 h-full px-2 border-r-2  border-white/20 flex-col center gap-2'>
                        <RiCustomerService2Fill className='size-8 text-yellow-500/80' />
                        <div className='text-white font-body '>
                            <h1 className='text-[2.8vw] uppercase text-center'>Customer Support</h1>
                        </div>
                    </div>
                    <div className='w-1/4 h-full px-2 flex-col center gap-2'>
                        <CiLock className='size-8 text-yellow-500/70' />
                        <div className='text-white font-body '>
                            <h1 className='text-[2.8vw] uppercase text-center'>Secure Payment</h1>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
    return (
        <section className='w-full h-fit! px-30 py-10 relative z-10 pt-20'>
            <div className='w-70 mx-auto relative h-0.5 bg-linear-to-r from-black/70 via-yellow-500/50 to-black/70'>
                <img src="./logo.png" className='size-10 bg-black/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl' loading='lazy' alt="logo" />
            </div>
            <h1 className='font-heading text-gradient-silver text-3xl font-semibold text-center my-6'>Aire Bliss Promise</h1>
            <div className='w-120 mx-auto relative h-0.5 bg-linear-to-r from-black/70 via-yellow-500/50 to-black/70'>
                <div className='size-2 rotate-45 bg-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl shadow-sm shadow-yellow-500'></div>
            </div>
            <p className='uppercase text-xs text-gradient text-center mt-5 font-subheading tracking-wider'>
                Crafted with passion. Delivered with care.
            </p>
            <div className='w-full h-[30vh] border-2 border-yellow-500/30 rounded-xl mt-5 flex items-center justify-center bg-[#222]/40'>
                <img src="./brandValue.webp" loading='lazy' className='w-1/2 h-full object-cover' alt="brand" />
                <div className='w-3/10 h-full pl-10 py-10 border-r '>
                    <div className='size-full border-r-2 border-yellow-400/30 pr-10'>
                        <h1 className='font-heading text-gradient-silver text-xl font-semibold text-center'>More than a Fragrance,</h1>
                        <p className='pl-1.5 font-subheading text-gradient text-xl italic mt-1'>It's an Experience </p>
                        <p className='font-body text-white/60 mt-10 text-sm '>From the first spray to the lasting impression, Aire Bliss is designed to be a part of your most memorable moments.</p>
                    </div>
                </div>
                <div className='w-2/10 h-full p-10 center flex-col'>
                    <img src="./logo.png" className='size-25 object-cover z-1' alt="" />
                    <h1 className='font-stylish text-gradient text-3xl font-medium mt-2 mb-1 z-3'>Aire Bliss</h1>
                    <p className='text-white uppercase text-xs font-body text-center'>embrace the essence of luxury</p>
                </div>
            </div>
            <div className='w-full h-fit border mt-3 border-yellow-400/40 rounded-2xl relative py-8 center gap-5 px-5 bg-[#222]/40'>
                <div className='w-1/5 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    < CiDeliveryTruck className='size-14 text-yellow-500/70' />
                    <div className='text-white font-body pr-5'>
                        <h1 className='text-xs uppercase'>Free Shipping</h1>
                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>On all orders over ₹ 999</p>
                    </div>
                </div>
                <div className='w-1/5 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    <BsBox className='size-10 text-yellow-500/70 ' />
                    <div className='text-white pr-5 font-body '>
                        <h1 className='text-xs uppercase'>Easy Return</h1>
                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Hassle-free returns within 7 days</p>
                    </div>
                </div>
                <div className='w-1/5 h-full center gap-5 px-5 border-r-2  border-white/20'>
                    <RiCustomerService2Fill className='size-10 text-yellow-500/80' />
                    <div className='text-white pr-5 font-body '>
                        <h1 className='text-xs uppercase'>Customer Support</h1>
                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>24/7 dedicated support team</p>
                    </div>
                </div>
                <div className='w-1/5 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    <CiLock className='size-10 text-yellow-500/70' />
                    <div className='text-white pr-5 font-body '>
                        <h1 className='text-xs uppercase'>Secure Payment</h1>
                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>100% secure & trusted payment methods</p>
                    </div>
                </div>
                <div className='w-1/5 h-full text-white font-body'>
                    <h1 className='text-xs uppercase text-center'>Follow Us</h1>
                    <p className='w-full h-fit center gap-4 mt-2'>
                        <FaInstagram className='size-5 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                        <FaFacebookF className='size-4 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                        <FaTwitter className='size-5 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                        <FaPinterestP className='size-5 text-yellow-500/50 cursor-pointer hover:text-yellow-500' />
                    </p>
                </div>

            </div>
        </section>
    )
}

export default BrandValue