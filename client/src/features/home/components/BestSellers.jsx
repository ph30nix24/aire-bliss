import React from 'react'
import { bestproducts } from '../../../utils'
import StarRating from './StarRating'
import { BsHandbag } from "react-icons/bs";

const BestSellers = ({ isMobile }) => {
    if (isMobile) {
        return (
            <section className='w-full h-fit! px-5 py-10 relative z-10'>
            <p className='text-[2.8vw] text-center uppercase text-gradient-gold font-subheading'>our favourite</p>
            <h1 className='font-heading text-gradient-silver text-[7vw] font-semibold text-center'>Best Sellers</h1>
            <div className="w-50 mx-auto h-0.5 mt-1 bg-linear-to-r rounded-full from-black via-yellow-600 to-black mb-5"></div>
            <div className='w-full h-fit flex gap-3 overflow-x-scroll best-sellers'>
                {bestproducts.slice(0, 5).map((product) => (
                    <div className='w-1/2 shadow-2xl shadow-yellow-400/0 h-fit border bg-[#222]/40 border-amber-400/30 rounded-2xl overflow-hidden relative shrink-0' key={product.id}>
                        <img className='w-full h-auto relative' src={product.img} loading='lazy' alt={product.name} />
                        <div className='w-full h-fit mt-2 text-white font-body px-2 py-2 text-center relative z-5'>
                            <h2 className='text-[4vw] uppercase font-subheading font-medium mb-1.5'>{product.name}</h2>
                            <p className='text-sm text-gray-300'>{product.tagline}</p>
                            <p className='font-body py-1 text-[4vw]'>₹ <span className='text-gradient font-semibold font-subheading'> {product.price.toFixed(2)}</span></p>
                            <div className='flex justify-center items-center gap-2'><StarRating rating={product.rating}/> <span className='text-white/70 text-[3vw]'>({product.reviews})</span></div>
                            <button className='w-full h-fit py-2 gap-3 border-2 border-yellow-400/40 text-yellow-400/70 rounded-md mt-2 center hover:bg-yellow-400/80 transition-all duration-300 hover:text-black cursor-pointer text-[4vw]'>
                                <BsHandbag />
                                <p className='uppercase text-[3vw] max-[text-sm]'>Add to cart</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        )
    }
    return (
        <section className='w-full h-fit! px-30 py-10 relative z-10'>
            <p className='text-sm uppercase text-gradient-gold font-subheading mb-2'>our favourite</p>
            <h1 className='font-heading text-gradient-silver text-3xl font-semibold'>Best Sellers</h1>
            <div className="w-10 h-0.5 mt-1 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-5"></div>
            <div className='w-full h-fit flex gap-5 '>
                {bestproducts.slice(0, 5).map((product) => (
                    <div className='w-1/5 shadow-2xl shadow-yellow-400/0 h-fit pb-2 bg-[#222]/40 overflow-hidden relative' key={product.id}>
                        <img className='w-full h-auto relati' src={product.img} alt={product.name} />
                        <div className='w-full h-fit mt-2 text-white font-body px-5 py-3 text-center relative z-5'>
                            <h2 className='text-xl uppercase font-subheading font-medium'>{product.name}</h2>
                            <p className='text-sm text-gray-300 px-5'>{product.tagline}</p>
                            <p className='font-body py-1 text-xl'>Rs. <span className='text-gradient font-semibold font-subheading'> {product.price.toFixed(2)}</span></p>
                            <div className='flex justify-center items-center gap-2'><StarRating rating={product.rating}/> <span className='text-white/70 text-sm'>({product.reviews})</span></div>
                            <button className='w-full h-fit py-2 gap-3 border-2 border-yellow-400/40 text-yellow-400/70 rounded-md mt-2 center hover:bg-yellow-400/80 transition-all duration-300 hover:text-black cursor-pointer'>
                                <BsHandbag />
                                <p className='uppercase text-sm'>Add to cart</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BestSellers