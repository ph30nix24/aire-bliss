import React, { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { MdCalendarMonth, MdCheckBox, MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md'
import { TiUserOutline } from 'react-icons/ti'
import Dropdown from '../../admin/components/DropDown';
import { LuUserRoundCheck } from "react-icons/lu";
import { IoIosLock } from 'react-icons/io';



const InfoForm = ({ setEditInfo }) => {

    const [personalInfoForm, setPersonalInfoForm] = useState({
        gender: ""
    })
    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Unisex', value: 'unisex' },
    ];

    const handleButton = (e) => {

    }

    const handleDropdownChange = (name, value) => {
        setPersonalInfoForm(prev => ({ ...prev, [name]: value }));
    }

    const handleChange = (e) => {
        console.log(2)
    }
    return (
        <div className='absolute size-full top-0 left-0 bg-black/10 backdrop-blur-md max-lg:flex max-lg:justify-center text-white z-51'>
            <div className='w-full h-screen center text-white bg-transparent'>
                <div className='w-9/10 lg:w-200 h-fit p-5 lg:px-10 lg:py-10 bg-[#0B0C0C] rounded shadow shadow-yellow-400/10 border border-yellow-400/10'>
                    {/* heading */}
                    <div className='w-full flex justify-between items-center pb-3 lg:pb-4 border-b border-[#777]/20'>
                        <div className='flex items-center w-fit gap-5'>
                            <div className=''>
                                <h1 className='font-heading text-[4vw] lg:text-xl'>Personal Information</h1>
                                <p className='text-xs tracking-wider lg:text-sm font-body font-extralight pt-1 text-white/70'>
                                    Update your personal details and keep your account secure.
                                </p>
                            </div>
                        </div>
                        <div className='cursor-pointer flex gap-1 px-3 py-1.5 items-center text-yellow-400/70 hover:text-yellow-400/90 border border-yellow-400/20 hover:bg-yellow-400/30 rounded' onClick={() => setEditInfo(false)}>
                            <FaAngleLeft className='text-yellow-400/80 size-3' />
                            <span className='font-body text-xs font-extralight lg:pb-px'>Back <span className='hidden lg:inline'>to Profile</span></span>
                        </div>

                    </div>

                    <form className='w-full'>

                        {/* full name, Email */}
                        <div className='w-full flex justify-between gap-2 lg:gap-5 pt-3 lg:pt-4 max-lg:flex-wrap'>
                            <div className="w-1/2 max-lg:grow">
                                <p className='text-sm font-body font-light capitalize  pb-2'>full name </p>
                                <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                    <label htmlFor='full-name'><TiUserOutline className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" name="name" required id="full-name" className='w-full py-2.5 lg:py-2 font-extralight text-xs lg:text-sm px-2 outline-none font-body' placeholder='Enter Full Name' onChange={handleChange} />
                                </fieldset>
                            </div>
                            <div className="w-1/2 max-lg:grow">
                                <p className='text-sm font-body font-light capitalize  pb-2'>Email Address </p>
                                <fieldset className='border px-2 lg:px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                    <label htmlFor='email'><MdOutlineEmail className='text-yellow-400/70 size-4' /></label>
                                    <input type="email" maxLength={10} name="phoneNo" required id="email" placeholder='Enter Your Email ' className='w-full py-2.5 lg:py-2 font-extralight text-xs lg:text-sm px-2 outline-none font-body' onChange={handleChange} />
                                </fieldset>
                            </div>

                        </div>


                        {/* number and date of birth */}
                        <div className='w-full flex justify-between gap-2 lg:gap-5 pt-3 lg:pt-4'>
                            {/* number */}
                            <div className="w-1/2">
                                <p className='text-sm font-body font-light capitalize  pb-2'>Phone Number</p>
                                <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                    <label htmlFor='phone-number'><MdOutlineLocalPhone className='text-yellow-400/70 size-4' /></label>
                                    <input type="text" name="phoneNo" required id="phone-number" className='w-full py-2.5 lg:py-2 font-extralight text-xs lg:text-sm px-2 outline-none font-body' placeholder='Enter Full Name' onChange={handleChange} />
                                </fieldset>
                            </div>
                            {/* date of birth */}
                            <div className="w-1/2">
                                <p className='text-sm font-body font-light capitalize  pb-2'>Date of Birth </p>
                                <fieldset className='border px-2 lg:px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                    <label htmlFor='email'><MdCalendarMonth className='text-yellow-400/70 size-4' /></label>
                                    <input type="date" maxLength={10} name="phoneNo" required id="email" placeholder='Enter Your Email ' className='w-full py-2.5 lg:py-2 font-extralight text-xs lg:text-sm px-2 outline-none font-body' onChange={handleChange} />
                                </fieldset>
                            </div>

                        </div>

                        {/* gender and role */}
                        <div className='w-full flex justify-between gap-2 lg:gap-5 pt-3 lg:pt-4'>

                            {/* gender */}
                            <div className="w-1/2">
                                <p className='text-sm font-body font-light capitalize  pb-2'>Gender </p>
                                <fieldset className='border rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                    <Dropdown
                                        label="Select Gender"
                                        additionalCls={`bg-transparent!`}
                                        options={genderOptions}
                                        value={personalInfoForm.gender}
                                        onChange={(value) => handleDropdownChange('category', value)}

                                    />
                                </fieldset>
                            </div>

                            {/* Role */}
                            <div className="w-1/2">
                                <p className='text-sm font-body font-light capitalize  pb-2'>Role </p>
                                <fieldset className='border px-2 lg:px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3 bg-[#777]/10'>
                                    <label htmlFor='role'><LuUserRoundCheck className='text-yellow-400/70 size-4' /></label>
                                    <input type="role" maxLength={10} name="role" required id="role" readOnly placeholder='Customer ' className='w-full py-2.5 lg:py-2 font-extralight text-xs lg:text-sm px-2 outline-none font-body' />
                                </fieldset>
                            </div>

                        </div>

                        <div className='w-full px-5 py-3 pb-5 rounded border border-dashed border-[#777]/30 mt-3 lg:mt-15'>
                            <div className='flex gap-4 items-center'>
                                <IoIosLock className='text-yellow-400/80 size-6' />
                                <div className='font-body'>
                                    <h2 className='text-sm font-light text-yellow-400/80'>
                                        Change Password
                                    </h2>
                                    <p className='text-xs font-extralight text-white/80'>
                                        Leave Blank if you don't want to change your password.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full flex items-center gap-4 mt-4 max-lg:flex-col'>
                                <div className="w-full lg:w-1/3">
                                    <p className='text-sm font-body font-light capitalize  pb-2'>Current Password </p>
                                    <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                        <label htmlFor='full-name'><IoIosLock className='text-yellow-400/70 size-4' /></label>
                                        <input type="password" name="currentPassword" required id="current-password" className='w-full py-2.5 lg:py-2.5 font-extralight text-xs lg:text-xs px-2 outline-none font-body' placeholder='Enter Current Password' onChange={handleChange} />
                                    </fieldset>
                                </div>
                                <div className="w-full lg:w-1/3">
                                    <p className='text-sm font-body font-light capitalize  pb-2'>New Password </p>
                                    <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                        <label htmlFor='full-name'><IoIosLock className='text-yellow-400/70 size-4' /></label>
                                        <input type="password" name="newPassword" required id="new-password" className='w-full py-2.5 lg:py-2.5 font-extralight text-xs lg:text-xs px-2 outline-none font-body' placeholder='Enter Current Password' onChange={handleChange} />
                                    </fieldset>
                                </div>
                                <div className="w-full lg:w-1/3">
                                    <p className='text-sm font-body font-light capitalize  pb-2'>Confirmed Password </p>
                                    <fieldset className='border px-3 rounded border-[#777]/20 flex items-center gap-1 lg:gap-3'>
                                        <label htmlFor='full-name'><IoIosLock className='text-yellow-400/70 size-4' /></label>
                                        <input type="password" name="confirmedPassword" required id="confirmed-password" className='w-full py-2.5 lg:py-2.5 font-extralight text-xs lg:text-xs px-2 outline-none font-body' placeholder='Confirm New Password' onChange={handleChange} />
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-10 flex items-center gap-5 '>
                            <button className='w-fit px-8 center font-body font-light tracking-wider text-xs lg:text-xs bg-yellow-400/60 text-white py-2.5 lg:py-3 rounded cursor-pointer gap-3 hover:bg-yellow-400'>
                                <MdCheckBox className='size-4' />
                                <span className=''>
                                    Save Changes
                                </span>
                            </button>
                            <button className='w-fit  mt-1 center font-body font-light tracking-wider text-xs text-white py-2 rounded cursor-pointer gap-3 hover:text-yellow-400/80'>
                                <span className=''>
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

export default InfoForm