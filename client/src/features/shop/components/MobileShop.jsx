import React from 'react'
import { BsHandbag, BsSliders } from 'react-icons/bs'
import { bestproducts } from '../../../utils'
import StarRating from '../../home/components/StarRating'

const MobileShop = () => {
    return (
        <main className='w-full min-h-screen relative bg-black pt-16'>
            <div className='w-full h-[20dvh] relative'>
                <img src="./shop/shop-2.webp" className='size-full absolute top-0 left-0 z-1' alt="" />
                <div className='size-full absolute z-2 bg-linear-to-l from-transparent to-black/70'></div>
                <div className='size-full px-5 py-2 flex flex-col justify-center relative z-5'>
                    <p className='font-body font-light text-yellow-400/80 capitalize text-[3vw]'>
                        home <span className='px-1 text-white/30'>/</span> shop
                    </p>
                    <h1 className='font-heading text-gradient-silver text-[5vw] font-semibold my-1'>
                        Discover Luxury Fragrances
                    </h1>
                    <div className="w-10 h-0.5 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-3"></div>
                    <p className='font-body text-white/70 font-light text-[3vw]'>
                        Timeless scents crafted with the rarest ingredients <br /> for unforgettable moments.
                    </p>
                </div>
            </div>
            <div className='w-full h-[calc(100vh-68px)]'>
                <div className='w-full px-5 py-2 flex justify-between items-center border border-white/20 bg-[#111]/70 shrink-0'>
                    <button className='w-fit px-3 py-2 flex gap-2.5 border border-white/20'>
                        <BsSliders className='text-yellow-400/70' />
                        <p className='text-xs uppercase text-white font-body'>filter</p>
                    </button>
                    <p className='text-white/50 text-xs uppercase'>128 products</p>
                    <button className='w-fit px-3 py-2 flex gap-2.5 border border-white/20'>
                        <p className='text-xs uppercase text-white font-body'>Sort</p>
                    </button>
                </div>
                <div className='w-full h-full overflow-y-auto product-section flex flex-wrap gap-2 p-2'>
                    {bestproducts.slice(0, 5).map((product) => (
                        <div className='w-[48%] shadow-2xl shadow-yellow-400/0 h-fit border bg-[#222]/40 grow-1 overflow-hidden relative shrink-0' key={product.id}>
                            <img className='w-full h-auto relative' src={product.img} loading='lazy' alt={product.name} />
                            <div className='w-full h-fit mt-2 text-white font-body px-2 py-2 text-center relative z-5'>
                                <h2 className='text-[4vw] uppercase font-subheading font-medium mb-1.5'>{product.name}</h2>
                                <p className='text-sm text-gray-300'>{product.tagline}</p>
                                <p className='font-body py-1 text-[4vw]'>₹ <span className='text-gradient font-semibold font-subheading'> {product.price.toFixed(2)}</span></p>
                                <div className='flex justify-center items-center gap-2'><StarRating rating={product.rating} /> <span className='text-white/70 text-[3vw]'>({product.reviews})</span></div>
                                <button className='w-full h-fit py-2 gap-3 border-2 border-yellow-400/40 text-yellow-400/70 rounded-md mt-2 center hover:bg-yellow-400/80 transition-all duration-300 hover:text-black cursor-pointer text-[4vw]'>
                                    <BsHandbag />
                                    <p className='uppercase text-[3vw] max-[text-sm]'>Add to cart</p>
                                </button>
                            </div>
                        </div>
                    ))}
                    {bestproducts.slice(0, 5).map((product) => (
                        <div className='w-[48%] shadow-2xl shadow-yellow-400/0 h-fit border bg-[#222]/40 grow-1 overflow-hidden relative shrink-0' key={product.id}>
                            <img className='w-full h-auto relative' src={product.img} loading='lazy' alt={product.name} />
                            <div className='w-full h-fit mt-2 text-white font-body px-2 py-2 text-center relative z-5'>
                                <h2 className='text-[4vw] uppercase font-subheading font-medium mb-1.5'>{product.name}</h2>
                                <p className='text-sm text-gray-300'>{product.tagline}</p>
                                <p className='font-body py-1 text-[4vw]'>₹ <span className='text-gradient font-semibold font-subheading'> {product.price.toFixed(2)}</span></p>
                                <div className='flex justify-center items-center gap-2'><StarRating rating={product.rating} /> <span className='text-white/70 text-[3vw]'>({product.reviews})</span></div>
                                <button className='w-full h-fit py-2 gap-3 border-2 border-yellow-400/40 text-yellow-400/70 rounded-md mt-2 center hover:bg-yellow-400/80 transition-all duration-300 hover:text-black cursor-pointer text-[4vw]'>
                                    <BsHandbag />
                                    <p className='uppercase text-[3vw] max-[text-sm]'>Add to cart</p>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='bg-[#111]/70 shrink-0 border-b border-white/10 flex justify-between px-5'>
                    <div className='w-full flex justify-start items-center text-white text-sm font-body py-2 gap-1.5'>
                        <div className='size-10 border border-yellow-500/80 center bg-yellow-500/80 text-[#222]'>1</div>
                        <div className='size-10 border border-yellow-500/80 center'>2</div>
                        <div className='size-10 border border-yellow-500/80 center '>3</div>
                        <div className='size-10 border border-yellow-500/80 center'>4</div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default MobileShop