// import React from 'react'
// import { BsArrowDown } from "react-icons/bs";
// import { GoArrowUpRight } from "react-icons/go";

// const Hero = () => {
//     return (
//         <section className='z-1 flex justify-between pt-20 px-30 pb-20  bg-linear-to-br from-55% from-[#fcedd2] to-[#f9e3f9]' >
//             {/* left */}
//             <div className="w-1/4 h-full z-2">
//                 <div className="w-full h-4/10 relative flex gap-12 items-center pl-10">
//                     <img src="./hero-products/profile1.jpg" className='size-14 rounded-full object-scale-down p-[1px] border-2 border-amber-400' alt="" />
//                     <img src="./hero-products/profile2.jpg" className='size-14 rounded-full object-scale-down absolute translate-x-7/10 p-[1px] border-2 border-amber-400' alt="" />
//                     <p className='font-body text-lg leading-[115%]'>Happy <br /> customers</p>
//                 </div>
//                 <div className="w-full h-6/10 flex justify-end relative">
//                     <div className='size-40 bg-orange-400/80 absolute bottom-0 left-0 translate-x-1/10 blur-2xl translate-y-[5%]'></div>
//                     <div className='size-30 bg-pink-400/60 absolute top-0 right-0 translate-x-1/4 blur-2xl'></div>
//                     <img src="./hero-products/white-oud.jpg" className='w-70 h-auto rounded-[178px] relative z-5 object-cover' alt="" />
//                 </div>
//             </div>
//             {/* center */}
//             <div className="w-1/2 h-full flex flex-col items-center z-5 pt-5 relative">
//                 <div className="absolute w-60 h-60 bg-amber-600/60 blur-2xl mt-10 rounded-full -z-1 "></div>
//                 <h1 className='text-center capitalize text-[98px] leading-[70%] font-heading font-medium tracking- text-[#222]'>
//                     <span className='text-xl'>discover your </span>
//                     <br />
//                     <span className=''>Signature Scent</span>
//                 </h1>
//                 <p className='text-center mt-8 font-body text-[#333]'>
//                     Discover the perfect fragrance for you with our wide range of perfume.
//                 </p>
//                 <button className='w-fit py-3 px-8 bg-linear-to-br from-[#222] shadow-2xl shadow-yellow-700 to-[#444] hover:scale-105 cursor-pointer text-white font-body mx-auto mt-10 rounded-full font-light tracking-wider'>Buy Now</button>
//                 <p className='font-stylish text-gradient text-7xl px-5 my-10'>essence unleashed</p>
//                 <p className='text-center font-body text-[#333] mb-15'>
//                     Unleash Your
//                     <br />
//                     Essence with the
//                     <br />
//                     Every Spritz
//                 </p>
//                 <button className='w-fit px-1 py-6 rounded-full bg-[#222] cursor-pointer  text-white'>
//                     <div className='h-9 w-fit overflow-hidden'>
//                         <BsArrowDown className='size-8 arrow-animate' />
//                     </div>
//                 </button>
//             </div>

//             {/* right */}
//             <div className="w-1/4 h-full z-2">
//                 <div className="w-full h-8/10 flex items-end relative">
//                     <div className='size-40 bg-orange-400/70 absolute bottom-0 left-0 -translate-x-1/4 blur-2xl'></div>
//                     <div className='size-30 bg-pink-400/90 absolute top-10 right-0 -translate-x-1/4 translate-y-1/2 blur-2xl'></div>
//                     <img src="./hero-products/smoke-whiskey2.jpg" className='w-70 h-8/10 object-cover rounded-[178px] relative z-5 ' alt="" />
//                     <div className='size-30 rounded-full border-3 border-orange-800/20 absolute z-6 top-0 translate-y-3/10 bg-[#fef3e2] right-0 -translate-x-[105%] font-body flex justify-center items-center px-5 text-center text-sm text-[#333]'>
//                         Our Unique Product 100% Organic
//                     </div>
//                 </div>
//                 <div className="w-full h-2/10 flex items-end">
//                     <p className='text-lg border-b-2 flex items-center font-body gap-2 cursor-pointer px-1 hover:scale-110 transition-all duration-300'><span className='pb-[2px]'> Learn More </span> <GoArrowUpRight className='text-base font-bold' /></p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Hero

