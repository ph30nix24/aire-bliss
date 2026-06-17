import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { bestproducts } from '../../../utils'
import { FaAward, FaMinus, FaPlus } from "react-icons/fa6";
import { BsBookmark, BsBox } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { IoIosLock } from "react-icons/io";
import { CiDeliveryTruck, CiLock, CiMail } from 'react-icons/ci';
import { RiCustomerService2Fill } from 'react-icons/ri';
import ProductCard from '../../../components/ProductCard';
import { VscWorkspaceTrusted } from 'react-icons/vsc';



const Cart = () => {
    return (
        <main className='bg-[#131313]'>
            <Navbar additional={`py-2! px-35! bg-[#131313]! border-none`} />

            <div className='w-310 mx-auto pt-27 pb-25 text-white'>
                <div className='size-full flex gap-10 relative'>
                    <div className="w-7/10 h-fit pr-10">

                        <div className='w-full flex justify-between items-end pb-5 border-b border-[#777]/20'>
                            <h1 className='font-subheading text-4xl uppercase font-semibold'>Your Shopping bag</h1>
                            <p className='font-body uppercase text-xs text-white/70 '>3 items in cart</p>
                        </div>

                        <div className='my-10 p-5 w-full h-fit bg-[#1C1B1B] rounded'>
                            <div className='flex justify-between pb-2'>
                                <p className='text-xs tracking-widest uppercase font-body text-yellow-400 font-semibold'>Free shipping Eligibilty</p>
                                <p className='text-xs tracking-widest font-body text-white/70 font-semibold'>Add &#x20B9;243.00 more for Free Shipping!</p>
                            </div>
                            <div className='w-full h-1 bg-white/20 rounded-full'>
                            </div>

                        </div>

                        <div className='w-full h-fit '>
                            {bestproducts.slice(0, 3).map((product, index) => (
                                <div className='w-full flex gap-5 h-50 mb-8 relative' key={index}>
                                    <img src={`./../../../../${product.img}`} className='w-40 h-50 object-cover' alt="" />
                                    <img src="./../../../../logo-2.png" className='absolute size-20 z-3 top-1/2 left-1/2 opacity-20 -translate-y-1/2' alt="" />
                                    <img src="./../../../../footer-1.webp" className='absolute size-30 z-3 top-1/2 right-0 opacity-50 -translate-y-1/2 -scale-x-100 object-cover' alt="" />

                                    <div className='w-[calc(100%-180px)] h-full flex flex-col justify-between relative z-5'>
                                        <div className='w-full h-fit flex justify-between items-start'>
                                            <div className=''>
                                                <h1 className='font-subheading capitalize text-3xl text-white/90 font-medium'>
                                                    {product.name}
                                                </h1>
                                                <p className='text-sm pt-1 text-white/70 font-body'>Size: 50ml</p>
                                            </div>
                                            <p className='text-yellow-400/90 font-body tracking-wider font-medium'>&#x20B9; {product.price}.00</p>
                                        </div>

                                        <div className='w-full h-fit flex justify-between items-center'>
                                            <div className='py-2 px-3 border border-[#777]/40 flex gap-3 items-center'>
                                                <FaMinus className='size-3 hover:text-yellow-400/90 cursor-pointer' />
                                                <p className='font-body text-white/80 px-4'>1</p>
                                                <FaPlus className='size-3 hover:text-yellow-400/90 cursor-pointer' />
                                            </div>

                                            <div className='center w-fit gap-5'>
                                                <div className='w-fit flex items-center gap-2 text-white/80 cursor-pointer hover:text-yellow-400/90 transition-smooth'>
                                                    <BsBookmark className='size-3 ' />
                                                    <p className='font-body text-xs uppercase font-medium tracking-widest'>Save for later</p>
                                                </div>
                                                <div className='w-fit flex items-center gap-2 text-red-400/80 cursor-pointer hover:text-red-500/90'>
                                                    <HiOutlineTrash className='size-3 ' />
                                                    <p className='font-body text-xs uppercase font-medium tracking-widest'>Remove</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='w-full pt-5'>
                            <h1 className='uppercase font-subheading tracking-wide text-3xl pb-5'>Complete the set</h1>
                            <div className='w-full flex gap-5'>
                                {bestproducts.slice(3, 6).map((product, index) => (
                                    <ProductCard product={product} width={`w-1/3`} />
                                ))}
                            </div>
                        </div>
                    </div>



                    <div className="w-3/10 h-fit relative">
                        <div className='w-full '>
                            <div className='w-full px-8 py-10 bg-[#1C1B1B] border border-[#777]/30'>
                                <h1 className='text-3xl font-subheading uppercase '>Order <br /> Summary</h1>

                                <div className='w-full pt-10 pb-8 border-b-2 border-[#777]/30'>
                                    <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider'>
                                        <p className='text-white/80'>Subtotal (3 items)</p>
                                        <span className=' tracking-widest'>&#x20B9; 1287.00</span>
                                    </div>
                                    <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider'>
                                        <p className='text-white/80'>Discount </p>
                                        <span className='text-yellow-400/80 tracking-widest'>- &#x20B9; 200.00</span>
                                    </div>
                                    <div className='flex w-full justify-between items-center font-light text-sm font-body tracking-wider'>
                                        <p className='text-white/80'>Shipping </p>
                                        <span className='text-yellow-400/80 tracking-widest uppercase'>free</span>
                                    </div>
                                </div>

                                <div className='w-full pt-5 pb-8 flex justify-between items-center'>
                                    <h3 className='text-sm uppercase tracking-widest font-body'>Total</h3>

                                    <div className='font-heading text-3xl text-yellow-400/90'>
                                        &#x20B9; 1087.00
                                    </div>
                                </div>

                                <button className='w-full py-4 bg-yellow-400/90 hover:bg-yellow-400 center gap-3 text-[#111] cursor-pointer transition-smooth'>
                                    <IoIosLock className='size-5' />
                                    <p className='font-body text-xs uppercase tracking-widest font-medium'>Proceed to checkout</p>
                                </button>
                                <button className='w-full py-4 text-yellow-400/90 center gap-3 bg-[#111]/50 hover:text-[#111] border hover:bg-yellow-400/90 mt-3 cursor-pointer transition-smooth'>
                                    <p className='font-body text-xs uppercase tracking-widest  font-medium'>Continue shopping</p>
                                </button>

                                <div className="w-full h-0.5 bg-[#777]/30 my-10"></div>

                                <div className='w-full '>
                                    <p className='text-xs uppercase font-body font-medium tracking-widest pb-3'>
                                        Have a coupon code ?
                                    </p>
                                    <form className='w-full h-fit'>
                                        <fieldset className='w-full flex h-10 '>
                                            <input type="text" className='w-full h-full border-2 border-[#777]/20 px-3 font-body font-extralight text-xs outline-none focus:border-yellow-400/70' placeholder='Enter Code' />
                                            <button className='text-white font-body text-xs uppercase w-fit h-full px-5 bg-[#777]/20 tracking-widest cursor-pointer hover:text-[#111] hover:bg-yellow-400 transition-smooth'>Apply</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div className='w-full h-fit py-5 mt-5 px-8 bg-[#111]'>
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
                        </div>
                    </div>
                </div>

            </div>
            <footer className='w-full h-fit! px-30 py-10 relative z-10 bg-[#222]/40'>
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
                                    <button className='text-xs uppercase font-body text-yellow-500/50 py-2 px-3 border border-yellow-400/50 rounded-r-md cursor-pointer hover:text-black hover:bg-yellow-500/50 transition-smooth'>Subscribe </button>
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
                <p className='text-center text-white/50 text-xs font-light tracking-wide font-body'>© 2026 Aire Bliss. All rights reserved. | Designed by Team Aire Bliss</p>
            </footer>
        </main>
    )
}

export default Cart