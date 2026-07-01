import React, { useState } from 'react'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdEmail, MdMail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";
import { useAuth } from './hooks/useAuth';
import { toast } from 'react-hot-toast'

const EmailVerifier = () => {
    const { loading, handleVerifyEmail } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';
    const [otpDigits, setOtpDigits] = useState({
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
        digit5: '',
        digit6: '',
    })

    const handleChange = (e) => {
        setOtpDigits({
            ...otpDigits, [e.target.name]: Number(e.target.value)
        })
    }

    const handleSubmit = async () => {
        try {
            const otp = Object.values(otpDigits).join('')
            const data = await handleVerifyEmail(otp)
            console.log(data)
            if (!data.success) {
                toast.error(data.message);
                throw new Error(data.message);
            }
            toast.success(data.message);
            navigate(from, { replace: true });
        }
        catch (e) {
            toast.error(e.message);
        }
    }

    return (
        <main className='h-screen! bg-linear-to-br from-[#111111] to-70% to-[#101116] center'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-2/10'>
                <img src="./../../../logo-2.png" className='size-10 mx-auto' alt="" />
                <h1 className='text-[#edbc51] text-3xl font-stylish text-center uppercase mt-2 tracking-wider'>Aire Bliss</h1>
                <div className='flex items-center justify-center gap-3'>
                    <div className='w-12 h-px bg-linear-to-r from-transparent to-[#CA931B] to-50%'></div>
                    <p className='text-[#edbc51] text-[10px] tracking-widest font-subheading uppercase'>perfume</p>
                    <div className='w-12 h-px bg-linear-to-l from-transparent to-50% to-[#CA931B]'></div>
                </div>
            </div>
            <div className='w-4/5 h-[75vh] mt-20 bg-[#111] rounded-2xl relative overflow-hidden border border-[#888]/10 shadow-xl'>
                <img src="./../../../email.webp" className='size-full object-cover absolute top-0 left-0 z-1' alt="" />
                <div className='size-full relative z-5 flex p-10'>
                    <div className="w-1/3 h-full"></div>
                    <div className="w-2/3 h-full flex gap-3">
                        <div className='w-[40%] h-full text-white pl-5 pt-10'>
                            <h1 className=' text-2xl'>
                                Almost <span className='font-body text-[#813A79]'>there!</span>
                            </h1>
                            <p className='text-sm font-body font-extralight pt-4 pb-8'>We've sent a verification code to <br /> <span className='text-[#E7C079]'>example@gmail.com</span></p>
                            <div className='w-10 h-px bg-[#E7C079]/50'></div>
                            <div className='w-full flex gap-4 pt-8 items-center'>
                                <div className='p-2.5 size-fit rounded-full border-2 center border-[#813A79] backdrop-blur-md'><VscWorkspaceTrusted className='size-4 text-[#E7C079]' /></div>
                                <div className=''>
                                    <p className='text-xs mb-1 tracking-wider font-subheading'>Secure Verification</p>
                                    <p className='text-xs font-body tracking-wider text-white/70 leading-[120%] font-extralight'>Your account is important to <br />us</p>
                                </div>
                            </div>
                            <div className='w-full flex gap-4 pt-8 items-center'>
                                <div className='p-2.5 size-fit rounded-full border-2 center border-[#813A79] backdrop-blur-md'><MdMail className='size-4 text-[#E7C079]' /></div>
                                <div className=''>
                                    <p className='text-xs mb-1 tracking-wider font-subheading'>Check Your Email</p>
                                    <p className='text-xs font-body tracking-wider text-white/70 leading-[120%] font-extralight'>Enter the 6 digit code <br />we sent you</p>
                                </div>
                            </div>
                            <div className='w-full flex gap-4 pt-8 items-center pb-8'>
                                <div className='p-2.5 size-fit rounded-full border-2 center border-[#813A79] backdrop-blur-md'><IoIosLock className='size-4 text-[#E7C079]' /></div>
                                <div className=''>
                                    <p className='text-xs mb-1 tracking-wider font-subheading'>Verify & Shop</p>
                                    <p className='text-xs font-body tracking-wider text-white/70 leading-[120%] font-extralight'>Verify your email to access <br />us</p>
                                </div>
                            </div>
                            <div className='w-10 h-px bg-[#E7C079]/50'></div>
                            <div className='flex gap-2 mt-6'>
                                <AiOutlineQuestionCircle className='size-4' />
                                <p className='text-xs font-body font-extralight tracking-wide'>Didn't receive the email? Check your span folder or resend the code</p>
                            </div>
                        </div>
                        <div className='w-[60%] h-full bg-[#17171C] rounded-2xl border border-[#888]/10 shadow-xl p-5 px-10 shadow-lg shadow-[#777]/10'>
                            <div className='p-3 border size-fit rounded-full bg-[#813A79]/20 mx-auto border-[#813A79] shadow-md shadow-[#777]/10'>
                                <MdOutlineEmail className='text-[#813A79] size-8' />
                            </div>
                            <h1 className='font-heading text-center text-white mt-5 mb-1 text-xl'>Verify the email</h1>
                            <p className='text-center font-body text-white font-extralight text-sm tracking-wider'>Enter the 6-digit code sent to <br /> <span className='text-[#E7C079]'>example@gmail.com</span></p>

                            <div className='w-full flex gap-2 my-4 px-5 mt-7'>
                                {Array.from({
                                    length: 6
                                }).map((_, index) => (
                                    <input type="text" maxLength={1} name={`digit${index + 1}`} maxLength={1} id={`digit-${index + 1}`} key={`input${index + 1}`} onChange={handleChange} className="w-1/6 h-14 border border-[#777]/80 rounded text-white py-3 text-center text-xl font-subheading focus:outline-none focus:ring focus:ring-[#813A79]" />
                                ))}


                            </div>

                            <div className='flex w-full justify-center items-center text-white gap-1'>
                                <MdAccessTime className='text-[#E7C079] size-3.5' />
                                <p className='font-body text-sm font-extralight '>Code expries in <span className='text-[#bb31ab] font-medium'>09:45</span></p>
                            </div>

                            <div className='w-full mt-13 px-5 text-white '>
                                <button className='font-body w-full bg-linear-to-b  from-[#9f3592] to-[#7b2771] py-3 rounded-lg cursor-pointer shadow-lg shadow-[#777]/10 outline-none text-sm' onClick={handleSubmit}>
                                    Verify Email
                                </button>

                                <div className='flex items-center gap-3 my-5 justify-between'>
                                    <div className='w-35 bg-[#813A79]/60 h-px'></div>
                                    <p className='text-xs'>or</p>
                                    <div className='w-35 bg-[#813A79]/60 h-px'></div>
                                </div>
                                <button className='font-body w-full backdrop-blur-md border border-[#E7C079] text-[#E7C079] py-3 rounded-lg cursor-pointer shadow-lg shadow-[#777]/10 outline-none text-sm'>
                                    Resend Code
                                </button>

                                <a href='/' className="flex gap-2 items-center justify-center mt-3">
                                    <FaArrowLeft className='size-3' />
                                    <p className='font-body text-sm font-extalight'>Back to Sign In</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default EmailVerifier