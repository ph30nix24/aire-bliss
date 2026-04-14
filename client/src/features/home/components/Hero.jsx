import React from 'react'
import { BsArrowDown } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
    return (
        <section className='z-1 flex justify-between pt-20 px-30 pb-20'>
            <div className='size-full absolute top-0 left-0 z-1'>
                <img src="./hero-products/bg-img.png" className='size-full object-cover' alt="" />
            </div>
            {/* left */}
            <div className="w-1/4 h-full z-2">
                <div className="w-full h-4/10 relative flex gap-12 items-center pl-10">
                    <img src="./hero-products/profile1.jpg" className='size-14 rounded-full object-scale-down p-[1px] border-2 border-amber-400'  alt="" />
                    <img src="./hero-products/profile2.jpg" className='size-14 rounded-full object-scale-down absolute translate-x-7/10 p-[1px] border-2 border-amber-400'  alt="" />
                    <p className='font-body text-lg leading-[115%]'>Happy <br /> customers</p>
                </div>
                <div className="w-full h-6/10 flex justify-end relative">
                    <div className='size-40 bg-orange-400/70 absolute bottom-0 left-0 translate-x-1/4 blur-3xl'></div>
                    <div className='size-30 bg-pink-400/70 absolute top-0 right-0 translate-x-1/4 blur-3xl'></div>
                    <img src="./hero-products/white-oud.jpg" className='w-70 h-auto rounded-[178px] relative z-5 object-cover' alt="" />
                </div>
            </div>
            {/* center */}
            <div className="w-1/2 h-full flex flex-col items-center z-5">
                <h1 className='text-center capitalize text-[68px] leading-[90%] font-heading font-semibold tracking-wider text-[#222]'>
                    <span className='text-xl'>discover your </span>
                    <br />
                    <span className=''>Signature Scent</span>
                </h1>
                <p className='text-center mt-5 font-body text-[#333]'>
                    Discover the perfect fragrance for you with our wide range of perfume.
                </p>
                <button className='w-fit py-3 px-8 bg-linear-to-br from-[#222] shadow-2xl shadow-yellow-700 to-[#444] hover:scale-105 cursor-pointer text-white font-body mx-auto mt-10 rounded-full font-light tracking-wider'>Buy Now</button>
                <p className='font-stylish text-gradient text-7xl px-5 my-10'>essence unleashed</p>
                <p className='text-center font-body text-[#333] mb-15'>
                    Unleash Your
                    <br />
                    Essence with the
                    <br />
                    Every Spritz
                </p>
                <button className='w-fit px-1 py-6 rounded-full bg-[#222] cursor-pointer  text-white'>
                    <div className='h-9 w-fit overflow-hidden'>
                        <BsArrowDown className='size-8 arrow-animate' />
                    </div>
                </button>
            </div>

            {/* right */}
            <div className="w-1/4 h-full z-2">
                <div className="w-full h-8/10 flex items-end relative">
                    <div className='size-40 bg-orange-400/70 absolute bottom-0 left-0 -translate-x-1/4 blur-3xl'></div>
                    <div className='size-30 bg-pink-400/70 absolute top-10 right-0 -translate-x-1/4 translate-y-1/2 blur-3xl'></div>
                    <img src="./hero-products/smoke-whiskey2.jpg" className='w-70 h-8/10 object-cover rounded-[178px] relative z-5 ' alt="" />
                    <div className='size-30 rounded-full border-3 border-orange-800/20 absolute z-6 top-0 translate-y-3/10 bg-[#fef3e2] right-0 -translate-x-[105%] font-body flex justify-center items-center px-5 text-center text-sm text-[#333]'>
                        Our Unique Product 100% Organic
                    </div>
                </div>
                <div className="w-full h-2/10 flex items-end">
                <p className='text-lg border-b-2 flex items-center font-body gap-2 cursor-pointer px-1 hover:scale-110 transition-all duration-300'><span className='pb-[2px]'> Learn More </span> <GoArrowUpRight className='text-base font-bold'/></p>
                </div>
            </div>
        </section>
    )
}

export default Hero