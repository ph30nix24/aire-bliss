import React, { useState } from 'react'
import StarRating from '../../home/components/StarRating'
import { GoHeart, GoHeartFill } from "react-icons/go";


const ShopItemCard = ({ product, width }) => {

    const [isWishlisted, setIsWishlisted] = useState(false)
    return (
        <div className={` ${width} h-fit p-2  rounded cursor-pointer hover:bg-[#222] transition-smooth  max-lg:shrink-0 relative`} key={product.name}>
            <img src={`./../../${product.img}`} className='w-full hover:' alt="" />

            <button className='absolute text-2xl top-0 right-0 translate-y-1/2 -translate-x-1/2 cursor-pointer text-yellow-400 p-1.5 rounded-full backdrop-blur-sm' onClick={() => setIsWishlisted(!isWishlisted)}>
                { isWishlisted ? <GoHeartFill/> : <GoHeart />}
            </button>

            <div className='w-full h-fit pt-2 lg:pt-5 '>
                <h1 className='font-subheading tracking-wider text-white/90 text-[5vw] md:text-2xl lg:text-xl lg:font-semibold uppercase lg:text-'>
                    {product.name}
                </h1>
                <p className='text-[3vw] lg:text-base text-gray-300 font-body tracking-wider lg:pr-5  font-extralight'>{product.tagline}</p>
                
                <div className='flex justify-start items-center gap-2 py-1'><StarRating rating={product.rating} extraClass={`lg:text-base!`}/></div>


                <div className='w-full flex justify-between items-end mt-5 font-semibold '>
                    <p className='text-[5vw] lg:text-3xl font-heading text-white/80 tracking-wide' id="discounted-price">
                        <span className='text-lg '>₹</span> { (product.price - Math.round(product.price / 100 *20)).toFixed(2) }
                    </p>
                    <p className='font-body font-extralight text-white/50 text-xs  lg:text-sm line-through' id='original-price'>
                       ₹ { product.price.toFixed(2) }
                    </p>
                </div>


                <button className='w-full py-3 lg:py-4 text-yellow-400/90 center gap-3 bg-[#111]/50 hover:text-[#111] border hover:bg-yellow-400/90 mt-3 cursor-pointer transition-smooth'>
                    <p className='font-body text-xs uppercase tracking-widest  font-medium'>Add to cart</p>
                </button>
            </div>
        </div>
    )
}

export default ShopItemCard