import React from 'react'
import { PiFlowerLotus } from "react-icons/pi";
import { IoIosSquare } from "react-icons/io";
import { GiPerfumeBottle } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { BsGift } from "react-icons/bs";
import { LiaLeafSolid } from "react-icons/lia";
const Hero = ({ isMobile }) => {
    if (isMobile) {
        return (
            <section className='w-full h-[80dvh]! bg-black relative flex flex-col justify-center items-start pt-10 pb-2'>
                <img src="./hero/mobile.webp" loading='lazy'  className='w-full h-8/10 object-cover absolute top-0 left-0 mt-15 z-1' alt="" />
                <div className='w-full h-8/10 absolute top-0 left-0 z-2 bg-linear-to-b from-transparent from-80% to-black mt-15'></div>
                <div className='w-full h-8/10 center justify-start! pt-9 flex-col relative z-5'>
                    <p className='text-gradient  text-xs font-body uppercase '> Aire Bliss</p>
                    <div className='w-20 h-0.5 rounded-full relative bg-amber-300 mx-auto my-3'><span className='absolute text-yellow-500 p-1 bg-black/40 backdrop-blur-3xl rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <PiFlowerLotus className='size-4 ' /></span>
                    </div>
                    <div className='text-[6.8vw] font-semibold font-heading text-center leading-[110%] tracking-wide'>
                        <span className='text-gradient-silver'>Two Worlds.</span> <br /> <span className='text-gradient-gold'>One Signature.</span>
                    </div>
                    <div className='w-35 h-0.5 rounded-full relative bg-amber-300 mx-auto mt-3'><span className='absolute text-yellow-500 p-0.5 bg-black/40 backdrop-blur-3xl rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45'> <IoIosSquare className='size-4 ' /></span>
                    </div>
                    <p className='text-white/70 text-center text-sm font-light font-body mt-3'>Discover fragrance crafted for <br/> every mood, every moment.</p>
                    <div className='center gap-5 mt-5 mb-15 '>
                        <button className='hero-button-mb bg-black hover:bg-yellow-500/50'>Shop men</button>
                        <button className='hero-button-mb bg-[#9E5659] hover:bg-pink-500'>shop women</button>
                    </div>
                </div>
                <div className='w-[95%] mx-auto h-fit border border-yellow-400/20 relative px-1 py-5 center gap-2 z-5 bg-black rounded-md'>
                <div className='maindiv'>
                    <div className='center'><GiPerfumeBottle  className='size-8 text-yellow-500/70' /></div>
                    <div className='condiv'>
                        <h1 className='heading'>Premium Quality</h1>
                    </div>
                </div>
                <div className='maindiv'>
                    <div className='center'><CiClock2  className='size-7 text-yellow-500/80' /></div>
                    <div className='condiv'>
                        <h1 className='heading'>Long <br/> Lasting</h1>
                    </div>
                </div>
                <div className='maindiv'>
                    <div className='center'><BsGift  className='size-6 text-yellow-500/80' /></div>
                    <div className='condiv'>
                        <h1 className='heading'>Luxury Packing</h1>
                    </div>
                </div>
                <div className='maindiv border-none!'>
                    <div className='center'><LiaLeafSolid  className='size-7 text-yellow-500/70 rotate-12' /></div>
                    <div className='condiv'>
                        <h1 className='heading'>Cruelty <br/> free</h1>
                    </div>
                </div>
                
            </div>
            </section>
        )
    }
    return (
        <section className='w-full h-screen pt-18 bg-black'>
            <div className="w-full h-8/10 border-b border-yellow-400/20 relative">
                <img src="./hero/hero.webp" className='size-full object-cover absolute top-0 left-0 z-1' loading='lazy' alt="hero-section-image" />
                <div className='absolute size-full top-0 left-0 bg-linear-to-r from-transparent via-black/30 to-transparent z-2'></div>
                <div className='w-full h-full center flex-col relative z-5'>
                    <p className='text-gradient  text-base font-body uppercase '> Aire Bliss</p>
                    <div className='w-30 h-0.5 rounded-full relative bg-amber-300 mx-auto my-3'><span className='absolute text-yellow-500 p-1 bg-black/90 backdrop-blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <PiFlowerLotus className='size-5 ' /></span>
                    </div>
                    <div className='text-5xl font-medium font-heading text-center leading-[110%] tracking-wide mt-5'>
                        <span className='text-gradient-silver'>Two Worlds.</span> <br /> <span className='text-gradient-gold'>One Signature.</span>
                    </div>
                    <div className='w-50 h-0.5 rounded-full relative bg-amber-300 mx-auto mt-6'><span className='absolute text-yellow-500 p-0.5 bg-black/90 backdrop-blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45'> <IoIosSquare className='size-4 ' /></span>
                    </div>
                    <p className='text-white/70 text-center font-body mt-3'>Discover fragrance crafted for <br/> every mood, every moment.</p>
                    <div className='center gap-5 mt-25 mb-15 '>
                        <button className='hero-button bg-black hover:bg-yellow-500/50'>Shop men</button>
                        <button className='hero-button bg-[#9E5659] hover:bg-pink-500'>shop women</button>
                    </div>
                </div>
            </div>
            <div className='w-full h-2/10 border-b border-yellow-400/20 relative px-30 py-10 center gap-5'>
                <div className='w-1/4 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    <div className='center'><GiPerfumeBottle  className='size-14 text-yellow-500/70' /></div>
                    <div className='text-white pr-10 font-body '>
                        <h1 className='text-sm uppercase'>Premium Quality</h1>
                        <p className='text-white/80 text-sm mt-1 font-light tracking-wide'>Finest ingredients crafted to perfection</p>
                    </div>
                </div>
                <div className='w-1/4 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    <div className='center'><CiClock2  className='size-14 text-yellow-500/80' /></div>
                    <div className='text-white pr-10 font-body '>
                        <h1 className='text-sm uppercase'>Long Lasting</h1>
                        <p className='text-white/80 text-sm mt-1 font-light tracking-wide'>Fragrances that stay with you all day </p>
                    </div>
                </div>
                <div className='w-1/4 h-full center gap-5 px-5 border-r-2  border-white/20'>
                    <div className='center'><BsGift  className='size-12 text-yellow-500/80' /></div>
                    <div className='text-white pr-10 font-body '>
                        <h1 className='text-sm uppercase'>Luxury Packing</h1>
                        <p className='text-white/80 text-sm mt-1 font-light tracking-wide'>Elegent design for a premium experience</p>
                    </div>
                </div>
                <div className='w-1/4 h-full center gap-4 px-5'>
                    <div className='center'><LiaLeafSolid  className='size-14 text-yellow-500/70 rotate-12' /></div>
                    <div className='text-white pr-10 font-body '>
                        <h1 className='text-sm uppercase'>Cruelty free</h1>
                        <p className='text-white/80 text-sm mt-1 font-light tracking-wide'>We care for beauty and the planet</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Hero