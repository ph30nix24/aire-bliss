import React, { useEffect, useState } from 'react'

import Navbar from '../../../components/Navbar';
import { CiCirclePlus } from 'react-icons/ci';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useUserData } from '../../users/hooks/useUserData';
import Loader from '../../../components/Loader';
import { GoPlus } from 'react-icons/go';
import AddressForm from '../../users/component/AddressForm';
import toast from 'react-hot-toast';

const OrderAddress = () => {

    const { addresses, addressLoading, handleGetAddress, handleDeleteAddress, setDeliveryAddress } = useUserData()
    const [isFormClick, setIsFormClick] = useState(false)


    useEffect(() => {
        // The condition goes safely inside the hook
        if (addresses.length === 0) {
            handleGetAddress();
        }
    }, [addresses.length]);

    const handleRemovebtn = async (addressId) => {
        try {
            const data = await handleDeleteAddress(addressId);
            if (!data.success) {
                toast.error(data.message);
                throw new Error(data.message);
            }
            toast.success(data.message);
        } catch (error) {
            toast.error('Failed to remove an Address. Please try again later.');
            console.error('Error removing an Address:', error);
        }
    }

    // const handleUseBtn = async (addressId) => {
    //     try 
    // }

    if (addressLoading) {
        return (
            <div className='w-full h-screen center bg-[#131313]'>
                <Loader />
            </div>
        )
    }

    if (addresses.length === 0) {
        return (
            <main className='bg-[#030303] max-lg:overflow-x-hidden'>
                {isFormClick && <AddressForm setIsFormClick={setIsFormClick} />}
                <div className='w-full h-screen center flex-col pb-30'>
                    <div className='size-125 relative'>
                        <img src="../../../../address/NAFG.webp" className='size-full' alt="" />
                        <div className="absolute size-full top-0 left-0 bg-radial from-transparent to-[#030303]"></div>
                    </div>
                    <h1 className='text-white/80 font-subheading italic text-3xl text-center'>Where Should We Send <br /> Your Orders?</h1>

                    <button className='w-fit bg-yellow-400 text-[#080808] text-[10px] md:text-xs uppercase tracking-[0.255em] font-body mt-10 lg:mt-10 px-10 py-3 hover:bg-yellow-400/90 cursor-pointer flex gap-3 items-center' onClick={() => setIsFormClick(true)}><GoPlus /><span className='text-[10px] '>Add Address</span></button>
                </div>
            </main>
        )
    }

    return (
        <main className='bg-[#131313] bg-[radial-gradient(circle_at_50%_0%,#212121_0%,transparent_70%)]'>
            {isFormClick && <AddressForm setIsFormClick={setIsFormClick} />}

            <div className='w-full h-fit center gap-2 lg:gap-5 pt-25 pb-10 lg:pb-20 max-lg:px-5'>
                <div className='w-fit flex gap-2 items-end text-yellow-300/80 pb-1'>
                    <p className='font-heading text-base tracking-widest max-lg:hidden'>01</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest text-center max-lg:text-sm'>cart</p>
                </div>
                <div className='w-5 lg:w-15 h-0.5 bg-yellow-300/80 rounded-full'></div>

                <div className='w-fit flex gap-2 items-end text-yellow-300/80'>
                    <p className='font-heading text-base tracking-widest max-lg:hidden'>02</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center border-b-2 pb-1 max-lg:text-sm'>Address</p>
                </div>

                <div className='w-5 lg:w-15 h-0.5 bg-linear-to-r from-yellow-300/80 to-yellow-200/10'></div>
                <div className='w-fit flex gap-2 items-end pb-1'>
                    <p className='font-heading text-base tracking-widest text-white/40 max-lg:hidden'>03</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center text-white/40 max-lg:text-sm'>Review</p>
                </div>

                <div className='w-5 lg:w-15 h-0.5 bg-yellow-200/10'></div>
                <div className='w-fit flex gap-2 items-end pb-1'>
                    <p className='font-heading text-base tracking-widest text-white/40 max-lg:hidden'>04</p>
                    <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center text-white/40 max-lg:text-sm'>payment</p>
                </div>

            </div>

            <div className='w-full h-fit '>
                <h1 className='text-center text-white/90 text-4xl max-lg:px-10 lg:text-6xl font-subheading italic capitalize '>Select a Delivery <br /> Address</h1>
                <p className='w-full lg:w-180 text-center text-[3.6vw] md:text-base mx-auto px-10 lg:text-lg font-body font-light mt-5 lg:mt-10 text-white/50 tracking-wider'>Choose an existing address or add a new one for delivery</p>

                <div className='mt-15 lg:mt-25 w-full lg:py-10 lg:px-30'>
                    <div className='w-full flex flex-wrap gap-10 justify-end max-lg:px-5'>
                        {addresses.map((address, index) => (
                            <div className={`w-9/10 lg:w-[48%] flex flex-col ${index % 2 === 0 ? 'border-l-2 items-start' : 'border-r-2 items-end'}  border-white/10 p-5 lg:p-10 text-white bg-[#131313]/50 backdrop-blur-sm group hover:border-yellow-300/80 transition-smooth max-lg:grow relative`}>
                                <h1 className='text-4xl lg:text-[40px] font-subheading italic group-hover:text-yellow-300/80 transition-smooth'>{address.addressType}</h1>

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
                                    <button className='uppercase text-xs font-body tracking-[0.255em] font-light py-1 cursor-pointer hover:border-b hover:text-yellow-400/90 border-yellow-400/90 transition-smooth text-white/60 group-hover:opacity-100 lg:opacity-0' onClick={() => handleRemovebtn(address._id)}>erase</button>
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
                        <a href="/user/cart">
                            <button className='w-fit flex gap-1 lg:gap-3 items-center font-body text-xs lg:text-sm tracking-wider group transition-smooth px-3 lg:px-8 rounded py-1 lg:py-3 cursor-pointer '>
                                <FaChevronLeft className='size-3 text-white transition-smooth group-hover:text-yellow-300/70' />
                                <span className='text-white transition-smooth group-hover:text-yellow-300/70'>Back to Cart</span>
                            </button>
                        </a>


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