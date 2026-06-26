import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use';
import Navbar from '../../../components/Navbar';
import { CiCirclePlus } from 'react-icons/ci';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const OrderAddress = () => {

    const { y: currentY } = useWindowScroll();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsScrolled(currentY > 100)
    }, [currentY])

    const addresses = [
        {
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
        },
        {
            "_id": "addr_002",
            "title": "The Studio",
            "addressType": "Work",
            "isDefault": false,
            "fullName": "Arjun Sharma",
            "phoneNumber": "+91 98765 43210",
            "addressLine1": "Infinity Corporate Park",
            "addressLine2": "Tower B, 5th Floor, Link Road",
            "landmark": "Andheri West",
            "city": "Mumbai",
            "state": "Maharashtra",
            "postalCode": "400053",
            "country": "India"
        },
        {
            "_id": "addr_003",
            "title": "The Summer Estate",
            "addressType": "Other",
            "isDefault": false,
            "fullName": "Arjun Sharma",
            "phoneNumber": "+91 98765 43210",
            "addressLine1": "Flat 8, Shanti Residency",
            "addressLine2": "12th Cross",
            "landmark": "Jayanagar 4th Block",
            "city": "Bengaluru",
            "state": "Karnataka",
            "postalCode": "560041",
            "country": "India"
        }
    ]

    return (
        <main className='bg-[#131313] bg-[radial-gradient(circle_at_50%_0%,#212121_0%,transparent_70%)]'>
            <Navbar additional={`lg:py-2! lg:px-35! bg-transparent! border-none ${isScrolled && 'backdrop-blur-md!'}`} />

            <div className='w-full h-fit center gap-2 lg:gap-5 pt-25 pb-10 lg:pb-20 max-lg:px-5'>
                <div className='w-fit flex gap-2 items-end text-yellow-300/80'>
                    <p className='font-heading text-base tracking-widest max-lg:hidden'>01</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest text-center max-lg:text-sm'>cart</p>
                </div>
                <div className='w-5 lg:w-15 h-0.5 bg-yellow-300/80 rounded-full'></div>

                <div className='w-fit flex gap-2 items-end text-yellow-300/80'>
                    <p className='font-heading text-base tracking-widest max-lg:hidden'>02</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center border-b-2 pb-1 max-lg:text-sm'>Address</p>
                </div>

                <div className='w-5 lg:w-15 h-0.5 bg-linear-to-r from-yellow-300/80 to-yellow-200/10'></div>
                <div className='w-fit flex gap-2 items-end'>
                    <p className='font-heading text-base tracking-widest text-white/40 max-lg:hidden'>03</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center text-white/40 max-lg:text-sm'>Review</p>
                </div>

                <div className='w-5 lg:w-15 h-0.5 bg-yellow-200/10'></div>
                <div className='w-fit flex gap-2 items-end'>
                    <p className='font-heading text-base tracking-widest text-white/40 max-lg:hidden'>04</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center text-white/40 max-lg:text-sm'>payment</p>
                </div>

            </div>

            <div className='w-full h-fit '>
                <h1 className='text-center text-white/90 text-5xl max-lg:px-10 lg:text-6xl font-subheading italic capitalize '>Select a Delivery <br /> Address</h1>
                <p className='w-full lg:w-180 text-center text-[3.6vw] md:text-base mx-auto px-10 lg:text-lg font-body font-light mt-5 lg:mt-10 text-white/50 tracking-wider'>Choose an existing address or add a new one for delivery</p>

                <div className='mt-15 lg:mt-25 w-full lg:py-10 lg:px-30'>
                    <div className='w-full flex flex-wrap gap-10 justify-end max-lg:px-5'>
                        {addresses.map((address, index) => (
                            <div className={`w-9/10 lg:w-[48%] flex flex-col ${index % 2 === 0 ? 'border-l-2 items-start' : 'border-r-2 items-end'}  border-white/10 p-5 lg:p-10 text-white bg-[#131313]/50 backdrop-blur-sm group hover:border-yellow-300/80 transition-smooth max-lg:grow relative`}>
                                <h1 className='text-4xl lg:text-[40px] font-subheading italic group-hover:text-yellow-300/80 transition-smooth'>{address.title}</h1>

                                <div className='w-15 h-px my-3 bg-white/20'></div>

                                <p className='text-xs lg:text-sm uppercase font-body tracking-[0.175em] font-medium text-white/90 mt-3 pb-5'>{address.fullName}</p>

                                <address className={`py-0.5 leading-relaxed font-body font-light text-[#d6c9ac] not-italic text-sm lg:text-[15px] tracking-wider w-80 ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{address.addressLine1} {address.addressLine2} {address.landmark}
                                </address>


                                <address className={`py-0.5 leading-relaxed font-body font-light text-[#d6c9ac] not-italic text-sm lg:text-[15px] tracking-wider w-80 ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{address.city},  {address.state} - {address.postalCode}
                                </address>

                                <address className={`py-0.5 leading-relaxed font-body font-light text-[#d6c9ac] not-italic text-[15px] tracking-wider w-80 ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{address.country}
                                </address>

                                <p className='py-5 font-body font-light tracking-wide text-yellow-400/50'>{address.phoneNumber}</p>

                                <div className='w-fit flex gap-5 items-center mt-10 lg:mt-15'>
                                    <button className='uppercase text-xs font-body tracking-[0.255em] font-light py-1 cursor-pointer hover:border-b hover:text-yellow-400/90 border-yellow-400/90 transition-smooth  group-hover:opacity-100 lg:opacity-0'>Use</button>
                                    <button className='uppercase text-xs font-body tracking-[0.255em] font-light py-1 cursor-pointer hover:border-b hover:text-yellow-400/90 border-yellow-400/90 transition-smooth text-white/60 group-hover:opacity-100 lg:opacity-0'>erase</button>
                                </div>

                                <p className={`absolute top-0 translate-y-1/2 -translate-x-1/10 right-0 ${!address.isDefault && 'hidden'} px-5 py-2 text-[8px] font-body font-extralight uppercase tracking-widest text-yellow-300 border-2 bg-yellow-300/10 border-yellow-300/30`}>default address</p>

                            </div>
                        ))}

                        <div className='max-lg:w-full lg:w-[48%] border-2 center border-dashed border-[#777]/20 flex-col cursor-pointer group hover:border-yellow-300/80 transition-smooth p-10'>
                            <CiCirclePlus className='text-white/40 size-18 group-hover:text-yellow-300/80 transition-smooth' />
                            <h3 className='font-body text-white/60 text-lg font-medium my-3 tracking-normal group-hover:text-yellow-300/80'>Add new address</h3>
                            <p className='font-body text-base font-extralight text-white/60 tracking-wider transition-smooth group-hover:text-yellow-300/80'>
                                Enter a new delivery address
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex justify-between mt-30 pt-10 border-t-2 border-[#777]/20 px-5 lg:px-10 max-lg:pb-10'>
                        <button className='w-fit flex gap-1 lg:gap-3 items-center font-body text-xs lg:text-sm tracking-wider group transition-smooth px-3 lg:px-8 rounded py-1 lg:py-3 cursor-pointer '>
                            <FaChevronLeft className='size-3 text-white transition-smooth group-hover:text-yellow-300/70' />
                            <span className='text-white transition-smooth group-hover:text-yellow-300/70'>Back to Cart</span>
                        </button>


                        <a href="/checkout/review">
                            <button className='w-fit flex gap-3 items-center font-body text-xs tracking-[0.155em] group bg-yellow-300/80 hover:bg-yellow-300 transition-smooth px-8 rounded py-3 cursor-pointer uppercase'>
                                <span className='transition-smooth text-[#131313]'>Continue to Review</span>
                                <FaChevronRight className='size-3 transition-smooth text-[#131313]' />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OrderAddress