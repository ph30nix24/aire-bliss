import React, { useState } from 'react'
import { MdCheckBox, MdEditLocationAlt, MdOutlineLocalPhone, MdWork } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { TiUserOutline } from 'react-icons/ti'
import { FaCity, FaHouse, FaLandmarkFlag, FaStreetView } from 'react-icons/fa6';
import { FaMap } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io"
import { BsFillPinMapFill } from "react-icons/bs";
import { useUserData } from '../hooks/useUserData';
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast';

const AddressForm = ({ setIsFormClick }) => {

    const { handleAddAddress } = useUserData();
    const navigate = useNavigate();


    const [addressForm, setAddressForm] = useState({
        name: "",
        phoneNo: "",
        alternatePhoneNo: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        city: "",
        state: "",
        pincode: "",
        addressType: "home",
        isDefault: false
    })

    const types = [
        {
            name: "home",
            icon: FaHouse
        },
        {
            name: "work",
            icon: MdWork
        },
        {
            name: "other",
            icon: IoMdPricetag
        }
    ]

    const handleIsDefault = () => {
        setAddressForm(prev => ({ ...prev, isDefault: !prev.isDefault }))
    }

    const handleButton = (value) => {
        setAddressForm(prev => ({ ...prev, addressType: value }))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddressForm(prev => ({ ...prev, [name]: value }));
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const data =  await handleAddAddress(addressForm);
            if (!data.success) {
                toast.error(data.message);
                throw new Error(data.message);
            }
            toast.success(data.message)
        } catch (error) {
            toast.error('Failed to Add item in Cart. Please try again later.');
            console.error('Error adding item in cart:', error);
        }
        navigate('/user/addresses')
    }

    return (
        <div className='absolute size-full top-0 left-0 bg-black/10 backdrop-blur-md text-white z-51'>
            <div className='w-full h-full lg:h-screen center '>
                <div className='w-9/10 lg:w-200 h-fit p-5 lg:p-10 lg:pb-5 bg-[#0B0C0C] rounded shadow shadow-yellow-400/10'>
                    {/* heading */}
                    <div className='w-full flex justify-between items-center pb-3 border-b border-[#777]/20'>
                        <div className='flex items-center w-fit gap-5'>
                            <div className=' p-2 rounded-full border-2 border-yellow-400/60'>
                                <MdEditLocationAlt className='text-yellow-400/60 size-4 lg:size-5' />
                            </div>
                            <div className=''>
                                <h1 className='font-heading text-[4.5vw] lg:text-lg'>Add New Address</h1>
                                <p className='text-xs lg:text-sm font-body font-extralight lg:pt-0.5 text-white/70'>
                                    Enter your address details for seamless delivery
                                </p>
                            </div>
                        </div>
                        <div className='cursor-pointer' onClick={() => setIsFormClick(false)}>
                            <RxCross2 className='text-yellow-400/80 size-6' />
                        </div>
                    </div>

                    <form className='w-full' onSubmit={handleFormSubmit}>

                        {/* full name, phone no */}
                        <div className='w-full flex justify-between gap-2 lg:gap-5 pt-4'>
                            <div className="w-1/2">
                                <p className='text-xs lg:text-sm font-body font-light capitalize  pb-2'>full name </p>
                                <fieldset className='border px-1.5 lg:px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                    <label htmlFor='full-name'><TiUserOutline className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" name="name" required id="full-name" className='w-full py-2 font-extralight text-xs lg:text-sm px-2 outline-none font-body' placeholder='Enter Full Name' onChange={handleInputChange} />
                                </fieldset>
                            </div>
                            <div className="w-1/2">
                                <p className='text-xs lg:text-sm font-body font-light capitalize  pb-2'>Phone Number </p>
                                <fieldset className='border px-1.5 lg:px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                    <label htmlFor='phone-no'><MdOutlineLocalPhone className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" maxLength={10} name="phoneNo" required id="phone-no" placeholder='Enter Moblie Number ' className='w-full py-2 font-extralight text-xs lg:text-sm px-2 outline-none font-body' onChange={handleInputChange} />
                                </fieldset>
                            </div>

                        </div>
                        <div className="w-full mt-2">
                            <p className='text-xs lg:text-sm font-body font-light capitalize  pb-2'>Alternate Phone Number </p>
                            <fieldset className='border px-1.5 lg:px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                <label htmlFor='phone-no'><MdOutlineLocalPhone className='text-yellow-400/70 size-4' /></label>
                                <input type="text" maxLength={10} name="alternatePhoneNo" required id="phone-no" placeholder='Enter Alternate Moblie Number ' className='w-full py-2 font-extralight text-xs lg:text-sm px-2 outline-none font-body' onChange={handleInputChange} />
                            </fieldset>
                        </div>

                        {/* house no. building name */}
                        <div className='w-full flex justify-between gap-2 lg:gap-5 pt-3 lg:pt-2'>
                            <div className="w-full">
                                <p className='text-xs lg:text-sm font-body font-light capitalize pb-2'>House No, Building Name </p>
                                <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                    <label htmlFor='house-no'><FaHouse className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" name="addressLine1" required id="house-no" className='w-full py-2 lg:py-3 font-extralight px-2 outline-none font-body text-xs' placeholder='E.g. 123, Green Villa Apartments' onChange={handleInputChange} />
                                </fieldset>
                            </div>

                        </div>

                        {/* Area, street, sector */}
                        <div className='w-full flex justify-between gap-2 lg:gap-5 pt-3 lg:pt-2'>
                            <div className="w-full">
                                <p className='text-xs lg:text-sm font-body font-light capitalize  pb-2'>Area, Street, Sector</p>
                                <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                    <label htmlFor='sector'><FaStreetView className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" name="addressLine2" required id="sector" className='w-full py-2 lg:py-3 font-extralight text-xs font-body px-2 outline-none' placeholder='E.g. MG Road, Sector 16' onChange={handleInputChange} />
                                </fieldset>
                            </div>

                        </div>

                        {/* landmark */}
                        <div className='w-full flex justify-between gap-2 lg:gap-5 pt-3 lg:pt-2'>
                            <div className="w-full">
                                <p className='text-xs lg:text-sm font-body font-light capitalize  pb-2'>Landmark (optional) </p>
                                <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                    <label htmlFor='landmark'><FaLandmarkFlag className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" name="landmark" id="landmark" className='w-full py-2.5 lg:py-3 font-extralight text-xs px-2 outline-none font-body' placeholder='E.g. Near City Mall, Opposite Metro Station' onChange={handleInputChange} />
                                </fieldset>
                            </div>

                        </div>

                        {/* city, state, pincode */}
                        <div className='w-full flex justify-between gap-2 lg:gap-5 pt-4 max-lg:flex-wra2'>
                            <div className="w-[48%] lg:w-1/3">
                                <p className='text-sm font-body font-light capitalize  pb-2'>City </p>
                                <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                    <label htmlFor='city'><FaCity className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" name="city" id="city" className='w-full py-3 font-extralight text-xs px-2 outline-none font-body' placeholder='Enter City' onChange={handleInputChange} required />
                                </fieldset>
                            </div>
                            <div className="w-[48%] lg:w-1/3">
                                <p className='text-sm font-body font-light capitalize  pb-2'>State </p>
                                <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                    <label htmlFor='state'><FaMap className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" name="state" id="state" className='w-full py-3 font-extralight text-xs px-2 outline-none font-body' placeholder='Enter State' onChange={handleInputChange} required />
                                </fieldset>
                            </div>
                            <div className="w-1/2 lg:w-1/3 max-lg:grow">
                                <p className='text-sm font-body font-light capitalize  pb-2'>Pincode </p>
                                <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                    <label htmlFor='pincode'><BsFillPinMapFill className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" minLength={6} maxLength={6} name="pincode" id="pincode" className='w-full py-3 font-extralight text-xs px-2 outline-none font-body' placeholder='Enter Pincode' onChange={handleInputChange} required />
                                </fieldset>
                            </div>

                        </div>


                        {/* type of address */}
                        <div className='w-full pt-2'>
                            <div className=''>
                                <p className='text-sm font-body font-light capitalize  pb-2'>Address Type </p>
                                <div className='flex justify-between gap-2 lg:gap-5'>

                                    {types.map((type, index) => (
                                        <div className={`w-1/3 flex gap-2 items-center justify-center font-body font-extralight text-xs uppercase py-2 border rounded cursor-pointer ${addressForm.addressType === type.name ? "text-yellow-400/70 border-yellow-400/40" : "text-white/70 border-[#777]/20"}`} key={index} onClick={() => handleButton(type.name)}><type.icon className='text-yellow-400/70' /> <span>{type.name}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex items-center gap-4 mt-10'>
                            <div className={`size-4 rounded border-yellow-400/30 cursor-pointer border-2 ${addressForm.isDefault && 'bg-yellow-400'}`} onClick={() => handleIsDefault()}></div>
                            <div className='font-body'>
                                <h2 className='text-sm tracking-wide'>Set as default Address</h2>
                                <p className='text-xs font-extralight tracking-wide'>This address will be used by default for all orders.</p>
                            </div>
                        </div>

                        <div className='w-full mt-2 '>
                            <button className='w-full center font-body font-light text-xs lg:text-[10px] tracking-[0.175rem] bg-yellow-400/90 text-white py-2 rounded cursor-pointer gap-3 hover:bg-yellow-400'>
                                <MdCheckBox className='size-4' />
                                <span className='lg:uppercase'>
                                    Save Address
                                </span>
                            </button>
                            <button className='w-full mt-1 center font-body font-light tracking-wider text-xs text-white py-2 rounded cursor-pointer gap-3 hover:text-yellow-400/80'>
                                <span className='uppercase'>
                                    Cancel
                                </span>
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddressForm