import React, { useEffect } from 'react'
import { useProduct } from '../../shop/hooks/useProducts'
import Loader from '../../../components/Loader'
import { useMediaQuery } from 'react-responsive';
import { RxCross2 } from 'react-icons/rx';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { BsBookmark, BsBox } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import ShopItemCard from '../../shop/components/ShopItemCard';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoIosLock } from 'react-icons/io';


const CheckOut = ({ productId, quantity }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { products } = useProduct()

    // const { product, handleSetProduct, loading } = useProduct()

    // useEffect(() => {
    //     handleSetProduct(product)
    // })

    // if(loading && !product) {
    //     return (
    //         <div className='w-full h-screen center bg-[#131313]'>
    //             <Loader />
    //         </div>
    //     )
    // }
    let finalPrice = 867
    let totalPrice = 1000
    let shippingCharge = 0

    const handleQuantityBtn = () => {

    }

    const handleRemoveCartItem = () => {

    }

    const product = {
        "_id": {
            "$oid": "6a44bebde03d168f65ba6cb4"
        },
        "productName": "pink cheffron",
        "mainImage": "https://res.cloudinary.com/h82pr8mc/image/upload/v1782890168/public/temp/kt8ztsix8wjzt2o6cxmd.webp",
        "previewImages": [
            "https://res.cloudinary.com/h82pr8mc/image/upload/v1782890169/public/temp/qhe09m2ihvmm2kp9qmwl.webp",
            "https://res.cloudinary.com/h82pr8mc/image/upload/v1782890171/public/temp/zqy4hxwhnqjkqvfuwuld.webp",
            "https://res.cloudinary.com/h82pr8mc/image/upload/v1782890172/public/temp/oxdotlnis81gy9yyczlb.webp"
        ],
        "brand": "Aire Bliss",
        "category": "perfume",
        "gender": "female",
        "price": 499,
        "discount": 100,
        "stock": 40,
        "sku": "AB-000001",
        "size": "30ml",
        "fragranceNotes": [
            "Pink Peony",
            " Bergamot",
            " Red Berries"
        ],
        "shortDescription": "Pink Chiffon by Aire Bliss is a fresh floral perfume with a soft, elegant scent that feels light yet captivating. Perfect for daily wear, dates, work, or special occasions.",
        "longDescription": "Indulge in the delicate elegance of Pink Chiffon by Aire Bliss, a fragrance inspired by blooming gardens and timeless femininity. Crafted for women who embrace grace and confidence, this enchanting perfume opens with a refreshing burst of juicy red berries and sparkling bergamot, creating an uplifting first impression. As the fragrance unfolds, a romantic bouquet of pink peony, velvety rose petals, and elegant jasmine fills the air with irresistible floral charm.\r\n\r\nThe scent settles into a warm and comforting base of creamy vanilla, soft white musk, and smooth sandalwood, leaving behind a sophisticated trail that lingers beautifully throughout the day. Light yet captivating, Pink Chiffon is designed to complement every moment—from busy workdays and casual outings to romantic dinners and special celebrations.\r\n\r\nIts elegant floral composition strikes the perfect balance between freshness and warmth, making it an ideal signature scent for women who appreciate refined, long-lasting fragrances. Encased in a beautifully designed bottle, Pink Chiffon reflects the beauty, confidence, and charm of the modern woman.",
        "featured": true,
        "bestseller": true,
        "quantity": 1,
        "isActive": true,
        "ratings": [],
        "createdAt": {
            "$date": "2026-07-01T07:16:13.613Z"
        },
        "updatedAt": {
            "$date": "2026-07-01T07:16:13.613Z"
        },
        "__v": 0,
        "averageRating": 4.6
    }
    return (
        <main className='bg-[#131313] bg-[radial-gradient(circle_at_50%_0%,#1a1a1a_0%,transparent_70%)]'>
            <div className='w-full lg:w-310 mx-auto pt-25 px-5 lg:pt-27 pb-15 text-white/80'>
                {/* cart-address-review-payment */}
                <div className='w-full h-fit center gap-2 lg:gap-5 pb-10 lg:pb-20 max-lg:px-5'>
                    <div className='w-fit flex gap-2 items-end text-yellow-300/80 pb-1'>
                        <p className='font-heading text-base tracking-widest max-lg:hidden'>01</p>
                        <p className='font-body text-lg capitalize font-extralight tracking-widest text-center max-lg:text-sm border-b-2 pb-1'>cart</p>
                    </div>
                    <div className='w-5 lg:w-15 h-0.5 bg-linear-to-r from-yellow-300/80 to-yellow-200/10 rounded-full '></div>

                    <div className='w-fit flex gap-2 items-end text-yellow-300/80'>
                        <p className='font-heading text-base tracking-widest max-lg:hidden text-white/40'>02</p>
                        <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center  max-lg:text-sm text-white/40'>Address</p>
                    </div>

                    <div className='w-5 lg:w-15 h-0.5 bg-yellow-200/10 rounded'></div>
                    <div className='w-fit flex gap-2 items-end pb-1'>
                        <p className='font-heading text-base tracking-widest text-white/40 max-lg:hidden'>03</p>
                        <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center text-white/40 max-lg:text-sm'>Review</p>
                    </div>

                    <div className='w-5 lg:w-15 h-0.5 bg-yellow-200/10'></div>
                    <div className='w-fit flex gap-2 items-end pb-1'>
                        <p className='font-heading text-base tracking-widest text-white/40 max-lg:hidden'>04</p>
                        <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center text-white/40 max-lg:text-sm'>payment</p>
                    </div>

                </div>


                <div className='w-full lg:flex lg:gap-10 relative'>
                    <div className="w-full lg:w-7/10 h-fit lg:pr-10">


                        <div className='w-full flex justify-between max-lg:flex-col lg:items-end pb-5 border-b border-[#777]/20'>
                            <h1 className='font-subheading text-[5.5vw] lg:text-4xl uppercase font-semibold'>Your Shopping bag</h1>
                            <p className='font-body uppercase text-xs text-white/70 '>1 items in cart</p>
                        </div>

                        <div className='my-8 lg:my-10 p-5 w-full h-fit bg-[#1C1B1B] rounded'>
                            <div className='flex justify-between pb-2'>
                                <p className='text-xs tracking-widest uppercase font-body text-yellow-400 font-semibold'>Free shipping Eligibilty</p>
                                {finalPrice > 999 ? (<p className='text-xs tracking-widest font-body text-white/70 font-semibold'>Free Shipping Applied!</p>) : (<div>

                                    <p className='text-xs tracking-widest font-body text-white/70 font-semibold'><span className='max-lg:hidden'>Add </span>&#x20B9;{(999 - totalPrice).toFixed(2)}<span className='max-lg:hidden'>more for Free Shipping!</span> <span className='lg:hidden uppercase'>Away</span></p>
                                </div>)}
                            </div>
                            <div className='w-full h-1 bg-white/20 rounded-full relative mt-1 '>
                                {finalPrice > 999 ? (<div className='size-full absolute top-0 left-0 bg-yellow-400 rounded-full'></div>) : (<div className={`h-full absolute left-0 top-0 bg-yellow-400  rounded-full ${finalPrice > 999 && 'w-full'}`} style={{ width: `${(totalPrice / 999) * 100}%` }}></div>)}

                            </div>

                        </div>

                        <div className='w-full flex gap-5 h-50 mb-8 relative max-lg:hidden'>
                            <img src={`${product.mainImage}`} className='w-40 h-50 object-cover' alt="" />
                            <img src="./../../../../footer-1.webp" className='absolute size-30 z-3 top-1/2 right-0 opacity-50 -translate-y-1/2 -scale-x-100 object-cover' alt="" />

                            <div className='w-[calc(100%-180px)] h-full flex flex-col justify-between relative z-5'>
                                <div className='w-full h-fit flex justify-between items-start'>
                                    <div className=''>
                                        <h1 className='font-subheading capitalize text-xl text-white/90 font-medium'>
                                            {product.productName}
                                        </h1>
                                        <p className='text-sm pt-1 text-white/70 font-body'>Size: 50ml</p>
                                    </div>
                                    <p className='text-yellow-400/90 font-body tracking-wider font-medium'>&#x20B9; {product.price}.00</p>
                                </div>

                                <div className='w-full h-fit flex justify-between items-center'>
                                    <div className='py-2 px-3 border border-[#777]/40 flex gap-3 items-center'>
                                        <FaMinus className='size-3 hover:text-yellow-400/90 cursor-pointer' onClick={() => handleQuantityBtn(product._id, product.quantity - 1)} />
                                        <p className='font-body text-white/80 px-4'>{product.quantity}</p>
                                        <FaPlus className='size-3 hover:text-yellow-400/90 cursor-pointer' onClick={() => handleQuantityBtn(product._id, product.quantity + 1)} />
                                    </div>

                                    <div className='center w-fit gap-5'>
                                        <div className='w-fit flex items-center gap-2 text-white/80 cursor-pointer hover:text-yellow-400/90 transition-smooth'>
                                            <BsBookmark className='size-3 ' />
                                            <p className='font-body text-xs uppercase font-medium tracking-widest'>Save for later</p>
                                        </div>
                                        <button className='w-fit flex items-center gap-2 text-red-400/80 cursor-pointer hover:text-red-500/90' onClick={() => handleRemoveCartItem(product._id)}>
                                            <HiOutlineTrash className='size-3 ' />
                                            <p className='font-body text-xs uppercase font-medium tracking-widest' >Remove</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {isMobile && (
                            <div className='w-full flex gap-3 h-40 mb-8 relative ' >
                                <img src={`${product.mainImage}`} className='w-30 h-40 lg:h-50 object-cover' alt="" />
                                <img src="./../../../../footer-1.webp" className='absolute size-30 z-3 top-1/2 right-0 opacity-50 -translate-y-1/2 -scale-x-100 object-cover' alt="" />

                                <div className='w-[calc(100%-132px)] h-full flex flex-col justify-between relative z-5'>
                                    <div className='w-full h-fit flex justify-between items-start'>
                                        <div className=''>
                                            <h1 className='font-subheading capitalize text-[5.5vw] text-white/90 font-medium '>
                                                {product.productName}
                                            </h1>
                                            <p className='text-sm text-white/70 font-body'>Size: 50ml</p>
                                            <p className='text-yellow-400/90 font-body text-sm tracking-wider font-medium'>&#x20B9; {product.price}.00</p>
                                        </div>
                                        <div className='w-fit flex items-center gap-2 py-1.5 text-red-400/80 cursor-pointer hover:text-red-500/90 '>
                                            <RxCross2 className='size-5 ' />
                                        </div>
                                    </div>

                                    <div className='w-full h-fit flex justify-between items-center'>
                                        <div className='py-2 px-3 border border-[#777]/40 flex gap-3 items-center'>
                                            <FaMinus className='size-2 hover:text-yellow-400/90 cursor-pointer' onClick={() => handleQuantityBtn(product._id, product.quantity - 1)} />
                                            <p className='font-body text-white/80 text-xs px-2'>{product.quantity}</p>
                                            <FaPlus className='size-2 hover:text-yellow-400/90 cursor-pointer' onClick={() => handleQuantityBtn(product._id, product.quantity + 1)} />
                                        </div>

                                        <div className='center w-fit gap-5'>
                                            <div className='w-fit flex items-center gap-2 text-white/80 cursor-pointer hover:text-yellow-400/90 transition-smooth'>
                                                <BsBookmark className='size-3 ' />
                                                <p className='font-body text-xs uppercase font-medium tracking-widest'>Save</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className='w-full pt-5 max-md:hidden'>
                            <h1 className='uppercase font-subheading tracking-wide text-[5.5vw] lg:text-3xl pb-5'>Complete the set</h1>
                            <div className='w-full flex gap-3 lg:gap-5 max-lg:overflow-scroll pb-10'>
                                {products.slice(0, 3).map((product, index) => (
                                    <ShopItemCard product={product} width={`w-1/3`} height={`lg:h-[60vh]`} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/10 h-fit relative">
                        <div className='w-full '>
                            <div className='w-full px-5 lg:px-8 py-8 bg-[#1C1B1B] border border-[#777]/30'>
                                <h1 className='text-3xl font-subheading uppercase '>Order <br /> Summary</h1>

                                <div className='w-full pt-10 pb-8 border-b-2 border-[#777]/30'>
                                    <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider'>
                                        <p className='text-white/80'>Subtotal (1 items)</p>
                                        <span className=' tracking-widest'>&#x20B9; {product.price}</span>
                                    </div>
                                    <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider'>
                                        <p className='text-white/80'>Discount </p>
                                        <span className='text-yellow-400/80 tracking-widest'>- &#x20B9; {product.discount}.00</span>
                                    </div>
                                    <div className='flex w-full justify-between items-center font-light text-sm font-body tracking-wider'>
                                        <p className='text-white/80'>Shipping </p>
                                        <span className='text-yellow-400/80 tracking-widest uppercase'>{shippingCharge === 0 ? "Free" : `₹ ${shippingCharge.toFixed(2)}`}</span>
                                    </div>
                                </div>

                                <div className='w-full pt-5 pb-8 flex justify-between items-center'>
                                    <h3 className='text-sm uppercase tracking-widest font-body'>Total</h3>

                                    <div className='font-heading text-3xl text-yellow-400/90'>
                                        &#x20B9; {product.price - product.discount}
                                    </div>
                                </div>

                                <a href="/checkout/address">
                                    <button className='w-full py-4 bg-yellow-400/90 hover:bg-yellow-400 center gap-3 text-[#111] cursor-pointer transition-smooth'>
                                        <IoIosLock className='size-5' />
                                        <p className='font-jet text-xs uppercase tracking-widest font-medium'>Proceed to checkout</p>
                                    </button>
                                </a>
                                <a href="/shop">
                                    <button className='w-full py-4 text-yellow-400/90 center gap-3 bg-[#111]/50 hover:text-[#111] border hover:bg-yellow-400/90 mt-3 cursor-pointer transition-smooth'>
                                        <p className='font-jet text-xs uppercase tracking-widest  font-medium'>Continue shopping</p>
                                    </button>
                                </a>

                                <div className="w-full h-0.5 bg-[#777]/30 my-10"></div>

                                <div className='w-full '>
                                    <p className='text-xs uppercase font-body font-medium tracking-widest pb-3'>
                                        Have a coupon code ?
                                    </p>
                                    <form className='w-full h-fit'>
                                        <fieldset className='w-full flex h-10 '>
                                            <input type="text" className='w-full h-full border-2 border-[#777]/20 px-3 font-body font-extralight text-xs outline-none focus:border-yellow-400/70' placeholder='Enter Code' />
                                            <button className='text-white font-jet text-xs uppercase w-fit h-full px-5 bg-[#777]/20 tracking-widest cursor-pointer hover:text-[#111] hover:bg-yellow-400 transition-smooth'>Apply</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div className='w-full h-fit py-5 mt-5 px-8 bg-[#111]'>
                                <div className='w-full h-full flex items-center gap-2  py-3'>
                                    < CiDeliveryTruck className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                                    <div className='text-white font-body pr-5'>
                                        <h1 className='text-xs uppercase'>Free Shipping</h1>
                                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>On all orders over ₹ 999</p>
                                    </div>
                                </div>
                                <div className='w-full h-full flex items-center gap-2 py-3'>
                                    <BsBox className='size-9  text-yellow-500/70 p-2.5 rounded-full bg-[#222]/40 center' />
                                    <div className='text-white pr-5 font-body '>
                                        <h1 className='text-xs uppercase'>Easy Return</h1>
                                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Hassle-free returns within 7 days</p>
                                    </div>
                                </div>
                                <div className='w-full h-full flex items-center gap-2  py-3'>
                                    <RiCustomerService2Fill className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                                    <div className='text-white pr-5 font-body '>
                                        <h1 className='text-xs uppercase'>Customer Support</h1>
                                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>24/7 dedicated support team</p>
                                    </div>
                                </div>
                                <div className='w-full h-full flex items-center gap-2 py-3'>
                                    <CiLock className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                                    <div className='text-white pr-5 font-body '>
                                        <h1 className='text-xs uppercase'>Secure Payment</h1>
                                        <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>100% secure & trusted payment methods</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isMobile && (
                        <div className='w-full pt-5 '>
                            <h1 className='uppercase font-subheading tracking-wide text-[5.5vw] lg:text-3xl pb-5'>Complete the set</h1>
                            <div className='w-full flex gap-3 lg:gap-5 max-lg:overflow-scroll pb-10'>
                                {products.slice(0, 3).map((product, index) => (
                                    <ShopItemCard product={product} width={`w-3/5`} height={`h-[50vh]!`} key={index} />
                                ))}
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </main>
    )
}

export default CheckOut