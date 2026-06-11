import React, { useState } from 'react'
import { PiFlowerLotus } from 'react-icons/pi'
import { GoMail } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import { PiEyesLight } from "react-icons/pi";
import { GrFormViewHide } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';
import { useAuth } from './hooks/useAuth';
import { useNavigate, useLocation, Link } from 'react-router';
import toast from 'react-hot-toast';


const Login = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const [hidingPassword, setHidingPassword] = useState(true);
    const { handleLogin } = useAuth()
    const navigate = useNavigate()
    const location = useLocation();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const from = location.state?.from || '/';

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            await handleLogin({ email: formData.email, password: formData.password })
            toast.success("Logged in successfully");
            navigate(from, { replace: true});
        }
        catch (e) {
            toast.error(e.message);
        }
    }


    if (isMobile) {
        return (
            <main className='w-full h-screen relative z-1 py-10 px-10 bg-[#111] flex flex-col justify-center'>
                <img src="./../../../footer-1.webp" className='absolute w-4/10 top-1/2 right-0 -translate-y-1/2 -scale-x-100 -z-1' alt="" />
                <img src="./../../../logo-2.png" className='size-15 object-contain mx-auto' loading='lazy' alt="logo" />
                <h1 className='font-stylish text-gradient text-[5vw] mt-2 uppercase text-center'>Aire Bliss</h1>
                <p className='uppercase text-xs font-subheading text-white/90 mt-0.5 tracking-widest text-center'>luxury fragrances</p>
                <h1 className='font-heading text-[7vw] text-white mt-10 font-semibold  text-center '>welcome back</h1>
                <p className='text-white/80 font-light font-body text-[3.5vw] text-center mt-1 tracking-wide'>Sign in to continue your fragrance journey</p>
                <div className='w-30 h-0.5 rounded-full relative bg-yellow-400/70 mx-auto my-5'><span className='absolute text-yellow-500 p-1 bg-[#111] backdrop-blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <PiFlowerLotus className='size-5 ' /></span>
                </div>
                <form className='w-full' action="">
                    <p className='form-label'>Email Address</p>
                    <fieldset className='form-field'>
                        <label htmlFor=""><GoMail className='text-yellow-500/80 text-xl' /></label>
                        <input className='form-input' type="email" name="email" id='email' placeholder='Enter your email' />
                    </fieldset>
                    <p className='form-label'>Password</p>
                    <fieldset className='form-field'>
                        <label htmlFor=""><CiLock className='text-yellow-500/80 text-2xl' /></label>
                        <input className='form-input' type={hidingPassword ? "password" : "text"} name='password' id='password' placeholder='Enter your password' />
                        {hidingPassword ? <GrFormViewHide className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingPassword(false)} /> : <PiEyesLight className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingPassword(true)} />}
                    </fieldset>

                    <div className='w-full flex justify-between items-center '>
                        <fieldset className='flex items-center gap-1'>
                            <input type="checkbox" className='' id='remember' name='remember' />
                            <label className='form-label' htmlFor="remember">Remember me</label>
                        </fieldset>
                        <p><a href="" className='form-label capitalize text-yellow-400/70!'>forget password</a></p>
                    </div>
                    <button className='w-full h-fit center bg-linear-to-r from-yellow-400/90 via-yellow-500 to-yellow-400/90 py-3 rounded-lg font-body font-light mt-15 cursor-pointer  hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 gap-2'>
                        <span>Login</span>
                        <BsArrowRight />
                    </button>
                </form>
                <p className='form-label mt-5'>Don't have an account? <a href='' className='text-yellow-400/70'>Sign Up</a></p>
            </main >
        )
    }
    return (
        <main className='w-full h-screen relative z-1 p-5 bg-[#111]'>
            <div className='size-full relative rounded-2xl overflow-hidden border border-yellow-500/50'>
                <img src="./../../../login.webp" className='absolute top-0 left-0 size-full object-cover z-1' alt="" />
                <div className='size-full relative z-3 flex justify-center items-center'>
                    <div className="w-1/2 h-full"></div>
                    <div className="w-1/2 h-full bg-[#111] rounded-2xl border-l border-yellow-500/50 py-10 px-40 flex flex-col justify-center items-center relative ">
                        <img src="./../../../footer-1.webp" className='absolute w-4/10 top-1/2 right-0 -translate-y-1/2 -scale-x-100 z-9' alt="" />
                        <img src="./../../../logo-2.png" className='size-15 object-contain' loading='lazy' alt="logo" />
                        <h1 className='font-stylish text-gradient text-xl mt-2 uppercase'>Aire Bliss</h1>
                        <p className='uppercase text-xs font-subheading text-white/90 mt-0.5 tracking-widest'>luxury fragrances</p>
                        <h1 className='font-heading text-3xl text-white mt-10 font-semibold '>welcome back</h1>
                        <p className='text-white/80 font-light font-body text-base mt-2 tracking-wide'>Sign in to continue your fragrance journey</p>
                        <div className='w-30 h-0.5 rounded-full relative bg-yellow-400/70 mx-auto my-5'><span className='absolute text-yellow-500 p-1 bg-[#111] backdrop-blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <PiFlowerLotus className='size-5 ' /></span>
                        </div>
                        <form className='w-full relative z-10' onSubmit={handleSubmit}>
                            <p className='form-label'>Email Address</p>
                            <fieldset className='form-field'>
                                <label htmlFor=""><GoMail className='text-yellow-500/80 text-xl' /></label>
                                <input className='form-input' type="email" name="email" id='email' placeholder='Enter your email' onChange={handleChange} />
                            </fieldset>
                            <p className='form-label'>Password</p>
                            <fieldset className='form-field'>
                                <label htmlFor=""><CiLock className='text-yellow-500/80 text-2xl' /></label>
                                <input className='form-input' type={hidingPassword ? "password" : "text"} name='password' id='password' placeholder='Enter your password' onChange={handleChange} />
                                {hidingPassword ? <GrFormViewHide className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingPassword(false)} /> : <PiEyesLight className='text-yellow-500/80 text-2xl cursor-pointer' onClick={() => setHidingPassword(true)} />}
                            </fieldset>

                            <div className='w-full flex justify-between items-center '>
                                <fieldset className='flex items-center gap-1'>
                                    <input type="checkbox" className='' id='remember' name='remember' />
                                    <label className='form-label' htmlFor="remember">Remember me</label>
                                </fieldset>
                                <p><a href="" className='form-label capitalize text-yellow-400/70!'>forget password</a></p>
                            </div>
                            <button className='w-full h-fit center bg-linear-to-r from-yellow-400/90 via-yellow-500 to-yellow-400/90 py-3 rounded-lg font-body font-light mt-15 cursor-pointer  hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 gap-2'>
                                <span>Login</span>
                                <BsArrowRight />
                            </button>
                        </form>
                        <p className='form-label mt-5'>Don't have an account? <Link to='/auth/signup' status={{ from }}  className='text-yellow-400/70'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login