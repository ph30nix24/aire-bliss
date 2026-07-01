import React from 'react'
import Footer from '../../../components/Footer'
import { bestproducts } from '../../../utils'
import { FaAward, FaMinus, FaPlus } from "react-icons/fa6";
import { BsBookmark, BsBox } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { IoIosLock } from "react-icons/io";
import { CiDeliveryTruck, CiLock, CiMail } from 'react-icons/ci';
import { RiCustomerService2Fill } from 'react-icons/ri';
import ProductCard from '../../../components/ProductCard';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { useMediaQuery } from 'react-responsive';
import { RxCross2 } from 'react-icons/rx';
import { useUserData } from '../hooks/useUserData';



const Cart = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { cart, cartLoading, handleGetCart, handleCartItemQuantity, handleRemoveCartItem } = useUserData();

    const user = {
        gender: "male"
    }

    return (
        <main className={`${cart ? "bg-[#131313] bg-[radial-gradient(circle_at_50%_0%,#1a1a1a_0%,transparent_70%)]" : user.gender === "female" ? "bg-[#0D0D0D]" : "bg-[#030303]"} `}>
                {/* top cart and address ribbons */}


                {!cart ? (
                    <div className='w-full h-screen relative center flex-col text-white pb-20'>
                        <div className='size-130 relative'>
                            <img src={user.gender === "female" ? "./../../../../cart/femaleCartEmpty.webp" : "./../../../../cart/maleCartEmpty.webp"} className='size-full relative z-1' alt="" />
                            { user.gender === "female" && <div className='size-full bg-radial from-transparent to-[#0D0D0D] absolute top-0 left-0 z-5'></div>}
                        </div>
                        <h1 className='text-6xl italic font-subheading'>An Empty Cart</h1>
                        <p className='text-base font-body font-extralight text-white/60 mt-5 text-center italic tracking-wider'>Looks like you haven't added anything to your cart yet. <br/> Explore our collections and find something you love.</p>
                        <a href="/shop">
                            <button className='w-fit mt-10 py-4 px-8 bg-yellow-400/90 hover:bg-yellow-400 center gap-3 text-[#111] cursor-pointer transition-smooth'>
                                <p className='font-jet text-xs uppercase tracking-[0.275em] font-light'>Continue Shopping</p>
                            </button>
                        </a>
                    </div>
                ) : (
                    <div className='w-full lg:w-310 mx-auto pt-25 px-5 lg:pt-27 pb-15 text-white/80'>
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
                        <div className='size-full lg:flex lg:gap-10 relative'>
                            <div className="w-full lg:w-7/10 h-fit lg:pr-10">


                                <div className='w-full flex justify-between max-lg:flex-col lg:items-end pb-5 border-b border-[#777]/20'>
                                    <h1 className='font-subheading text-[5.5vw] lg:text-4xl uppercase font-semibold'>Your Shopping bag</h1>
                                    <p className='font-body uppercase text-xs text-white/70 '>{cart?.products.length} items in cart</p>
                                </div>

                                <div className='my-8 lg:my-10 p-5 w-full h-fit bg-[#1C1B1B] rounded'>
                                    <div className='flex justify-between pb-2'>
                                        <p className='text-xs tracking-widest uppercase font-body text-yellow-400 font-semibold'>Free shipping Eligibilty</p>
                                        <p className='text-xs tracking-widest font-body text-white/70 font-semibold'><span className='max-lg:hidden'>Add </span>&#x20B9;243.00 <span className='max-lg:hidden'>more for Free Shipping!</span> <span className='lg:hidden uppercase'>Away</span></p>
                                    </div>
                                    <div className='w-full h-1 bg-white/20 rounded-full'>
                                    </div>

                                </div>

                                <div className='w-full h-fit'>
                                    {isMobile ? (
                                        cart.products.map((product, index) => (
                                            <div className='w-full flex gap-3 h-40 mb-8 relative ' key={index}>
                                                <img src={`./../../../../${product.product.img}`} className='w-30 h-40 lg:h-50 object-cover' alt="" />
                                                <img src="./../../../../footer-1.webp" className='absolute size-30 z-3 top-1/2 right-0 opacity-50 -translate-y-1/2 -scale-x-100 object-cover' alt="" />

                                                <div className='w-[calc(100%-132px)] h-full flex flex-col justify-between relative z-5'>
                                                    <div className='w-full h-fit flex justify-between items-start'>
                                                        <div className=''>
                                                            <h1 className='font-subheading capitalize text-[6vw] text-white/90 font-medium '>
                                                                {product.product.name}
                                                            </h1>
                                                            <p className='text-sm text-white/70 font-body'>Size: 50ml</p>
                                                            <p className='text-yellow-400/90 font-body text-sm tracking-wider font-medium'>&#x20B9; {product.product.price}.00</p>
                                                        </div>
                                                        <div className='w-fit flex items-center gap-2 py-1.5 text-red-400/80 cursor-pointer hover:text-red-500/90 '>
                                                            <RxCross2 className='size-5 ' />
                                                        </div>
                                                    </div>

                                                    <div className='w-full h-fit flex justify-between items-center'>
                                                        <div className='py-2 px-3 border border-[#777]/40 flex gap-3 items-center'>
                                                            <FaMinus className='size-2 hover:text-yellow-400/90 cursor-pointer' />
                                                            <p className='font-body text-white/80 text-xs px-2'>{product.quantity}</p>
                                                            <FaPlus className='size-2 hover:text-yellow-400/90 cursor-pointer' />
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
                                        ))
                                    ) : (
                                        cart?.products?.map((product, index) => (
                                            <div className='w-full flex gap-5 h-50 mb-8 relative' key={index}>
                                                <img src={`./../../../../${product.product.img}`} className='w-40 h-50 object-cover' alt="" />
                                                <img src="./../../../../footer-1.webp" className='absolute size-30 z-3 top-1/2 right-0 opacity-50 -translate-y-1/2 -scale-x-100 object-cover' alt="" />

                                                <div className='w-[calc(100%-180px)] h-full flex flex-col justify-between relative z-5'>
                                                    <div className='w-full h-fit flex justify-between items-start'>
                                                        <div className=''>
                                                            <h1 className='font-subheading capitalize text-3xl text-white/90 font-medium'>
                                                                {product.product.name}
                                                            </h1>
                                                            <p className='text-sm pt-1 text-white/70 font-body'>Size: 50ml</p>
                                                        </div>
                                                        <p className='text-yellow-400/90 font-body tracking-wider font-medium'>&#x20B9; {product.product.price}.00</p>
                                                    </div>

                                                    <div className='w-full h-fit flex justify-between items-center'>
                                                        <div className='py-2 px-3 border border-[#777]/40 flex gap-3 items-center'>
                                                            <FaMinus className='size-3 hover:text-yellow-400/90 cursor-pointer' />
                                                            <p className='font-body text-white/80 px-4'>{product.quantity}</p>
                                                            <FaPlus className='size-3 hover:text-yellow-400/90 cursor-pointer' />
                                                        </div>

                                                        <div className='center w-fit gap-5'>
                                                            <div className='w-fit flex items-center gap-2 text-white/80 cursor-pointer hover:text-yellow-400/90 transition-smooth'>
                                                                <BsBookmark className='size-3 ' />
                                                                <p className='font-body text-xs uppercase font-medium tracking-widest'>Save for later</p>
                                                            </div>
                                                            <div className='w-fit flex items-center gap-2 text-red-400/80 cursor-pointer hover:text-red-500/90'>
                                                                <HiOutlineTrash className='size-3 ' />
                                                                <p className='font-body text-xs uppercase font-medium tracking-widest'>Remove</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {
                                    isMobile && (
                                        <div className='w-full mt-15'>
                                            <div className='w-full '>
                                                <p className='text-xs uppercase font-body font-medium tracking-widest pb-3'>
                                                    Have a coupon code ?
                                                </p>
                                                <form className='w-full h-fit'>
                                                    <fieldset className='w-full flex h-10 '>
                                                        <input type="text" className='w-full h-full border-2 border-[#777]/20 px-3 font-body font-extralight text-xs outline-none focus:border-yellow-400/70' placeholder='Enter Code' />
                                                        <button className='text-white font-body text-xs uppercase w-fit h-full px-5 bg-[#777]/20 tracking-widest cursor-pointer hover:text-[#111] hover:bg-yellow-400 transition-smooth'>Apply</button>
                                                    </fieldset>
                                                </form>
                                            </div>
                                            <div className='w-full mt-5 p-5 bg-[#1C1B1B] border border-[#777]/30'>
                                                <h1 className='text-[5vw] font-subheading uppercase '>Order Summary</h1>

                                                <div className='w-full pt-5 pb-8 border-b-2 border-[#777]/30'>
                                                    <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider'>
                                                        <p className='text-white/80'>Subtotal ({cart.products.length} items)</p>
                                                        <span className=' tracking-widest'>&#x20B9; {cart.totalPrice.toFixed(2)}</span>
                                                    </div>
                                                    <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider'>
                                                        <p className='text-white/80'>Discount </p>
                                                        <span className='text-yellow-400/80 tracking-widest'>- &#x20B9; {cart.totalDiscount?.toFixed(2)}</span>
                                                    </div>
                                                    <div className='flex w-full justify-between items-center font-light text-sm font-body tracking-wider'>
                                                        <p className='text-white/80'>Shipping </p>
                                                        <span className='text-yellow-400/80 tracking-widest uppercase'>free</span>
                                                    </div>
                                                </div>

                                                <div className='w-full pt-5 flex justify-between items-center'>
                                                    <h3 className='text-sm uppercase tracking-widest font-body'>Total</h3>

                                                    <div className='font-heading text-xl text-yellow-400/90'>
                                                        &#x20B9; {(cart.totalPrice - cart.totalDiscount).toFixed(2)}
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    )
                                }
                                <div className='w-full pt-5'>
                                    <h1 className='uppercase font-subheading tracking-wide text-[5.5vw] lg:text-3xl pb-5'>Complete the set</h1>
                                    <div className='w-full flex gap-3 lg:gap-5 max-lg:overflow-scroll pb-10'>
                                        {bestproducts.slice(3, 6).map((product, index) => (
                                            <ProductCard product={product} width={`w-1/3 `} />
                                        ))}
                                    </div>
                                </div>
                            </div>



                            {
                                isMobile ? (
                                    <div className="w-full h-fit relative">
                                        <div className='w-full '>
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
                                ) : (
                                    <div className="w-full lg:w-3/10 h-fit relative">
                                        <div className='w-full '>
                                            <div className='w-full px-8 py-10 bg-[#1C1B1B] border border-[#777]/30'>
                                                <h1 className='text-3xl font-subheading uppercase '>Order <br /> Summary</h1>

                                                <div className='w-full pt-10 pb-8 border-b-2 border-[#777]/30'>
                                                    <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider'>
                                                        <p className='text-white/80'>Subtotal ({cart.products.length} items)</p>
                                                        <span className=' tracking-widest'>&#x20B9; {cart.totalPrice}</span>
                                                    </div>
                                                    <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider'>
                                                        <p className='text-white/80'>Discount </p>
                                                        <span className='text-yellow-400/80 tracking-widest'>- &#x20B9; {cart.totalDiscount}.00</span>
                                                    </div>
                                                    <div className='flex w-full justify-between items-center font-light text-sm font-body tracking-wider'>
                                                        <p className='text-white/80'>Shipping </p>
                                                        <span className='text-yellow-400/80 tracking-widest uppercase'>free</span>
                                                    </div>
                                                </div>

                                                <div className='w-full pt-5 pb-8 flex justify-between items-center'>
                                                    <h3 className='text-sm uppercase tracking-widest font-body'>Total</h3>

                                                    <div className='font-heading text-3xl text-yellow-400/90'>
                                                        &#x20B9; {cart.totalPrice - cart.totalDiscount}
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
                                )
                            }
                        </div>
                    </div>
                )}

        </main >
    )
}

export default Cart