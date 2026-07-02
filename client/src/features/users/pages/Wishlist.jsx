import React, { useEffect } from 'react'
import { IoBagHandle } from "react-icons/io5";
import Footer from '../../../components/Footer';
import { RxCross2 } from 'react-icons/rx';
import { useUserData } from '../../users/hooks/useUserData'
import Loader from '../../../components/Loader';
import { GoHeart } from 'react-icons/go';

const Wishlist = () => {

    const { wishlist, wishListLoading, handleGetWishlist } = useUserData()
    useEffect(() => {
        handleGetWishlist()
    }, [])

    if (wishListLoading) {
        return (
            <div className='w-full h-screen bg-[#131313] center'>
                <Loader />
            </div>
        )
    }
    console.log(wishlist)

    if (wishlist.length === 0 && !wishListLoading) {
        return (
            <main className={`w-full min-h-screen bg-[#080808] `}>
                <div className='w-full h-screen center flex-col pb-20'>
                    <div className='w-4/5 lg:size-125 relative'>
                        <img src={`../../../../wishlist/MEWL.webp`} className='size-full relative z-1' alt="" />
                        <div className='size-full absolute top-0 left-0 z-5 bg-radial from-transparent to-90% to-[#080808]'></div>
                    </div>
                    <h1 className='text-[5.5vw] italic md:text-4xl font-subheading text-white/80 tracking-wide'>Your wishlist is empty</h1>
                    <p className='text-white/60 font-body mt-4 font-light text-center tracking-wider max-md:text-sm'>Looks like you haven't added anything to <br /> your wishlist.</p>
                    <div className='w-fit flex items-center gap-2 mt-5'>
                        <div className='size-1 md:size-1.5 rounded-full bg-yellow-400/90 '></div>
                        <div className='w-15 md:w-30 h-px bg-linear-to-r from-transparent to-yellow-400/80 '></div>
                        <div className='rounded-full'><GoHeart className='text-yellow-400/90 size-4 md:size-6' /></div>
                        <div className='w-15 md:w-30 h-px bg-linear-to-l from-transparent to-yellow-400/80 '></div>
                        <div className='size-1 md:size-1.5 rounded-full bg-yellow-400/90 '></div>
                    </div>
                    <a href="/shop">
                        <button className='w-fit bg-yellow-400 text-[#080808] text-[10px] md:text-xs uppercase tracking-[0.175em] font-body mt-10 lg:mt-5 px-10 py-3 hover:bg-yellow-400/90 cursor-pointer'>Explore Collection</button>
                    </a>
                </div>
            </main>
        )
    }
    return (
        <main className='bg-[#131313] text-white overflow-hidden'>

            <div className='w-full h-[75vh] relative'>
                <img src="./../../../../wishlist/wishlistBg.webp" className='absolute size-full object-cover z-2' alt="" />

                <div className='size-full bg-radial-[at_center_top] from-[#131313]/80 to-[#131313] absolute to-70% z-4'></div>

                <div className='size-full flex justify-end pb-20 items-center relative z-5 flex-col '>
                    <h1 className='text-[10vw] lg:text-[102px] text-white/90 font-subheading italic text-center leading-[100%] capitalize'>The private <br /> collection</h1>
                    <p className='lg:w-150 max-lg:text-sm md:px-30 font-body tracking-widest italic text-center text-white/60 pt-10 px-5'>A celestial archieve of olfactory dreams. These chosen scents represent the essence of your journey-a poetic symphony of glass, light, and the rarest botanical notes.</p>
                </div>
            </div>

            <div className='w-full pt-20 px-5 lg:px-20 h-fit'>
                {
                    wishlist.map((product, index) => (
                        <div className='w-full flex gap-5 lg:gap-15 items-center lg:h-180 mb-40 group max-lg:flex-col'>
                            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} h-full center relative z-4 max-lg:h-90`}>
                                <div className={`w-8/10 lg:w-9/10 ${index % 2 === 0 ? '[clip-path:polygon(0_0,100%_7%,95%_100%,5%_96%)]' : '[clip-path:polygon(0_9%,100%_0%,96%_93%,6%_99%)]'} h-full relative overflow-hidden`}>
                                    <img src={`${product.product.mainImage}`} className='w-full h-full object-cover group-hover:scale-105 transition-smooth z-1' alt="" />
                                    <div className='size-full absolute bg-[#131313]/40 z-5 top-0 left-0'></div>

                                </div>
                                <div className={`absolute bottom-0 font-heading text-4xl lg:text-6xl text-white/10  -z-1 -translate-y-[170%] lg:-translate-y-[200%]  ${index % 2 === 0 ? ' translate-x-[30%] lg:translate-x-[40%] right-0 rotate-90' : 'left-0 -translate-x-[30%] lg:-translate-x-[40%] -rotate-90'}`}>Aire Bliss</div>
                            </div>
                            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'order-2' : 'order-1'} max-lg:px-10 lg:pr-10 relative`}>

                                <button className='text-white/70 hover:text-yellow-400/90 absolute top-0 right-0 -translate-x-full text-xl cursor-pointer'>
                                    <RxCross2 />
                                </button>

                                <p className='text-xs uppercase font-body tracking-[0.275em] text-yellow-400 font-medium pb-2 lg:pb-4'>Item - {index + 1}</p>
                                <h1 className='text-4xl lg:text-7xl font-subheading italic capitalize'>{product.product.productName}</h1>
                                <p className='lg:pl-5 lg:my-10 my-3 max-lg:text-sm text-base text-white/60 font-extralight italic font-body tracking-wider lg:border-l-2 border-yellow-400/20'>"<span className='lg:hidden'>{product.tagline}</span> <span className='max-lg:hidden'>{product.product.shortDescription}</span>"</p>

                                <div className='w-full flex justify-between items-center mt-5 lg:mt-20 pb-5 lg:pb-10 border-b-2 border-yellow-400/20'>
                                    <div className=''>
                                        <h3 className='text-[10px] text-xs uppercase font-body tracking-[0.275em] text-white/80 font-bold pb-0.5 lg:pb-2'>size</h3>
                                        <p className='text-sm lg:text-base uppercase font-body font-extralight tracking-widest'>{product.product.size}</p>
                                    </div>
                                    <div className=''>
                                        <h3 className='text-[10px] text-xs uppercase font-body tracking-[0.275em] text-white/80 font-bold pb-0.5 lg:pb-2 text-end'>price</h3>
                                        <p className='text-sm lg:text-base uppercase font-body font-extralight tracking-widest text-yellow-400'>₹ {product.product.price.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className='pt-5 lg:pt-10'>
                                    <button
                                        className="max-lg:mx-auto relative overflow-hidden w-fit px-5 lg:px-10 py-2 lg:py-3 uppercase font-body tracking-[0.275em] text-[10px] lg:text-xs lg:font-semibold border-2 border-yellow-400/60 text-yellow-400/90 flex items-center gap-5 before:absolute before:inset-0 before:bg-yellow-400/90 before:translate-y-full before:transition-transform before:duration-500 before:ease-out cursor-pointer group-hover:before:translate-y-0 group-hover:text-[#131313] group-hover:border-none "
                                    >
                                        <span className="relative z-10 flex items-center gap-5 transition-smooth">
                                            <IoBagHandle size={16} />
                                            <span className="pt-px">Add to bag</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='w-full py-10 px-5 lg:px-30 mb-10 lg:mb-20'>
                <div className='w-full flex max-lg:flex-col gap-5 lg:gap-10 border p-5 lg:px-20 lg:py-20 relative border-white/20 bg-linear-to-br from-[#111] to-[#121212] items-center overflow-hidden'>

                    <h1 className='absolute w-full translate-y-2/10 text-[#333]/10 text-end bottom-0 left-0 font-subheading italic font-semibold text-[278px] tracking-wider z-1'>AB</h1>
                    <div className='lg:pl-5 lg:border-l-2 border-yellow-400 w-full lg:w-1/2 z-5'>
                        <h1 className='text-2xl lg:text-4xl italic font-heading font-semibold tracking-wide'>Send a Glided Hint</h1>
                        <p className='font-body pt-2 max-lg:text-sm font-extralight tracking-wider italic text-white/60'>Invite someone special to explore your private collection. Perfect for gifting hints or sharing your refined palette with fellow connoisseurs.</p>
                    </div>
                    <form className='w-full max-lg:flex-col max-lg:gap-2 lg:w-1/2 flex z-5'>
                        <input type="email" name="email" id="email" placeholder='Recipients email...' className='w-full px-5 py-3 text-sm tracking-wider outline-none border border-white/10 text-white/80 font-body font-extralight focus:border-yellow-400/90' />
                        <button className='text-nowrap px-5 py-3 text-xs text-[#131313] tracking-widest font-body bg-yellow-400/90 uppercase cursor-pointer hover:bg-yellow-400'>Send collection</button>
                    </form>
                </div>
            </div>

        </main>
    )
}

export default Wishlist