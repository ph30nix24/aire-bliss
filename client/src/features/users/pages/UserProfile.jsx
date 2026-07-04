import React, { useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineKey } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Footer from '../../../components/Footer'
import InfoForm from '../component/InfoForm';
import { useAuth } from '../../auth/hooks/useAuth';
import Loader from '../../../components/Loader';





const UserProfile = () => {

    const { user, wishList, cartLength, addresses, orders } = useAuth();

    const [isEditPersonalInfo, setIsEditPersonalInfo] = useState(false);


    if (!user) {
        return (
            <div className='w-full h-screen center bg-[#131313] '>
                <Loader />
            </div>
        )
    }
    const [localPart, domain] = (user?.email || '').split('@');

    return (
        <main className='bg-[#131313] text-white'>

            <img src="./../../../../profile/userImgBg.webp" className='w-full h-screen object-cover lg:object-contain absolute top-0 left-0 z-1' alt="" />
            <div className='w-full h-screen absolute bg-radial top-0 left-0 z-2 from-[#131313]/10 lg:from-[#131313]/30 to-75% to-[#131313]'></div>

            <div className='w-full h-screen flex items-end relative z-5 p-10 pb-20'>
                <div className='w-full flex justify-center lg:justify-between items-center relative'>

                    {/* name */}
                    <div className='max-lg:w-full max-lg:pb-20'>
                        <div className='w-full flex gap-3 max-lg:justify-center items-center'>
                            <div className='w-10 h-0.5 bg-[#A0852E]'></div>
                            <h1 className='uppercase font-body font-medium tracking-widest text-[#A0852E] max-lg:text-center '>Welcome to the <br className='lg:hidden' /> Aire Bliss</h1>
                            <div className='w-10 h-0.5 bg-[#A0852E] lg:hidden'></div>
                        </div>
                        <div className='font-heading text-7xl font-medium max-lg:w-full max-lg:text-center mt-3'>
                            {user?.name}
                        </div>
                        <div className=' mt-5 lg:mt-3 flex gap-3 items-center max-lg:justify-center'>
                            <div className='uppercase text-xs font-body tracking-wider flex gap-1 text-[#A0852E] py-1 px-4 border items-center max-lg:rounded-full max-lg:backdrop-blur-xs'>
                                <FaCircleCheck className='size-3' />
                                <span className='pt-px '>Verified </span>
                            </div>
                            <p className='uppercase text-xs font-body tracking-widest'>Since, {new Date(user.createdAt).toLocaleDateString("en-GB", {
                                month: "long",
                                year: "numeric",
                            })}</p>
                        </div>
                    </div>


                    {/* primary-contact */}
                    <div className='w-fit p-8 bg-[#131313] border-t border-l border-yellow-400/30 relative overflow-hidden group max-lg:hidden'>
                        <p className='text-[10px] font-body font-medium uppercase tracking-wider text-white/60 text-end'>Digital Identity</p>

                        <p className='py-2 font-body font-light text-base text-end tracking-wider'>
                            {localPart}<br />@{domain}
                        </p>
                        <div className='flex gap-2 items-center mt-1'>
                            <p className=" font-body tracking-wider text-[#A0852E] capitalize font-medium">primary contact</p>
                            <div className="w-10 h-px rounded-full bg-[#A0852E]"></div>
                        </div>

                        <div className='size-full absolute bg-[#A0852E]/10 bottom-0 left-0 translate-y-full group-hover:translate-y-0 transition-smooth'></div>
                    </div>

                    <div className='absolute left-1/2 bottom-0 max-lg:-translate-x-1/2 float-animation transition-smooth'>
                        <p className='text-[#A0852E] uppercase text-xs font-body tracking-widest pb-2'>Discover</p>
                        <div className='w-px h-10  mx-auto bg-linear-to-b from-[#A0852E] to-[#131313]'></div>
                    </div>

                    {/* capital-letter */}
                    <div className=' absolute left-1/2 translate-x-1/2 lg:translate-x-[200%] translate-y-4/10 lg:translate-y-2/10 text-[208px] font-subheading italic text-[#A0852E]/10 lg:text-[#A0852E]/20 uppercase'>
                        {user?.name?.slice(0, 1)}
                    </div>
                </div>
            </div>

            <div className='w-full py-30 flex max-lg:flex-col lg:gap-15  relative '>
                {isEditPersonalInfo && <InfoForm isEditPersonalInfo={isEditPersonalInfo} setIsEditPersonalInfo={setIsEditPersonalInfo} user={user} />}
                <div className="w-full lg:w-3/10 px-10 lg:pr-15 py-10 pt-20 border-r-2 border-[#232221]/50">

                    <h1 className='font-subheading italic text-white/90 text-4xl'>Curation</h1>
                    <p className='py-5 font-body tracking-wide font-light text-white/70'>Your personal collection and <br /> interactions within the Maison.</p>

                    <div className='mt-10 w-full '>
                        <a href="/user/wishlist/">
                            <div className='py-5 flex border-b-2 border-[#232221]/50 items-center justify-between group cursor-pointer'>
                                <div className='w-fit flex gap-5 items-center'>
                                    <p className='font-heading text-5xl text-[#deb324]'>{wishList}</p>
                                    <div className='text-sm tracking-widest text-white/60 uppercase font-body group-hover:text-[#967c26] transition-smooth'>Wishlist <br /> items</div>
                                </div>

                                <FiArrowUpRight className='size-5 text-white/40 group-hover:text-[#deb324] transition-smooth' />
                            </div>
                        </a>
                        <a href="/user/addresses/">
                            <div className='py-5 flex border-b-2 border-[#232221]/50 items-center justify-between group cursor-pointer'>
                                <div className='w-fit flex gap-5 items-center'>
                                    <p className='font-heading text-5xl text-[#deb324]'>{addresses}</p>
                                    <div className='text-sm tracking-widest text-white/60 uppercase font-body group-hover:text-[#967c26] transition-smooth'>Saved <br /> address</div>
                                </div>

                                <FiArrowUpRight className='size-5 text-white/40 group-hover:text-[#deb324] transition-smooth' />
                            </div>
                        </a>
                        <a href="/user/cart/">
                            <div className='py-5 flex border-b-2 border-[#232221]/50 items-center justify-between group cursor-pointer'>
                                <div className='w-fit flex gap-5 items-center'>
                                    <p className='font-heading text-5xl text-[#deb324]'>{cartLength}</p>
                                    <div className='text-sm tracking-widest text-white/60 uppercase font-body group-hover:text-[#967c26] transition-smooth'>Cart <br /> items</div>
                                </div>

                                <FiArrowUpRight className='size-5 text-white/40 group-hover:text-[#deb324] transition-smooth' />
                            </div>
                        </a>
                        <div className='py-5 flex border-b-2 border-[#232221]/50 items-center justify-between group cursor-pointer'>
                            <div className='w-fit flex gap-5 items-center'>
                                <p className='font-heading text-5xl text-[#deb324]'>{orders}</p>
                                <div className='text-sm tracking-widest text-white/60 uppercase font-body group-hover:text-[#967c26] transition-smooth'>Orders <br /> placed</div>
                            </div>

                            <FiArrowUpRight className='size-5 text-white/40 group-hover:text-[#deb324] transition-smooth' />
                        </div>
                    </div>
                </div>


                <div className='w-full lg:w-7/10 px-10 lg:px-15'>
                    <div className='flex justify-between items-end w-full border-b border-yellow-400/50 pb-6'>
                        <div className=''>
                            <h1 className='font-subheading text-3xl tracking-wide text-[#c09b25]'>Personal</h1>
                            <h1 className='font-subheading text-3xl italic'>Details</h1>
                        </div>
                        <div className='text-xs uppercase font-body tracking-widest cursor-pointer text-white/70 hover:text-[#e4be43] transition-smooth flex items-center gap-2 group' onClick={() => setIsEditPersonalInfo(true)}>
                            <p>[ edit ]</p>
                            <FaPencilAlt className='size-0 group-hover:size-2.5 transition-smooth' />
                        </div>
                    </div>

                    <div className='w-full py-10 '>
                        <div className='w-full flex max-lg:flex-col gap-5 lg:gap-15'>
                            <div className='w-full lg:w-1/2 pb-2 border-b-2 border-[#232221]/50'>
                                <p className='uppercase text-xs font-body tracking-widest text-[#c09b25]'>Full Name</p>
                                <h1 className='text-xl pt-2 font-body tracking-widest text-white/80'>{user?.name}</h1>
                            </div>
                            <div className='w-full lg:w-1/2 pb-2 border-b-2 border-[#232221]/50'>
                                <p className='uppercase text-xs font-body tracking-widest text-[#c09b25]'>Email Address</p>
                                <h1 className='text-lg pt-2 font-body tracking-widest text-white/80'>{user?.email}</h1>
                            </div>
                        </div>
                        <div className='w-full flex gap-5 lg:gap-15 pt-5 lg:pt-10'>
                            <div className='w-1/2 pb-2 border-b-2 border-[#232221]/50'>
                                <p className='uppercase text-xs font-body tracking-widest text-[#c09b25]'>phone number</p>
                                <h1 className='text-lg pt-2 font-body tracking-widest text-white/80'><span className=''>{user?.phoneNo || ' -'}</span></h1>
                            </div>


                            <div className='w-1/2 pb-2 border-b-2 border-[#232221]/50'>
                                <p className='uppercase text-xs font-body tracking-widest text-[#c09b25]'>Birth Date</p>
                                <h1 className='text-lg pt-2 font-body tracking-widest text-white/80'>
                                    <span className=''>
                                        {
                                            new Date(user.dateOfBirth).toLocaleDateString("en-GB", {
                                                month: "long",
                                                year: "numeric",
                                            }).trim()
                                            || ' -'}

                                    </span>
                                </h1>
                            </div>

                        </div>
                        <div className='w-full flex pt-5 lg:gap-15 lg:pt-10'>
                            <div className='w-full lg:w-1/2 pb-2 border-b-2 border-[#232221]/50'>
                                <p className='uppercase text-xs font-body tracking-widest text-[#c09b25]'>Gender</p>
                                <h1 className='text-lg pt-2 font-body tracking-widest text-white/80'> <span className=''>{user?.gender || ' -'}</span></h1>
                            </div>
                            <div className='w-1/2 max-lg:hidden'>

                            </div>

                        </div>
                    </div>


                    <div className='flex justify-between items-end w-full border-b border-yellow-400/50 pt-20 pb-6'>
                        <div className='max-lg:flex max-lg:gap-2'>
                            <h1 className='font-subheading text-3xl tracking-wide text-[#c09b25]'>Security &</h1>
                            <h1 className='font-subheading text-3xl italic'>Access</h1>
                        </div>

                    </div>


                    <div className='w-full py-10 '>

                        <div className='w-full h-fit flex items-center gap-5 py-4 lg:py-8 px-5 lg:px-10 border-2 border-[#232221]/50 justify-between hover:border-yellow-400/10 mb-8'
                        >
                            <div className='flex items-center gap-5'>
                                <VscWorkspaceTrusted className='text-[#c09b25] size-7' />
                                <div>
                                    <h1 className='text-[4vw] lg:text-lg tracking-wider font-body text-white/80 '>Authentication Status</h1>
                                    <p className='font-body text-white/60 font-extralight tracking-wide text-sm'>Identify verified via primary email.</p>
                                </div>
                            </div>
                            <div className='px-5 py-1.25 border border-green-400/80 rounded-full uppercase text-[10px] font-body tracking-widest text-green-400/80 bg-green-800/10'>secure</div>
                        </div>


                        <div className='w-full h-fit flex items-center gap-5 py-4 lg:py-8 px-5 lg:px-10 border-2 border-[#232221]/50 justify-between hover:border-yellow-400/10 mb-8 group cursor-pointer'
                        >
                            <div className='flex items-center gap-5'>
                                <MdOutlineKey className='group-hover:text-[#c09b25] size-7 transition-smooth text-white/80' />
                                <div>
                                    <h1 className='text-[3.8vw] lg:text-lg tracking-wider font-body text-white/80 group-hover:text-[#c09b25] transition-smooth'>Cryptogrphic Key</h1>
                                    <p className='font-body text-white/60 font-extralight tracking-wide text-sm'>Identify verified via primary email.</p>
                                </div>
                            </div>
                            <FaArrowRight className='group-hover:text-[#c09b25] size-4 transition-smooth text-white/80 group-hover:translate-x-2' />
                        </div>

                        <div className='w-full pt-7 border-t-2 border-[#232221]/50 flex items-center justify-between'>
                            <div className=''>
                                <p className='uppercase text-xs font-body tracking-widest text-[#c09b25]'>Last known presence</p>
                                <h1 className='text-base pt-2 font-body tracking-widest text-white/80'>{new Date(user.lastLogin).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}</h1>
                            </div>
                            <div className=''>
                                <p className='uppercase text-[10px] font-body tracking-widest text-white/70'>Status: <span className='text-green-500'>Active</span></p>
                            </div>
                        </div>


                    </div>


                </div>
            </div>

            <div className='w-full h-[40vh] lg:h-[70vh] relative'>
                <img src="./../../../../profile/screen.webp" className='size-full object-cover absolute z-1 top-0 left-0' alt="" />

                <div className='absolute size-full bg-[#131313]/75   z-3'></div>

                <div className='size-full center flex-col relative z-5 max-lg:px-5'>
                    <h1 className='font-subheading text-[7vw] lg:text-6xl'>Indulge in <span className='italic text-[#deb324]'>Luxury</span></h1>
                    <p className='text-center font-body tracking-wide text-white/70 leading-[110%] pt-5 max-lg:px-5'>Discover our new exclusive collection, curated for those who <br className='max-lg:hidden' /> understand the language of scent.</p>
                    <a href="/shop">
                        <button className='w-fit px-10 backdrop-blur-xs py-3 text-yellow-400/90 center gap-3 bg-[#111]/50 hover:text-[#111]  border hover:bg-yellow-400/90 mt-15 cursor-pointer transition-smooth'>
                            <p className='font-body text-sm font-light uppercase tracking-[0.175em]'>Enter the boutique</p>
                        </button>
                    </a>
                </div>
            </div>

        </main>
    )
}

export default UserProfile