import React, { useState } from 'react'
import { CiDeliveryTruck, CiLocationOn, CiLock } from 'react-icons/ci';
import { bestproducts } from '../../../utils';
import { FaArrowLeft, FaArrowRight, FaChevronDown } from 'react-icons/fa6';
import { HiOutlineTrash } from 'react-icons/hi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BsBox } from 'react-icons/bs';
import { IoIosLock } from 'react-icons/io';
import { LuTag } from 'react-icons/lu';

const OrderReview = () => {


    const address = {
        "_id": "addr_001",
        "title": "The Penthouse",
        "addressType": "Home",
        "isDefault": true,
        "fullName": "Arjun Sharma",
        "phoneNumber": "+91 98765 43210",
        "addressLine1": "123, Green Villa Apartments",
        "addressLine2": "MG Road, Sector 15",
        "landmark": "Near City Mall",
        "city": "Mumbai",
        "state": "Maharashtra",
        "postalCode": "400001",
        "country": "India"
    }

    return (
        <main className='bg-[#131313] bg-[radial-gradient(circle_at_50%_0%,#212121_0%,transparent_70%)]'>

            <div className='w-full h-fit center gap-2 lg:gap-5 pt-25 pb-10 lg:pb-20 max-lg:px-5'>
                <div className='w-fit flex gap-2 items-end text-yellow-300/80 pb-1'>
                    <p className='font-heading text-base tracking-widest max-lg:hidden'>01</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest text-center max-md:text-sm'>cart</p>
                </div>
                <div className='w-5 md:w-10 lg:w-15 h-0.5 bg-yellow-300/80 rounded-full'></div>

                <div className='w-fit flex gap-2 items-end text-yellow-300/80 pb-1'>
                    <p className='font-heading text-base tracking-widest max-lg:hidden'>02</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center max-md:text-sm'>Address</p>
                </div>

                <div className='w-5 md:w-10 lg:w-15 h-0.5 bg-yellow-300/80 rounded-full'></div>
                <div className='w-fit flex gap-2 items-end text-yellow-300/80'>
                    <p className='font-heading text-base tracking-widest max-lg:hidden'>03</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest text-center max-md:text-sm border-b-2 pb-1'>Review</p>
                </div>

                <div className='w-5 md:w-10 lg:w-15 h-0.5 bg-linear-to-r from-yellow-300/80 to-yellow-200/10'></div>
                <div className='w-fit flex gap-2 items-end pb-1'>
                    <p className='font-heading text-base tracking-widest text-white/40 max-lg:hidden'>04</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center text-white/40 max-md:text-sm'>payment</p>
                </div>

            </div>

            <div className='w-full h-fit px-5 lg:px-35 pb-20'>
                <p className='uppercase text-center text-primary text-[10px] lg:text-xs font-jet tracking-[0.375em] font-bold'>The final correction</p>

                <h1 className='text-center text-white/90 text-5xl max-lg:px-10 lg:text-7xl font-subheading italic capitalize mt-5'>Review Your <br /> Order</h1>

                <p className='w-full lg:w-180 text-center mx-auto text-base px-5 lg:text-lg font-body font-light mt-10 text-white/50 tracking-wider md:px-40'>
                    Please review your selections and destination address details before proceeding to payment.
                </p>

                <div className='w-full gap-20 flex py-20 max-lg:flex-col md:px-10'>


                    <div className='w-full lg:w-7/10'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='font-body uppercase tracking-[0.355em] text-[10px] lg:text-xs text-yellow-300/90'>delivery Address</p>
                            <button className='font-body uppercase tracking-[0.255em] text-[10px] text-white/60'>modify</button>
                        </div>
                        <div className='w-full my-5 lg:mb-10 h-0.5 bg-linear-to-r from-transparent via-45% to-100% via-yellow-300/10 to-transparent'></div>


                        {/* address */}

                        <div className='w-full py-5 px-5 lg:p-10  flex items-start gap-5 bg-[#181818]/50 backdrop-blur-sm border border-[#777]/10 hover:bg-[#131313]/70'>
                            <CiLocationOn className='text-yellow-300/70 size-8 pt-2' />
                            <div>
                                <h2 className='font-body font-light uppercase pb-4 text-sm tracking-[0.175em] text-white/80'>{address.fullName}</h2>
                                <address className='text-sm text-white/40 font-body not-italic font-light tracking-wider pb-1'>{address.addressLine1} {address.addressLine2}</address>

                                <address className='text-sm text-white/40 font-body not-italic font-light tracking-wider pb-1'>{address.landmark}, {address.city} - {address.postalCode}</address>

                                <address className='text-sm text-white/40 font-body not-italic font-light tracking-wider pb-1'>{address.state + ", " + address.country} </address>

                                <p className='pt-10 text-yellow-300/60 font-body tracking-wider text-sm'>{address.phoneNumber}</p>
                            </div>
                        </div>


                        <div className='w-full flex items-center justify-between mt-20'>
                            <p className='font-body uppercase tracking-[0.355em] text-[10px] text-xs text-yellow-300/90'>Items Selected (3)</p>
                            <button className='font-body uppercase tracking-[0.255em] text-[10px] text-white/60'>edit</button>
                        </div>
                        <div className='w-full my-5 lg:mb-10 h-0.5 bg-linear-to-r from-transparent via-45% to-100% via-yellow-300/10 to-transparent'></div>

                        {/* items */}

                        <div className='w-full lg:mt-10'>
                            {bestproducts.slice(2, 5).map((product, index) => (
                                <div className='w-full p-5 flex gap-3 lg:gap-5 bg-[#181818]/50 backdrop-blur-sm border hover:bg-[#131313]/50 border-[#777]/10 mt-5 lg:mt-10'>
                                    <img src={`./../../../.${product.img}`} className='size-30 max-md:h-40 lg:size-40 max-md:object-cover' alt="" />

                                    <div className='w-full flex-col justify-between'>
                                        <div className='w-full flex justify-between lg:mt-4 max-md:flex-col'>
                                            <div className=''>
                                                <h1 className='text-2xl lg:text-3xl italic text-white/80 font-subheading capitalize tracking-wider'>{product.name}</h1>
                                                <p className='font-body text-sm capitalize mt-0.5 text-white/50 lg:mt-2'>50ml</p>
                                            </div>
                                            <span className='font-body text-yellow-300/80 tracking-widest text-sm max-md:mt-12 max-md:mb-1'>&#x20B9;{product.price}</span>
                                        </div>
                                        <div className='w-full flex justify-between items-center md:mt-8'>
                                            <div className='w-fit flex gap-2 items-center text-white/80 px-4 py-1.5 border border-white/20 cursor-pointer'><p className='text-[10px] uppercase pt-0.5 tracking-[0.175em]'>qty</p> <span className='text-sm'>1</span> <FaChevronDown className='size-2' /></div>

                                            <HiOutlineTrash className='text-white/30 size-5 cursor-pointer hover:text-red-500/70' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className='w-full lg:w-3/10'>
                        <div className='w-full '>
                            <div className='w-full px-8 py-10  border border-[#777]/30 bg-[#131313]/50 backdrop-blur-sm text-white/80'>
                                <h1 className='text-3xl font-subheading uppercase  text-white/80 italic'>Order <br /> Summary</h1>

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


                                <p className='w-full py-4 bg-yellow-300/80 font-extralight center gap-3 text-[#111]'>
                                    <LuTag className='size-4' />
                                    <p className='font-body text-[10px] uppercase tracking-widest font-medium'>You Preserved &#x20B9; 200.00</p>
                                </p>


                            </div>

                            <div className='w-full px-8 py-10  border border-[#777]/30 bg-[#131313]/50 backdrop-blur-sm text-white/80 mt-5'>
                                <div className='w-full '>
                                    <div className='w-full flex gap-3 items-center pb-5'>
                                        <LuTag />
                                        <div className=''>
                                            <p className='text-xs uppercase font-body font-medium tracking-widest pb-1'>
                                                Have a coupon code ?
                                            </p>
                                            <p className='text-xs font-body font-extralight tracking-widest italic'>Enter below to claim advantage. </p>
                                        </div>
                                    </div>
                                    <form className='w-full h-fit'>
                                        <fieldset className='w-full flex h-10 '>
                                            <input type="text" className='w-full h-full border-2 border-[#777]/20 px-3 font-body font-extralight text-xs outline-none focus:border-yellow-400/70' placeholder='Enter Code' />
                                            <button className='text-white font-body text-xs uppercase w-fit h-full px-5 bg-[#777]/20 tracking-widest cursor-pointer hover:text-[#111] hover:bg-yellow-400 transition-smooth'>Apply</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div className='w-full h-fit py-5 mt-5 mb-5'>
                                <div className='w-full h-full flex items-center gap-2  py-3'>
                                    < CiDeliveryTruck className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                                    <div className='text-white font-body pr-5'>
                                        <h1 className='text-xs uppercase text-white/70 tracking-[0.175em]'>Anticipated Arrival</h1>
                                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>June 25- 1 August 2026</p>
                                    </div>
                                </div>
                                <div className='w-full h-full flex items-center gap-2 py-3'>
                                    <BsBox className='size-9  text-yellow-500/70 p-2.5 rounded-full bg-[#222]/40 center' />
                                    <div className='text-white pr-5 font-body '>
                                        <h1 className='text-xs uppercase text-white/70 tracking-[0.175em]'>Easy Return</h1>
                                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Hassle-free returns within 7 days</p>
                                    </div>
                                </div>
                                <div className='w-full h-full flex items-center gap-2 py-3'>
                                    <CiLock className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                                    <div className='text-white pr-5 font-body '>
                                        <h1 className='text-xs uppercase text-white/70 tracking-[0.175em]'>Secure Payment</h1>
                                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>100% secure & trusted payment methods</p>
                                    </div>
                                </div>
                                <div className='w-full h-full flex items-center gap-2  py-3'>
                                    <RiCustomerService2Fill className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                                    <div className='text-white pr-5 font-body '>
                                        <h1 className='text-xs uppercase text-white/70 tracking-[0.175em]'>Customer Support</h1>
                                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>24/7 dedicated support team</p>
                                    </div>
                                </div>

                            </div>

                            <a href="/checkout/payment">
                                <button className='w-full py-4 bg-yellow-400/90 hover:bg-yellow-400 center gap-3 text-[#111] cursor-pointer transition-smooth'>
                                    <p className='font-body text-xs uppercase tracking-widest font-medium'>Proceed to Payment</p>
                                    <FaArrowRight className='size-3' />
                                </button>
                            </a>
                            <a href="/checkout/address">
                                <button className='w-full center gap-3 text-white/80 hover:text-yellow-300/80 cursor-pointer transition-smooth mt-4'>
                                    <FaArrowLeft className='size-3' />
                                    <p className='font-body text-xs uppercase tracking-[0.175em] font-extralight '>Return to Address</p>

                                </button>
                            </a>
                        </div>
                    </div>


                </div>
            </div>


            
        </main>
    )
}

export default OrderReview