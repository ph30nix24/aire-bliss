import React from 'react'

const ProductCard = ({ product, width }) => {
    return (
        <div className={` ${width} h-fit p-2  rounded cursor-pointer hover:bg-[#222] transition-smooth`} key={product.name}>
            <img src={`./../../${product.img}`} className='w-full hover:' alt="" />

            <div className='w-full h-fit pt-5 '>
                <h1 className='font-subheading tracking-wide text-white/90 text-xl uppercase'>
                    {product.name} perfume <span className='capitalize'>50ml</span> for men
                </h1>
                {/* <p className='text-xs font-body text-white/70 uppercase pt-2 font-extralight'>{product.tagline}</p> */}

                <p className='text-base tracking-wider font-body text-yellow-400/80 uppercase pt-10'>&#x20B9; {product.price}</p>

                <button className='w-full py-4 text-yellow-400/90 center gap-3 bg-[#111]/50 hover:text-[#111] border hover:bg-yellow-400/90 mt-3 cursor-pointer transition-smooth'>
                    <p className='font-body text-xs uppercase tracking-widest  font-medium'>Add to cart</p>
                </button>
            </div>
        </div>
    )
}

export default ProductCard