import React from 'react'
import toast from 'react-hot-toast'
import StarRating from './StarRating'
import { BsHandbag } from "react-icons/bs";
import { useProduct } from '../../shop/hooks/useProducts';
import Loader from '../../../components/Loader';
import { useUserData } from '../../users/hooks/useUserData';

const BestSellers = ({ isMobile }) => {

    const { products, loading } = useProduct();
    const { handleAddItemCart } = useUserData();

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

    if (loading) {
        return (
            <div className='w-full h-screen bg-[#131313] center'>
                <Loader />
            </div>
        )
    }
    if (isMobile) {
        return (
            <section className='w-full h-fit! px-5 py-10 relative z-10'>
                <p className='text-[2.8vw] text-center uppercase text-gradient-gold font-subheading'>our favourite</p>
                <h1 className='font-heading text-gradient-silver text-[7vw] font-semibold text-center'>Best Sellers</h1>
                <div className="w-50 mx-auto h-0.5 mt-1 bg-linear-to-r rounded-full from-black via-yellow-600 to-black mb-5"></div>
                <div className='w-full h-fit flex gap-3 overflow-x-scroll best-sellers'>
                    {products.slice(0, 5).map((product) => (
                        <div className='w-3/5 h-[47vh] shadow-2xl shadow-yellow-400/0 border bg-[#222]/40 border-amber-400/30  overflow-hidden relative shrink-0 ' key={product._id}>
                            <a href={`/products/${product._id}`} className='w-full h-full flex flex-col justify-between'>
                                <div>
                                    <img className='w-full h-auto relative' src={product.mainImage} loading='lazy' alt={product.productName} />
                                    <div className='w-full h-fit mt-2 text-white font-body px-2 py-2 text-center relative z-5'>
                                        <h2 className='text-[4vw] uppercase font-subheading font-medium mb-1.5'>{product.productName}</h2>
                                        <p className='text-sm text-gray-300'>{product.fragranceNotes.join(', ')}</p>
                                    </div>
                                </div>

                                <div className='text-white font-body px-2 pb-2 text-center relative z-5'>
                                    <p className='font-body py-1 text-[5vw]'>₹ <span className='text-gradient font-semibold font-subheading'> {product.price.toFixed(2)}</span></p>
                                    <div className='flex justify-center items-center gap-2'><StarRating rating={product.averageRating} /> <span className='text-white/70 text-[3vw]'>({product.ratings.length})</span></div>
                                    <button className='w-full h-fit py-2 gap-3 border-2 border-yellow-400/40 text-yellow-400/70 rounded-md mt-2 center hover:bg-yellow-400/80 transition-all duration-300 hover:text-black cursor-pointer text-[4vw]'>
                                        <BsHandbag />
                                        <p className='uppercase text-[3vw] max-[text-sm]'>Add to cart</p>
                                    </button>
                                </div>
                            </a>
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
                {products.slice(0, 5).map((product) => (
                    // <a href={`/products/${product._id}`} className='w-1/5' key={product._id}>
                        <div className='w-1/5 shadow-2xl shadow-yellow-400/0 h-[55vh] pb-2 bg-[#222]/40 overflow-hidden relative flex flex-col justify-between' key={product._id}>
                            <div>
                                <a href={`/products/${product._id}`}>
                                    <img className='w-full h-auto relati' src={product.mainImage} alt={product.productName} />
                                </a>
                                <div className='w-full h-fit mt-2 text-white font-body px-5 py-3 text-center relative z-5'>
                                    <h2 className='text-xl uppercase font-subheading font-medium'>{product.productName}</h2>
                                    <p className='text-sm text-gray-300 px-5'>{product.fragranceNotes.join(', ')}</p>

                                </div>
                            </div>
                            <div className='text-white font-body px-5 pb-3 text-center relative z-5'>
                                <p className='font-body py-1 text-xl'>Rs. <span className='text-gradient font-semibold font-subheading'> {product.price.toFixed(2)}</span></p>
                                <div className='flex justify-center items-center gap-2'><StarRating rating={product.averageRating} /> <span className='text-white/70 text-sm'>({product.ratings.length})</span></div>
                                <button className='w-full h-fit py-3 gap-3 border-2 border-yellow-400/40 text-yellow-400/70 mt-3 center hover:bg-yellow-400/80 transition-all duration-300 hover:text-black cursor-pointer' onClick={() => handleAddToCart(product._id)}>
                                    <BsHandbag />
                                    <p className='uppercase text-[10px] tracking-[0.175em]'>Add to cart</p>
                                </button>
                            </div>
                        </div>
                    // </a>
                ))}
            </div>
        </section>
    )
}

export default BestSellers