import React, { useState } from 'react'
import { MdCheckBox, MdEditLocationAlt, MdOutlineLocalPhone, MdWork } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { TiUserOutline } from 'react-icons/ti'
import { FaCity, FaHouse, FaLandmarkFlag, FaStreetView } from 'react-icons/fa6';
import { FaMap } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io"
import { BsFillPinMapFill } from "react-icons/bs";

const AddressForm = ({ setAddAddress }) => {

    const [addressForm, setAddressForm] = useState({
        name: "",
        phoneNo: "",
        type: "home",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        city: "",
        state: "",
        pincode: "",
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

    const handleButton = (e) => {

    }

    const handleChange = (e) => {
        console.log(2)
    }
    return (
        <div className='absolute size-full top-0 left-0 bg-black/10 backdrop-blur-md center text-white z-51'>
            <div className='w-200 h-fit px-10 py-10 bg-[#0B0C0C] rounded shadow shadow-yellow-400/10'>
                {/* heading */}
                <div className='w-full flex justify-between items-center pb-4 border-b border-[#777]/20'>
                    <div className='flex items-center w-fit gap-5'>
                        <div className=' p-3 rounded-full border-2 border-yellow-400/60'>
                            <MdEditLocationAlt className='text-yellow-400/60 size-7' />
                        </div>
                        <div className=''>
                            <h1 className='font-heading text-xl'>Add New Address</h1>
                            <p className='text-sm font-body font-extralight pt-1 text-white/70'>
                                Enter your address details for seamless delivery
                            </p>
                        </div>
                    </div>
                    <div className='cursor-pointer' onClick={() => setAddAddress(false)}>
                        <RxCross2 className='text-yellow-400/80 size-6' />
                    </div>
                </div>

                <form className='w-full'>

                    {/* full name, phone no */}
                    <div className='w-full flex justify-between gap-5 pt-4'>
                        <div className="w-1/2">
                            <p className='text-sm font-body font-light capitalize  pb-2'>full name </p>
                            <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                <label htmlFor='full-name'><TiUserOutline className='text-yellow-400/70 size-4' /></label>
                                <input type="text" name="name" required id="full-name" className='w-full py-2 font-extralight text-sm px-2 outline-none font-body' placeholder='Enter Full Name' onChange={handleChange} />
                            </fieldset>
                        </div>
                        <div className="w-1/2">
                            <p className='text-sm font-body font-light capitalize  pb-2'>Phone Number </p>
                            <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                <label htmlFor='phone-no'><MdOutlineLocalPhone className='text-yellow-400/70 size-4' /></label>
                                <input type="text" maxLength={10} name="phoneNo" required id="phone-no" placeholder='Enter Moblie Number ' className='w-full py-2 font-extralight text-sm px-2 outline-none font-body' onChange={handleChange} />
                            </fieldset>
                        </div>

                    </div>

                    {/* house no. building name */}
                    <div className='w-full flex justify-between gap-5 pt-4'>
                        <div className="w-full">
                            <p className='text-sm font-body font-light capitalize  pb-2'>House No, Building Name </p>
                            <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                <label htmlFor='house-no'><FaHouse className='text-yellow-400/70 size-4' /></label>
                                <input type="text" name="addressLine1" required id="house-no" className='w-full py-3 font-extralight px-2 outline-none font-body text-xs' placeholder='E.g. 123, Green Villa Apartments' onChange={handleChange} />
                            </fieldset>
                        </div>

                    </div>

                    {/* Area, street, sector */}
                    <div className='w-full flex justify-between gap-5 pt-4'>
                        <div className="w-full">
                            <p className='text-sm font-body font-light capitalize  pb-2'>Area, Street, Sector</p>
                            <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                <label htmlFor='sector'><FaStreetView className='text-yellow-400/70 size-4' /></label>
                                <input type="text" name="addressLine2" required id="sector" className='w-full py-3 font-extralight text-xs font-body px-2 outline-none' placeholder='E.g. MG Road, Sector 16' onChange={handleChange} />
                            </fieldset>
                        </div>

                    </div>

                    {/* landmark */}
                    <div className='w-full flex justify-between gap-5 pt-4'>
                        <div className="w-full">
                            <p className='text-sm font-body font-light capitalize  pb-2'>Landmark (optional) </p>
                            <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                <label htmlFor='landmark'><FaLandmarkFlag className='text-yellow-400/70 size-4' /></label>
                                <input type="text" name="landmark" id="landmark" className='w-full py-3 font-extralight text-xs px-2 outline-none font-body' placeholder='E.g. Near City Mall, Opposite Metro Station' onChange={handleChange} />
                            </fieldset>
                        </div>

                    </div>

                    {/* city, state, pincode */}
                    <div className='w-full flex justify-between gap-5 pt-4'>
                        <div className="w-1/3">
                            <p className='text-sm font-body font-light capitalize  pb-2'>City </p>
                            <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                <label htmlFor='city'><FaCity className='text-yellow-400/70 size-4' /></label>
                                <input type="text" name="city" id="city" className='w-full py-3 font-extralight text-xs px-2 outline-none font-body' placeholder='Enter City' onChange={handleChange} required />
                            </fieldset>
                        </div>
                        <div className="w-1/3">
                            <p className='text-sm font-body font-light capitalize  pb-2'>State </p>
                            <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                <label htmlFor='state'><FaMap className='text-yellow-400/70 size-4' /></label>
                                <input type="text" name="state" id="state" className='w-full py-3 font-extralight text-xs px-2 outline-none font-body' placeholder='Enter State' onChange={handleChange} required />
                            </fieldset>
                        </div>
                        <div className="w-1/3">
                            <p className='text-sm font-body font-light capitalize  pb-2'>Pincode </p>
                            <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-3'>
                                <label htmlFor='pincode'><BsFillPinMapFill className='text-yellow-400/70 size-4' /></label>
                                <input type="text" minLength={6} maxLength={6} name="pincode" id="pincode" className='w-full py-3 font-extralight text-xs px-2 outline-none font-body' placeholder='Enter Pincode' onChange={handleChange} required />
                            </fieldset>
                        </div>

                    </div>


                    {/* type of address */}
                    <div className='w-full pt-4'>
                        <div className=''>
                            <p className='text-sm font-body font-light capitalize  pb-2'>Address Type </p>
                            <div className='flex justify-between gap-5'>

                                {types.map((type, index) => (
                                    <button className={`w-1/3 flex gap-2 items-center justify-center font-body font-extralight text-xs uppercase py-2 border rounded cursor-pointer ${addressForm.type === type.name ? "text-yellow-400/70 border-yellow-400/40" : "text-white/70 border-[#777]/20"}`} type='button' key={index} onClick={handleButton}><type.icon className='text-yellow-400/70' /> <span>{type.name}</span></button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex items-center gap-4 mt-8'>
                        <div className='size-4 rounded border-yellow-400/30 border-2'></div>
                        <div className='font-body'>
                            <h2 className='text-sm tracking-wide'>Set as default Address</h2>
                            <p className='text-xs font-extralight tracking-wide'>This address will be used by default for all orders.</p>
                        </div>
                    </div>

                    <div className='w-full mt-4 '>
                        <button className='w-full center font-body font-light tracking-wider text-sm bg-yellow-400/60 text-white py-2 rounded cursor-pointer gap-3 hover:bg-yellow-400'>
                            <MdCheckBox className='size-4' />
                            <span className='uppercase'>
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
    )
}

export default AddressForm