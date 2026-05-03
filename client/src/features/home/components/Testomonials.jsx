import React, { useState } from 'react'
import { testimonials } from '../../../utils'
import { PiUserCircleCheckThin } from "react-icons/pi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoHappyOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import { FaAward } from "react-icons/fa6";

const Testomonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <section className='w-full h-fit! px-30 py-10 relative z-10'>
            <p className='text-sm uppercase text-gradient-gold font-body mb-2'>Testimonials</p>
            <h1 className='font-heading text-gradient-silver text-3xl font-semibold'>Loved by our customers</h1>
            <div className="w-10 h-0.5 mt-1 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-5"></div>
            <div className='w-full h-fit flex gap-3 mt-10 overflow-x-hidden'
            >
                {testimonials.map((testimonial) => (
                    <div className={`size-[27.5vw] shrink-0 relative rounded-xl border border-yellow-400/30 overflow-hidden transition-all duration-500 ease-in-out `} 
                    key={testimonial.id}
                    style={{ transform: `translateX(calc(-${currentIndex} * (27.5vw + 12px)))` }}
                    >
                        <img src={testimonial.img} alt={testimonial.name} className='w-full h-full object-cover absolute top-0 left-0 z-1' />
                        <div className='size-full bg-linear-to-r from-black/80 to-transparent absolute z-2'></div>
                        <div className='size-full p-5 relative z-3 flex flex-col justify-between'>
                            <p className='w-full text-start '><BiSolidQuoteAltLeft className='text-[#7a611c] text-4xl mb-3' /></p>
                            <div className='w-full '    >
                                <PiUserCircleCheckThin className='size-15 text-yellow-500/40' />
                                <div className='flex items-center gap-1 mt-2 mb-4'>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        index < testimonial.stars
                                            ? <FaStar key={index} className='text-yellow-400/70 size-3' />
                                            : <FaRegStar key={index} className='text-yellow-400/70 size-3' />
                                    ))}
                                </div>
                                <p className='w-full text-sm font-body text-white/70 font-light pr-50'>{testimonial.feedback}</p>
                                <div className='w-30 h-0.5 bg-yellow-400/40 mt-4 mb-5'></div>
                                <p className='w-full text-sm font-body text-yellow-400/70 font-light'>{testimonial.name}</p>
                                <p className='w-full text-xs font-body text-white/50 font-light'>{testimonial.place}</p>
                            </div>
                            <p className='w-full flex justify-end'><BiSolidQuoteAltRight className='text-[#7a611c] text-4xl mb-3' /></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full h-fit border mt-3 border-yellow-400/40 rounded-2xl relative py-8 center gap-5 px-5 bg-[#222]/30'>
                <div className='w-1/4 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    <div className='center'><IoHappyOutline  className='size-16 text-yellow-500/70 border-2 border-yellow-500/70 p-4 rounded-full' /></div>
                    <div className='text-white font-body'>
                        <h1 className='text-2xl uppercase font-heading text-yellow-500/70 font-semibold'>10k+</h1>
                        <p className='text-white text-sm mt-1 font-light tracking-wide'>Happy Customers</p>
                        <p className='text-white/60 text-xs mt-1 font-light tracking-wide'>Trust and love our fragrances</p>
                    </div>
                </div>
                <div className='w-1/4 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    <div className='center'><FaRegStar  className='size-16 text-yellow-500/70 border-2 border-yellow-500/70 p-4 rounded-full' /></div>
                    <div className='text-white font-body'>
                        <h1 className='text-2xl uppercase font-heading text-yellow-500/70 font-semibold'>4.9/5</h1>
                        <p className='text-white text-sm mt-1 font-light tracking-wide'>Average Rating</p>
                        <p className='text-white/60 text-xs mt-1 font-light tracking-wide'>Based on thousands of reviews</p>
                    </div>
                </div>
                <div className='w-1/4 h-full center gap-4 px-5 border-r-2  border-white/20'>
                    <div className='center'><GoComment  className='size-16 text-yellow-500/70 border-2 border-yellow-500/70 p-4 rounded-full' /></div>
                    <div className='text-white font-body pr-10'>
                        <h1 className='text-2xl uppercase font-heading text-yellow-500/70 font-semibold'>2k+</h1>
                        <p className='text-white text-sm mt-1 font-light tracking-wide'>Customer Reviews</p>
                        <p className='text-white/60 text-xs mt-1 font-light tracking-wide'>From verified buyers</p>
                    </div>
                </div>
                <div className='w-1/4 h-full center gap-4 px-5'>
                    <div className='center'><FaAward  className='size-16 text-yellow-500/70 border-2 border-yellow-500/70 p-4 rounded-full' /></div>
                    <div className='text-white font-body'>
                        <h1 className='text-2xl uppercase font-heading text-yellow-500/70 font-semibold'>100%</h1>
                        <p className='text-white text-sm mt-1 font-light tracking-wide'>Satisfaction Guarantee</p>
                        <p className='text-white/60 text-xs mt-1 font-light tracking-wide'>We are here for you always</p>
                    </div>
                </div>
                

            </div>
            <div className='w-full h-fit center text-white mt-3 gap-1'>
                {testimonials.slice(0, 4).map((testimonial) => (
                    <div className={`size-3 rounded-full  ${currentIndex === testimonial.id - 1 ? 'bg-yellow-500/70' : 'bg-white/30'}`} onClick={() => setCurrentIndex(testimonial.id - 1)} key={testimonial.id}></div>
                ))}
            </div>
        </section>
    )
}

export default Testomonials