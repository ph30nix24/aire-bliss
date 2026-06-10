import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { CiLock } from 'react-icons/ci';
import { GoMail } from 'react-icons/go';
import { GrFormViewHide } from 'react-icons/gr';
import { PiEyesLight, PiFlowerLotus } from 'react-icons/pi';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from './hooks/useAuth';
import Loader from '../../components/Loader';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router';


const SignUp = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { loading, handleSignUp } = useAuth()
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const [hidingPassword, setHidingPassword] = useState(true);
    const [hidingConfPassword, setHidingConfPassword] = useState(true);

    const from = location.state?.from  || '/';
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        if (!formData.password || !formData.confirmPassword) {
            toast.error("Please fill all password fields");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        await handleSignUp({
            name: formData.name,
            email: formData.email,
            password: formData.password,
        })

        navigate('/auth/verify-email', {state: { from }});
    }

    if (isMobile) {
        if (loading) {
            return (
                <main className='w-full h-screen center bg-black'>
                    <Loader />
                </main>
            )
        }
        return (
            <main className='w-full h-screen relative z-1 py-10 px-10 bg-[#111] flex flex-col justify-center items-center'>
                <img src="./footer-1.webp" className='absolute w-4/10 top-1/2 left-0 -translate-y-1/2 z-1 opacity-50 ' alt="" />
                <img src="./logo-2.png" className='size-10 object-contain' loading='lazy' alt="logo" />
                <h1 className='font-stylish text-gradient text-xl mt-2 uppercase z-2'>Aire Bliss</h1>
                <p className='uppercase text-xs font-subheading text-white/90 mt-0.5 tracking-widest z-2'>luxury fragrances</p>
                <h1 className='font-heading text-3xl text-white mt-4 font-semibold  z-2 text-center'>Join Aire Bliss</h1>
                <p className='text-white/80 font-light font-body text-base mt-2 tracking-wide z-2 text-center'>Create your account and explore our exclusive collection</p>
                <div className='w-30 h-0.5 rounded-full relative bg-yellow-400/70 mx-auto my-5 z-2'><span className='absolute text-yellow-500 p-1 bg-[#111] backdrop-blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <PiFlowerLotus className='size-5 ' /></span>
                </div>
                <form className='w-full z-2' onSubmit={formSubmit}>
                    <p className='form-label'>Full Name</p>
                    <fieldset className='form-field mb-2!'>
                        <label htmlFor="full-name"><GoMail className='text-yellow-500/80 text-xl' /></label>
                        <input className='form-input' type="text" name="name" id='full-name' placeholder='Enter your full name' onChange={handleChange} required />
                    </fieldset>
                    <p className='form-label'>Email Address</p>
                    <fieldset className='form-field mb-2!'>
                        <label htmlFor=""><GoMail className='text-yellow-500/80 text-xl' /></label>
                        <input className='form-input' type="email" name="email" id='email' placeholder='Enter your email' onChange={handleChange} required />
                    </fieldset>
                    <p className='form-label'>Password</p>
                    <fieldset className='form-field mb-2!'>
                        <label htmlFor=""><CiLock className='text-yellow-500/80 text-2xl' /></label>
                        <input className='form-input' type={hidingPassword ? "password" : "text"} name='password' id='password' placeholder='Create a password' onChange={handleChange} required />
                        {hidingPassword ? <GrFormViewHide className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingPassword(false)} /> : <PiEyesLight className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingPassword(true)} />}
                    </fieldset>
                    <p className='form-label'>Password</p>
                    <fieldset className='form-field mb-2!'>
                        <label htmlFor=""><CiLock className='text-yellow-500/80 text-2xl' /></label>
                        <input className='form-input' type={hidingConfPassword ? "password" : "text"} name='password' id='password' placeholder='Confirm your password' onChange={handleChange} required />
                        {hidingConfPassword ? <GrFormViewHide className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingConfPassword(false)} /> : <PiEyesLight className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingConfPassword(true)} />}
                    </fieldset>

                    <div className='w-full flex justify-between items-center '>
                        <fieldset className='flex items-center gap-2'>
                            <input type="checkbox" className='' id='remember' name='remember' required />
                            <label className='form-label' htmlFor="remember">I agree to the <a href='' className='text-yellow-400/80'>Terms & Condition</a> and <a href='' className='text-yellow-400/80'>Privacy Policy</a></label>
                        </fieldset>
                    </div>
                    <button className='w-full h-fit center bg-linear-to-r from-yellow-400/90 via-yellow-500 to-yellow-400/90 py-3 rounded-lg font-body font-light mt-10 cursor-pointer  hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 gap-2'>
                        <span className='text-xs uppercase'>Create Account</span>
                        <BsArrowRight />
                    </button>
                </form>
                <p className='form-label mt-5'>Already have an account? <a href='/login' className='text-yellow-400/70'>Login</a></p>
            </main >
        )
    }
    if (loading) {
        return (
            <main className='w-full h-screen center bg-black'>
                <Loader />
            </main>
        )
    }
    return (
        <main className='w-full h-screen relative z-1 p-5 bg-[#111]'>
            <div className='size-full relative rounded-2xl overflow-hidden border border-yellow-500/50'>
                <img src="./../../../signup.webp" className='absolute top-0 left-0 size-full object-cover z-1' alt="" />
                <div className='size-full absolute z-2 top-0 left-0 bg-linear-to-r from-transparent to-black/20'></div>
                <div className='size-full relative z-3 flex justify-center items-center '>
                    <div className="w-1/2 h-full bg-[#111] rounded-2xl border-l border-yellow-500/50 py-10 px-40 flex flex-col justify-center items-center relative ">
                        <img src="./../../../footer-1.webp" className='absolute w-4/10 top-1/2 left-0 -translate-y-1/2 z-1' alt="" />
                        <img src="./../../../logo-2.png" className='size-10 object-contain' loading='lazy' alt="logo" />
                        <h1 className='font-stylish text-gradient text-xl mt-2 uppercase z-2'>Aire Bliss</h1>
                        <p className='uppercase text-xs font-subheading text-white/90 mt-0.5 tracking-widest z-2'>luxury fragrances</p>
                        <h1 className='font-heading text-3xl text-white mt-4 font-semibold  z-2'>Join Aire Bliss</h1>
                        <p className='text-white/80 font-light font-body text-base mt-2 tracking-wide z-2'>Create your account and explore our exclusive collection</p>
                        <div className='w-30 h-0.5 rounded-full relative bg-yellow-400/70 mx-auto my-5 z-2'><span className='absolute text-yellow-500 p-1 bg-[#111] backdrop-blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <PiFlowerLotus className='size-5 ' /></span>
                        </div>
                        <form className='w-full z-2' onSubmit={formSubmit}>
                            <p className='form-label'>Full Name</p>
                            <fieldset className='form-field mb-2!'>
                                <label htmlFor="full-name"><GoMail className='text-yellow-500/80 text-xl' /></label>
                                <input className='form-input' onChange={handleChange} type="text" name="name" id='full-name' placeholder='Enter your full name' required />
                            </fieldset>
                            <p className='form-label'>Email Address</p>
                            <fieldset className='form-field mb-2!'>
                                <label htmlFor=""><GoMail className='text-yellow-500/80 text-xl' /></label>
                                <input className='form-input' onChange={handleChange} type="email" name="email" id='email' placeholder='Enter your email' required />
                            </fieldset>
                            <p className='form-label'>Password</p>
                            <fieldset className='form-field mb-2!'>
                                <label htmlFor=""><CiLock className='text-yellow-500/80 text-2xl' /></label>
                                <input className='form-input' type={hidingPassword ? "password" : "text"} onChange={handleChange} name='password' id='password' placeholder='Create a password' required />
                                {hidingPassword ? <GrFormViewHide className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingPassword(false)} /> : <PiEyesLight className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingPassword(true)} />}
                            </fieldset>
                            <p className='form-label'>Password</p>
                            <fieldset className='form-field mb-2!'>
                                <label htmlFor=""><CiLock className='text-yellow-500/80 text-2xl' /></label>
                                <input className='form-input' type={hidingConfPassword ? "password" : "text"} name='confirmPassword' id='confirmPassword' placeholder='Confirm your password' onChange={handleChange}  required />
                                {hidingConfPassword ? <GrFormViewHide className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingConfPassword(false)} /> : <PiEyesLight className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingConfPassword(true)} />}
                            </fieldset>

                            <div className='w-full flex justify-between items-center '>
                                <fieldset className='flex items-center gap-1'>
                                    <input type="checkbox" className='' id='remember' name='remember' required />
                                    <label className='form-label' htmlFor="remember">I agree to the <a href='' className='text-yellow-400/80'>Terms & Condition</a> and <a href='' className='text-yellow-400/80'>Privacy Policy</a></label>
                                </fieldset>
                            </div>
                            <button className='w-full h-fit center bg-linear-to-r from-yellow-400/90 via-yellow-500 to-yellow-400/90 py-3 rounded-lg font-body font-light mt-10 cursor-pointer  hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 gap-2'>
                                <span>Login</span>
                                <BsArrowRight />
                            </button>
                        </form>
                        <p className='form-label mt-5'>Already have an account? <a href='/auth/login' className='text-yellow-400/70'>Login</a></p>
                    </div>
                    <div className="w-1/2 h-full"></div>
                </div>
            </div>
        </main>
    )
}

export default SignUp