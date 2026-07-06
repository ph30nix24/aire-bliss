import React, { useState } from 'react'
import StarRating from '../../home/components/StarRating'
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useUserData } from '../../users/hooks/useUserData';
import toast from 'react-hot-toast';

const ShopItemCard = ({ product, width, height }) => {
    const { handleAddItemCart, handleAddItemInWishlist } = useUserData()
    const [isWishlisted, setIsWishlisted] = useState(false)
    const handleAddToCart = async (productID) => {
        try {
            const data = await handleAddItemCart(productID);
            if (!data.success) {
                toast.error(data.message);
                throw new Error(data.message);
            }
            toast.success(data.message);
        } catch (error) {
            toast.error('Failed to add item to cart. Please try again later.');
            console.error('Error adding item to cart:', error);
        }
    }

    const handleWishlistBtn = async (productId) => {
        try {
            const data = await handleAddItemInWishlist(productId);
            if (!data.success) {
                toast.error(data.message);
                throw new Error(data.message);
            }
            setIsWishlisted(true)
            toast.success(data.message);
        } catch (error) {
            toast.error('Failed to add item to cart. Please try again later.');
            console.error('Error adding item to cart:', error);
        }
    }

    return (
        <div className={` ${width} h-fit ${height} flex flex-col justify-between p-2  rounded cursor-pointer hover:bg-[#222] transition-smooth  max-lg:shrink-0 relative`} key={product.productName}>
            <div className='w-full'>
                <a href={`/products/${product._id}`}>
                    <img src={`${product.mainImage}`} className='w-full hover:' alt="" />
                </a>

                <button className='absolute text-2xl top-0 right-0 translate-y-1/2 -translate-x-1/2 cursor-pointer text-red-500 p-1.5 rounded-full backdrop-blur-sm' onClick={() => handleWishlistBtn(product._id)}>
                    {isWishlisted ?  <GoHeartFill /> : <GoHeart />}
                </button>

                <div className='w-full h-fit pt-2 lg:pt-5 '>
                    <h1 className='font-subheading tracking-wider text-white/90 text-[4.6vw] md:text-2xl lg:text-xl lg:font-semibold uppercase'>
                        {product.productName}
                    </h1>
                    <p className='text-[3.4vw] lg:text-base text-gray-300 font-body tracking-wider lg:pr-5  font-extralight'>{product.fragranceNotes.join(', ')}</p>

                    <div className='flex justify-start items-center gap-2 py-1'><StarRating rating={product.averageRating} extraClass={`lg:text-base!`} /></div>


                </div>
            </div>
            <div className='w-full h-fit'>
                <div className='w-full flex justify-between items-end mt-5 font-semibold '>
                    <p className='text-[5vw] lg:text-3xl font-heading text-white/80 tracking-wide' id="discounted-price">
                        <span className='text-lg '>₹</span> {(product.price - product.discount).toFixed(2)}
                    </p>
                    <p className='font-body font-extralight text-white/50 text-xs  lg:text-sm line-through' id='original-price'>
                        ₹ {product.price.toFixed(2)}
                    </p>
                </div>


                <button className='w-full py-3 lg:py-4 text-yellow-400/90 center gap-3 bg-[#111]/50 hover:text-[#111] border hover:bg-yellow-400/90 mt-3 cursor-pointer transition-smooth' onClick={() => handleAddToCart(product._id)}>
                    <p className='font-body text-xs uppercase tracking-widest  font-medium'>Add to cart</p>
                </button>
            </div>
        </div>
    )
}

export default ShopItemCard