import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import Dropdown from '../../admin/components/DropDown'
import { useAuth } from '../../auth/hooks/useAuth'
import Loader from '../../../components/Loader'
import toast from 'react-hot-toast'

const InfoForm = ({ isEditPersonalInfo, setIsEditPersonalInfo }) => {
    const { user, loading, handleUserUpdate } = useAuth();

    const [userData, setUserData] = useState({
        name: user.name,
        phoneNo: user.phoneNo || '',
        gender: user.gender || '',
        dateOfBirth: user.dateOfBirth || ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: value      // Update just the "name" field
        }));
    }

    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Others', value: 'others' },
    ];

    const handleDropdownChange = (name, value) => {
        setUserData(prev => ({ ...prev, [name]: value }));
    }

    const handleForm = async (e) => {
        e.preventDefault();
        console.log('clicked')
        try {
            const data = await handleUserUpdate({ ...userData });
            if (!data.success) {
                toast.error(data.message);
                throw new Error(data.message);
            }
            toast.success(data.message);
            setIsEditPersonalInfo(false)
        } catch (error) {
            toast.error('Failed to update user. Please try again later.');
            console.error('Error While updating user:', error);
        }
    }

    if (loading) {
        return (
            <div className='w-full h-screen center bg-[#131313]'>
                <Loader />
            </div>
        )
    }


    return (
        <div className={`absolute w-full h-screen top-0 left-0 max-lg:translate-y-1/2 bg-[#131313]/60 backdrop-blur-sm z-55 center`}>
            <form className='w-9/10 lg:w-160 bg-[#181818] relative h-fit py-10 px-5 lg:p-10 border-2 border-yellow-400/10' onSubmit={handleForm}>
                <RxCross2 className='size-5 text-white/70 absolute top-0 right-0 -translate-x-[120%] translate-y-[120%] cursor-pointer' onClick={() => setIsEditPersonalInfo(false)} />

                <p className='text-xs uppercase text-primary text-center font-semibold tracking-[0.285em]'>member records</p>
                <h1 className='text-[8vw] lg:text-4xl py-2 text-center tracking-wider font-subheading font-bold'>Edit Profile</h1>
                <p className='italic text-center text-white/60 max-lg:text-sm'>"Your identity is the finest fragrance we curate."</p>


                <div className='w-full h-fit flex gap-5 mt-5 max-lg:flex-col'>
                    <fieldset className='w-full lg:w-1/2'>
                        <label htmlFor="name" className='block pb-2 font-subheading tracking-[0.175em] font-medium uppercase text-xs  text-primary'>
                            Name
                        </label>
                        <input type="text" name="name" id="name" value={userData.name} placeholder='Enter your name' className='w-full outline-none bg-[#131313] px-3 py-3 font-body tracking-wider text-sm capitalize text-white/60  border border-[#777]/10' onChange={handleChange} />
                    </fieldset>


                    <fieldset className='w-full lg:w-1/2'>
                        <label htmlFor="phoneNo" className='block pb-2 font-subheading tracking-[0.175em] font-medium uppercase text-xs  text-primary'>
                            phone number
                        </label>
                        <input type="text" name="phoneNo" id="phoneNo" value={userData.phoneNo} placeholder='+91 87000 00000' maxLength={10} className='w-full outline-none bg-[#131313] px-3 py-3 font-body tracking-wider text-sm capitalize text-white/60  border border-[#777]/10' onChange={handleChange} />
                    </fieldset>
                </div>


                <div className='w-full h-fit flex gap-5 mt-5'>
                    <fieldset className='w-full'>
                        <label htmlFor="email" className='block pb-2 font-subheading tracking-[0.175em] font-medium uppercase text-xs  text-primary'>
                            Email Address
                        </label>
                        <input type="text" name="email" id="email" value={user.email} placeholder='Enter your name' className='w-full outline-none bg-[#131313] px-3 py-3 font-body tracking-wider text-sm text-white/60  border border-[#777]/10' readOnly />
                    </fieldset>

                </div>

                <div className='w-full h-fit flex gap-5 mt-5'>
                    <fieldset className='w-1/2'>
                        <label htmlFor="name" className='block pb-2 font-subheading tracking-[0.175em] font-medium uppercase text-xs  text-primary'>
                            Gender
                        </label>
                        <Dropdown
                            label='Select Gender'
                            options={genderOptions}
                            value={userData.gender}
                            additionalCls={`rounded-none! py-3.25!`}
                            onChange={(value) => handleDropdownChange('gender', value)}
                        />
                    </fieldset>


                    <fieldset className='w-1/2'>
                        <label htmlFor="name" className='block pb-2 font-subheading tracking-[0.175em] font-medium uppercase text-xs  text-primary'>
                            birth date
                        </label>
                        <input type="date" name="dateOfBirth" id="dob" value={userData.dateOfBirth} className='w-full outline-none bg-[#131313] px-3 py-3 font-body tracking-wider text-sm  text-white/60  border border-[#777]/10 [&::-webkit-calendar-picker-indicator]:invert
    [&::-webkit-calendar-picker-indicator]:cursor-pointer' onChange={handleChange} />
                    </fieldset>
                </div>


                <div className='w-full flex gap-2 lg:gap-5 items-center border-t-2 border-primary/10 pt-10 mt-20'>
                    <button className='w-1/2 px-10 backdrop-blur-xs py-3 text-yellow-400/90 center gap-3 bg-[#111]/50 hover:text-[#111]  border hover:bg-yellow-400/90 cursor-pointer transition-smooth' type='button'>
                        <p className='font-body text-[10px] lg:text-sm font-light uppercase tracking-[0.175em]'>cancel</p>
                    </button>

                    <button className='w-1/2 lg:px-10 backdrop-blur-xs py-3 text-[#131313] center gap-3 bg-primary hover:text-[#111]  border hover:bg-yellow-400/90 cursor-pointer transition-smooth' type='submit'>
                        <p className='font-body text-[10px] lg:text-sm font-medium uppercase tracking-[0.175em]'>Save changes</p>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InfoForm