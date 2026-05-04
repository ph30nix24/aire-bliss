import React from 'react'
import { categories } from '../../../utils'
import { FaArrowRight } from 'react-icons/fa6'
const Collection = ({ isMobile }) => {
    if (isMobile) {
        return (
            <section className='w-full h-fit! px-5 py-10 relative z-10'>
                <p className='text-[2.8vw] text-center uppercase text-gradient-gold font-subheading mb-2'>Shop by category</p>
                <h1 className='font-heading text-gradient-silver text-[7vw] font-semibold text-center leading-[90%] px-2'>Find Your Signature Scent</h1>
                <div className="w-50 mx-auto h-0.5 mt-3 bg-linear-to-r rounded-full from-black via-yellow-600 to-black mb-5"></div>
                <div className='w-full h-[70dvh] flex flex-col gap-3 mt-10'>
                    {categories.map((category) => (
                        <div key={category.id} className='w-full h-full relative border-2 border-yellow-500/40 rounded-xl shadow-md overflow-hidden'>
                            <img src={category.mobimg} className='size-full object-cover rounded-xl absolute top-0 left-0 z-1' alt="" />
                            <div className='size-full absolute z-2 bg-linear-to-l from-transparent to-black/80'></div>
                            <div className='size-full p-5 relative z-5 flex flex-col justify-between' >
                                <div>
                                    <category.icon className='text-yellow-400/70 size-5' />
                                    <h1 className='text-white font-heading text-[5vw] mt-1 font-medium'>{category.type}</h1>
                                    <p className='text-white/70 text-[3vw] mt-1 font-body font-light'>{category.discription}</p>
                                </div>
                                <button className='font-body uppercase text-xs mt-10 border-2 border-yellow-400/50 text-yellow-400/80 hover:text-white transition-colors duration-300 px-6 py-2 rounded-md hover:bg-yellow-400/80 cursor-pointer flex items-center gap-2 w-fit'>
                                    {category.btn}
                                    <FaArrowRight className='size-4' />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
    return (
        <section className="w-full h-fit! px-30 py-10 relative z-10">
            <p className='text-sm uppercase text-gradient-gold font-subheading mb-2'>Shop by category</p>
            <h1 className='font-heading text-gradient-silver text-3xl font-semibold'>Find Your Signature Scent</h1>
            <div className="w-10 h-0.5 mt-1 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-5"></div>
            <div className='w-full h-[70dvh] flex gap-3 mt-10'>
                {categories.map((category) => (
                    <div key={category.id} className='w-1/3 h-full relative border-2 border-yellow-500/40 rounded-xl shadow-md overflow-hidden'>
                        <img src={category.img} className='size-full object-cover rounded-xl absolute top-0 left-0 z-1' alt="" />
                        <div className='size-full absolute z-2 bg-linear-to-b from-transparent to-black/70'></div>
                        <div className='size-full flex flex-col justify-end items-center p-8 relative z-5' >
                            <category.icon className='text-yellow-400/70 text-5xl' />
                            <h1 className='text-white font-heading text-2xl mt-3'>{category.type}</h1>
                            <p className='text-white/70 text-sm text-center mt-1 font-body font-light'>{category.discription}</p>
                            <button className='font-body uppercase text-sm mt-5 border-2 border-yellow-400/50 text-yellow-400/80 hover:text-white transition-colors duration-300 px-6 py-2 rounded-md hover:bg-yellow-400/80 cursor-pointer flex items-center gap-2'>
                                {category.btn}
                                <FaArrowRight className='size-4' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Collection