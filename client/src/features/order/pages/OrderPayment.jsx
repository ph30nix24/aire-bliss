import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import { useWindowScroll } from 'react-use';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { HiCash } from 'react-icons/hi';
import { LuTag } from 'react-icons/lu';
import { bestproducts } from '../../../utils';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BsBox } from 'react-icons/bs';

const OrderPayment = () => {

  const { y: currentY } = useWindowScroll();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(currentY > 100)
  }, [currentY])

  const [selectedPayment, setSelectedPayment] = useState('online-payment');



  return (
    <main className='bg-[#131313] bg-[radial-gradient(circle_at_50%_0%,#212121_0%,transparent_70%)]'>

      <Navbar additional={`lg:py-2! lg:px-35! bg-transparent! border-none ${isScrolled && 'backdrop-blur-md!'}`} />

      <div className='w-full h-fit center gap-2 lg:gap-5 pt-25 pb-10 lg:pb-20 max-lg:px-5'>
        <div className='w-fit flex gap-2 items-end text-yellow-300/80 pb-1'>
          <p className='font-heading text-base tracking-widest max-lg:hidden'>01</p>
          <p className='font-body text-lg capitalize font-extralight tracking-widest text-center max-md:text-sm'>cart</p>
        </div>
        <div className='w-5 md:w-10 lg:w-15 h-0.5 bg-yellow-300/80 rounded-full'></div>

        <div className='w-fit flex gap-2 items-end text-yellow-300/80 pb-1'>
          <p className='font-heading text-base tracking-widest max-lg:hidden'>02</p>
          <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center max-md:text-sm'>Address</p>
        </div>

        <div className='w-5 md:w-10 lg:w-15 h-0.5 bg-yellow-300/80 rounded-full'></div>
        <div className='w-fit flex gap-2 items-end text-yellow-300/80 pb-1'>
          <p className='font-heading text-base tracking-widest max-lg:hidden'>03</p>
          <p className='font-body text-lg capitalize font-extralight tracking-widest text-center max-md:text-sm '>Review</p>
        </div>

        <div className='w-5 md:w-10 lg:w-15 h-0.5 bg-yellow-300/80'></div>
        <div className='w-fit flex gap-2 items-end  text-yellow-300/80'>
          <p className='font-heading text-base tracking-widest max-lg:hidden'>04</p>
          <p className='font-body text-lg capitalize font-extralight tracking-widest  text-center max-md:text-sm border-b-2 pb-1'>payment</p>
        </div>

      </div>

      <div className='w-full px-5 lg:px-35 pb-20'>
        <p className='uppercase text-center text-primary text-[10px] md:text-xs font-jet tracking-[0.375em] font-bold'>The final step</p>
        <h1 className='text-center text-white/90 text-5xl md:text-6xl max-lg:px-10 lg:text-7xl font-subheading italic capitalize mt-5 '>Complete Your <br /> Order</h1>

        <p className='w-full lg:w-180 text-center mx-auto text-sm  px-5 lg:text-base italic font-body font-light mt-5 lg:mt-10 text-white/50 tracking-wider'>
          Choose your method of transaction to complete your order.
        </p>

        <div className='w-full flex max-lg:flex-col md:px-10 gap-10 md:gap-30 mt-20'>
          <div className="w-full lg:w-[65%]">
            <div className='w-full flex items-center justify-between'>
              <p className='font-body uppercase tracking-[0.355em] text-xs text-yellow-300/90'>Select payment method</p>
            </div>
            <div className='w-full my-5 md:mb-10 h-0.5 bg-linear-to-r from-transparent via-45% to-100% via-yellow-300/10 to-transparent'></div>

            {/* online payment */}
            <div className={`w-full p-5 md:p-10 flex items-start justify-between gap-5  backdrop-blur-sm  text-white/90 relative cursor-pointer transition-smooth  ${selectedPayment === 'online-payment' ? 'border-yellow-300/30 border-2 bg-[#58522e1b] hover:bg-[#58522e21]' : 'border border-[#777]/10 bg-[#131313]/50 hover:bg-[#131313]/70'}`} onClick={() => setSelectedPayment('online-payment')}>
              <div className='w-fit flex md:gap-5 items-center gap-3'>
                <div className={`size-4 rounded-full border-2 border-yellow-300/40 ${selectedPayment === 'online-payment' ? 'bg-yellow-300/60' : ''} `}></div>
                <div className='max-md:w-[calc(100%-28px)]'>
                  <h2 className='font-body font-light text-lg tracking-wider'>Online Payment</h2>
                  <p className='font-body text-sm font-extralight tracking-wider text-white/60 italic'>Pay securely using UPI, Cards, Net Banking <br className='max-md:hidden' /> and more.</p>
                </div>
              </div>
              <div className=''>
                <img src="./../../../../icons/onlinePayment.webp" className='size-20 absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 object-scale-down opacity-50' alt="" />
              </div>
            </div>


            {/* cashOnDelivery */}
            <div className={`w-full p-5 md:p-10 flex items-start justify-between mt-5 md:mt-10 transition-smooth gap-5  backdrop-blur-sm  text-white/90 relative cursor-pointer   ${selectedPayment === 'cash-on-delivery' ? 'border-yellow-300/30 border-2 bg-[#58522e1b] hover:bg-[#58522e21]' : 'border border-[#777]/10 bg-[#131313]/50 hover:bg-[#131313]/70'}`} onClick={() => setSelectedPayment('cash-on-delivery')}>
              <div className='w-fit flex gap-3 lg:gap-5 items-center'>
                <div className='size-4 rounded-full border-2 border-yellow-300/40'></div>
                <div className='max-md:w-[calc(100%-28px)]'>
                  <h2 className='font-body font-light text-lg tracking-wider'>Cash on Delivery</h2>
                  <p className='font-body text-sm font-extralight tracking-wider text-white/60 italic pt-1'>Pay in cash when your order is delivered <br className='max-md:hidden'/> to you.</p>
                </div>
              </div>
              <div className=''>
                <img src="./../../../../icons/cashOndelivery.webp" className='size-20 absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 object-scale-down opacity-50' alt="" />
              </div>
            </div>


            {/* safe and secure payments */}
            <div className='w-full p-5 md:p-10 flex items-start justify-between gap-5 bg-[#131313]/50 backdrop-blur-sm border border-[#777]/10 hover:bg-[#131313]/70 text-white/90 mt-5 md:mt-10 overflow-hidden'>
              <div className='w-fit'>
                <div className=''>
                  <h2 className='font-body font-light text-base text-yellow-400/80 tracking-widest uppercase'>safe and secure payments
                  </h2>
                  <p className='font-body text-sm font-extralight tracking-wider text-white/60 italic mt-1.5'>Your payment is protected with secure encryption. We <br /> never store your card or banking details, so you can shop <br /> with confidence.</p>
                </div>
              </div>

              <CiLock className='absolute size-20 text-yellow-400/80 opacity-30 bottom-0 translate-y-1/4 translate-x-3/10 right-0' />
            </div>

            <button className={`w-full px-5 md:px-10 py-5  bg-linear-to-br from-yellow-300/90 to-yellow-400/80 hover:bg-yellow-400 center ${selectedPayment === 'online-payment' && "justify-between!"} gap-3 text-[#111] cursor-pointer transition-smooth mt-10 talic rounded shadow-lg shadow-yellow-300/20 transition-smooth`}>
              <div className='flex items-center gap-3'>
                {selectedPayment === 'online-payment' ? <CiLock /> : <HiCash />}
                <span className='font-jet uppercase tracking-widest'>{selectedPayment === 'online-payment' ? 'Proceed to Payment' : 'Complete Purchase'}</span>
              </div>
              {selectedPayment === 'online-payment' && <span className='font-heading '>&#x20B9; 1087</span>}
            </button>

            {selectedPayment === 'online-payment' && <p className='w-full text-center mx-auto text-sm px-5 lg:text-sm italic font-body font-light mt-10 mb-5 text-white/50 tracking-wider'>
              You will be redirected to Razorpay' secure payment page <br className='max-md:hidden' /> to complete your transaction.
            </p>}

            <div className={`w-full flex items-center gap-3 ${selectedPayment === 'cash-on-delivery' && 'mt-10'}`}>
              <div className='w-1/2 h-px bg-[#777]/30'></div>
              <p className='text-white/50 tracking-wider text-sm italic font-body font-light'>or</p>
              <div className='w-1/2 h-px bg-[#777]/30'></div>
            </div>

            <a href="/checkout/review">
              <button className='w-full py-4 center gap-3 text-white/80 hover:text-yellow-300/80 cursor-pointer transition-smooth mt-3'>
                <FaArrowLeft className='size-3' />
                <p className='font-jet text-sm captialize tracking-wide font-extralight '>Return to order Review</p>

              </button>
            </a>
          </div>


          <div className='w-full lg:w-[35%]'>
            <div className='w-full px-8 py-10  border border-[#777]/30 bg-[#131313]/50 backdrop-blur-sm text-white/80'>
              <h1 className='text-3xl font-subheading uppercase  text-white/80 italic'>Order <br /> Summary</h1>

              <div className='w-full pt-10 pb-8 border-b-2 border-[#777]/30'>

                {bestproducts.slice(2, 5).map((product, index) => (
                  <div className='w-full flex gap-3 mb-5' key={index}>
                    <img src={`./../../../.${product.img}`} className='size-20 rounded object-scale-down' alt="" />
                    <div className='w-[calc(100%-92px)]'>
                      <h2 className='font-body capitalize pt-1'>{product.name}</h2>
                      <p className='font-body uppercase text-xs font-light text-white/50'>
                        50ml
                      </p>
                      <div className='w-full flex justify-between items-center'>
                        <p className='text-xs font-body pt-3 text-white/60'>Qty: 1</p>
                        <p className='text-xs font-body pt-3 text-white/70'>&#x20B9; {product.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider mt-5 border-t-2 border-[#777]/30 pt-5'>
                  <p className='text-white/80'>Subtotal (3 items)</p>
                  <span className=' tracking-widest'>&#x20B9; 1287.00</span>
                </div>
                <div className='flex w-full justify-between items-center pb-3 font-light text-sm font-body tracking-wider'>
                  <p className='text-white/80'>Discount </p>
                  <span className='text-yellow-400/80 tracking-widest'>- &#x20B9; 200.00</span>
                </div>
                <div className='flex w-full justify-between items-center font-light text-sm font-body tracking-wider'>
                  <p className='text-white/80'>Shipping </p>
                  <span className='text-yellow-400/80 tracking-widest uppercase'>free</span>
                </div>
              </div>

              <div className='w-full pt-5  flex justify-between items-center'>
                <h3 className='text-sm uppercase tracking-widest font-body'>Total</h3>

                <div className='font-heading text-3xl text-yellow-400/90'>
                  &#x20B9; 1087.00
                </div>
              </div>

              <div className='w-full h-fit py-5 mt-5'>
                <div className='w-full h-full flex items-center gap-2  py-3'>
                  < CiDeliveryTruck className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                  <div className='text-white font-body pr-5'>
                    <h1 className='text-xs uppercase text-white/70 tracking-[0.175em]'>Anticipated Arrival</h1>
                    <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>June 25- 1 August 2026</p>
                  </div>
                </div>
                <div className='w-full h-full flex items-center gap-2 py-3'>
                  <BsBox className='size-9  text-yellow-500/70 p-2.5 rounded-full bg-[#222]/40 center' />
                  <div className='text-white pr-5 font-body '>
                    <h1 className='text-xs uppercase text-white/70 tracking-[0.175em]'>Easy Return</h1>
                    <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Hassle-free returns within 7 days</p>
                  </div>
                </div>
                <div className='w-full h-full flex items-center gap-2 py-3'>
                  <CiLock className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                  <div className='text-white pr-5 font-body '>
                    <h1 className='text-xs uppercase text-white/70 tracking-[0.175em]'>Secure Payment</h1>
                    <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>100% secure & trusted payment methods</p>
                  </div>
                </div>
                <div className='w-full h-full flex items-center gap-2  py-3'>
                  <RiCustomerService2Fill className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                  <div className='text-white pr-5 font-body '>
                    <h1 className='text-xs uppercase text-white/70 tracking-[0.175em]'>Customer Support</h1>
                    <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>24/7 dedicated support team</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>


      <footer className='w-full py-10 px-5 max-lg:gap-5 md:px-20 flex justify-between items-center border-t-2 border-[#777]/10 max-md:flex-col'>
        <div className='w-fit flex items-center gap-3'>
          <img src="./../../../../logo-2.png" className='size-10' alt="" />
          <h1 className='text-3xl capitalize font-subheading italic text-yellow-400/80 tracking-wider'>aire bliss</h1>
        </div>

        <div className='w-fit flex items-center gap-5'>
          <a href="" className='text-sm text-white/60 font-body capitalize'>shopping policy</a>
          <a href="" className='text-sm text-white/60 font-body capitalize'>Return & refund</a>
          <a href="" className='text-sm text-white/60 font-body capitalize'>Terms & condition</a>
        </div>

      </footer>
    </main>
  )
}

export default OrderPayment