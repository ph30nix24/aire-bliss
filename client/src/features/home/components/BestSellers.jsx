import React from 'react'
import { bestproducts } from '../../../utils'
import StarRating from './StarRating'
import { BsHandbag } from "react-icons/bs";

const BestSellers = () => {
    return (
        <section className='w-full h-fit! px-30 py-10 relative z-10'>
            <p className='text-sm uppercase text-gradient-gold font-body mb-2'>our favourite</p>
            <h1 className='font-heading text-gradient-silver text-3xl font-semibold'>Best Sellers</h1>
            <div className="w-10 h-0.5 mt-1 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-5"></div>
            <div className='w-full h-fit flex gap-5 '>
                {bestproducts.slice(0, 5).map((product) => (
                    <div className='w-1/5 shadow-2xl shadow-yellow-400/0 h-fit border border-amber-400/50 rounded-2xl overflow-hidden relative' key={product.id}>
                        <img className='w-full h-auto relati' src={product.img} alt={product.name} />
                        <div className='w-full h-fit mt-2 text-white font-body px-5 py-3 text-center relative z-5 bg-yellow-900/10'>
                            <h2 className='text-xl uppercase font-body font-medium'>{product.name}</h2>
                            <p className='text-sm text-gray-300 px-5'>{product.tagline}</p>
                            <p className='font-body py-1 text-xl'>Rs. <span className='text-gradient font-semibold'> {product.price.toFixed(2)}</span></p>
                            <p className='flex justify-center items-center gap-2'><StarRating rating={product.rating}/> <span className='text-white/70 text-sm'>({product.reviews})</span></p>
                            <button className='w-full h-fit py-2 gap-3 border-2 border-yellow-400/50 text-yellow-400/80 rounded-md mt-2 center hover:bg-yellow-400/80 transition-all duration-300 hover:text-black cursor-pointer'>
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