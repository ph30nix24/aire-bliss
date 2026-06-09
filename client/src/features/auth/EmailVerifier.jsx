import React from 'react'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdEmail, MdMail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const EmailVerifier = () => {
    return (
        <main className='h-screen! bg-linear-to-br from-[#111111] to-70% to-[#101116] center'>
            {/* <img src="./../../../email_bg.webp" className='size-full object-contain absolute top-0 left-0 z-1' alt="" />
            <div className='w-full h-full relative z-5'>
                <div className='w-full h-[calc(100%-104px)] flex pt-30 pb-10'>
                    <div className="w-1/3 h-full"></div>
                    <div className="w-2/3 h-full pr-40 flex">
                        <div className='w-[45%] h-full px-5 text-white flex flex-col justify-center'>
                            <h1 className='tracking-wider font-subheading text-3xl'>Almost <span className='font-body text-pink-700'>there!</span></h1>
                            <p className='font-body font-light text-sm py-5 tracking-wider'>We've sent a verification code to <br/> <span className='text-yellow-500/70'>example@gmail.com</span> </p>
                            <div className='w-15 h-0.5 bg-yellow-500/50 rounded-full'></div>
                            <div className='w-full flex gap-4 pt-8 items-center'>
                                <div className='p-3 size-fit rounded-full border-2 center border-pink-500/50 bg-[#111]'><VscWorkspaceTrusted className='size-5 text-yellow-400/80'/></div>
                                <div className=''>
                                    <p className='text-sm mb-1 tracking-wider font-subheading'>Secure Verification</p>
                                    <p className='text-sm font-body tracking-wider text-white/70 leading-[100%]'>Your account is important to <br/>us</p>
                                </div>
                            </div>
                            <div className='w-full flex gap-4 pt-8 items-center'>
                                <div className='p-3 size-fit rounded-full border-2 center border-pink-500/50 bg-[#111]'><MdEmail className='size-5 text-yellow-400/80'/></div>
                                <div className=''>
                                    <p className='text-sm mb-1 tracking-wider font-subheading'>Check Your Email</p>
                                    <p className='text-sm font-body tracking-wider text-white/70 leading-[100%]'>Enter the 6-digit code <br/>we sent you</p>
                                </div>
                            </div>
                            <div className='w-full flex gap-4 pt-8 items-center pb-8'>
                                <div className='p-3 size-fit rounded-full border-2 center border-pink-500/50 bg-[#111]'><IoIosLock  className='size-5 text-yellow-400/80'/></div>
                                <div className=''>
                                    <p className='text-sm mb-1 tracking-wider font-subheading'>Verify & Shop</p>
                                    <p className='text-sm font-body tracking-wider text-white/70 leading-[100%]'>Verify your email to access <br/>your account</p>
                                </div>
                            </div>
                            <div className='w-15 h-0.5 bg-yellow-500/50 rounded-full'></div>
                        </div>
                        <div className='w-[55%] h-full border border-pink-600/30 rounded-2xl shadow-xl shadow-pink-500/10 bg-[#222]/40 backdrop-blur-2xl'></div>
                    </div>
                </div>
            </div> */}
            <div className='w-4/5 h-[70vh] mt-20 bg-[#111] rounded-2xl relative overflow-hidden border border-[#888]/10 shadow-xl'>
                <img src="./../../../ChatGPT.png" className='size-full object-cover absolute top-0 left-0 z-1' alt="" />
                <div className='size-full relative z-5 flex p-10'>
                    <div className="w-1/3 h-full"></div>
                    <div className="w-2/3 h-full flex gap-3">
                        <div className='w-[40%] h-full text-white pl-5 pt-10'>
                            <h1 className=' text-2xl'>
                                Almost <span className='font-body text-[#813A79]'>there!</span>
                            </h1>
                            <p className='text-sm font-body font-extralight pt-4 pb-8'>We've sent a verification code to <br/> <span className='text-[#E7C079]'>example@gmail.com</span></p>
                            <div className='w-10 h-px bg-[#E7C079]/50'></div>
                            <div className='w-full flex gap-4 pt-8 items-center'>
                                <div className='p-2.5 size-fit rounded-full border-2 center border-[#813A79] backdrop-blur-md'><VscWorkspaceTrusted className='size-4 text-[#E7C079]'/></div>
                                <div className=''>
                                    <p className='text-xs mb-1 tracking-wider font-subheading'>Secure Verification</p>
                                    <p className='text-xs font-body tracking-wider text-white/70 leading-[120%] font-extralight'>Your account is important to <br/>us</p>
                                </div>
                            </div>
                            <div className='w-full flex gap-4 pt-8 items-center'>
                                <div className='p-2.5 size-fit rounded-full border-2 center border-[#813A79] backdrop-blur-md'><MdMail className='size-4 text-[#E7C079]'/></div>
                                <div className=''>
                                    <p className='text-xs mb-1 tracking-wider font-subheading'>Check Your Email</p>
                                    <p className='text-xs font-body tracking-wider text-white/70 leading-[120%] font-extralight'>Enter the 6 digit code <br/>we sent you</p>
                                </div>
                            </div>
                            <div className='w-full flex gap-4 pt-8 items-center pb-8'>
                                <div className='p-2.5 size-fit rounded-full border-2 center border-[#813A79] backdrop-blur-md'><IoIosLock className='size-4 text-[#E7C079]'/></div>
                                <div className=''>
                                    <p className='text-xs mb-1 tracking-wider font-subheading'>Verify & Shop</p>
                                    <p className='text-xs font-body tracking-wider text-white/70 leading-[120%] font-extralight'>Verify your email to access <br/>us</p>
                                </div>
                            </div>
                            <div className='w-10 h-px bg-[#E7C079]/50'></div>
                            <div className='flex gap-2 mt-6'>
                                <AiOutlineQuestionCircle className='size-4' />
                                <p className='text-xs font-body font-extralight tracking-wide'>Didn't receive the email? Check your span folder or resend the code</p>
                            </div>
                        </div>
                        <div className='w-[60%] h-full bg-[#17171C] rounded-2xl border border-[#888]/10 shadow-xl '>
                            
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default EmailVerifier