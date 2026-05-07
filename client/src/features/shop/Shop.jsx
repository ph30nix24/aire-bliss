import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { BsHandbag, BsSliders } from "react-icons/bs";
import { bestproducts } from '../../utils';
import StarRating from '../home/components/StarRating';
import { FiMinus } from "react-icons/fi";
import { IoCheckmarkOutline } from "react-icons/io5";
import PriceRangeSlider from './components/PriceRangeSlider';


const Shop = () => {
  const [attar, setAttar] = useState(false);
  const [perfumes, setPerfumes] = useState(true)
  const [room, setRoom] = useState(false)
  const [male, setMale] = useState(true)
  const [women, setWomen] = useState(true)

  return (
    <main className='w-full min-h-screen bg-black shop'>
      <Navbar />

      {/* Hero Banner */}
      <div className='w-full h-[30vh] border-b border-yellow-500/20 flex mt-20'>
        <div className='w-1/2 h-full pl-30 py-5 flex flex-col justify-center'>
          <p className='font-body font-light text-yellow-400/80 capitalize'>
            home <span className='px-1 text-white/30'>/</span> shop
          </p>
          <h1 className='font-heading text-gradient-silver text-3xl font-semibold my-2'>
            Discover Luxury Fragrances
          </h1>
          <div className="w-10 h-0.5 mt-1 bg-linear-to-r rounded-full from-yellow-500 to-yellow-600 mb-5"></div>
          <p className='font-body text-white/70 font-light'>
            Timeless scents crafted with the rarest ingredients <br /> for unforgettable moments.
          </p>
        </div>
        <div className='w-1/2 h-full relative'>
          <div className='size-full absolute top-0 left-0 bg-linear-to-l to-black from-transparent from-55%'></div>
          <img src="./shop/shop-2.png" className='size-full object-contain' alt="" />
        </div>
      </div>

      {/* Main Layout */}
      <div className='w-full flex' style={{ height: 'calc(100vh - 72px)' }}>

        {/* Filter Sidebar — fixed height, never scrolls */}
        <div
          className='w-1/6 border-r border-white/10 bg-[#222]/50 shrink-0'
          style={{ height: 'calc(100vh - 72px)', position: 'sticky', top: 0 }}
        >
          <div className='w-full px-5 py-5 flex gap-3 items-center border-b border-white/10'>
            <BsSliders className='text-yellow-400/80 text-lg' />
            <p className='text-white uppercase font-body text-sm font-light'>filter</p>
          </div>
          <div className='w-full h-fit p-5 '>
            {/* categories */}
            <div className='text-white border-b border-white/10 pb-5'>
              <h1 className='flex justify-between items-center'>
                <span className='font-body uppercase text-sm'>Category</span>
                <FiMinus />
              </h1>
              <div className='w-full h-fit mt-5 '>
                <div className='w-full flex items-center gap-2'>
                  <div className={`size-4 cursor-pointer  border rounded-xs center ${attar ? "bg-yellow-400/80 text-[#222]" : "border-white/70"}`} onClick={() => setAttar(!attar)}>
                    {attar && <IoCheckmarkOutline className='size-3' />}
                  </div>
                  <p className='font-body font-light text-sm'>Attars <span>(12)</span></p>
                </div>
                <div className='w-full flex items-center gap-2 mt-3'>
                  <div className={`size-4 cursor-pointer  border rounded-xs center ${perfumes ? "bg-yellow-400/80 text-[#222]" : "border-white/70"}`} onClick={() => setPerfumes(!attar)}>
                    {perfumes && <IoCheckmarkOutline className='size-3' />}
                  </div>
                  <p className='font-body font-light text-sm'>Perfumes <span>(52)</span></p>
                </div>
                <div className='w-full flex items-center gap-2 mt-3'>
                  <div className={`size-4 cursor-pointer  border rounded-xs center ${room ? "bg-yellow-400/80 text-[#222]" : "border-white/70"}`} onClick={() => setRoom(!attar)}>
                    {room && <IoCheckmarkOutline className='size-3' />}
                  </div>
                  <p className='font-body font-light text-sm'>Room Fragrances <span>(32)</span></p>
                </div>
              </div>
            </div>
            {/* gender */}
            <div className='text-white border-b border-white/10 py-5'>
              <h1 className='flex justify-between items-center'>
                <span className='font-body uppercase text-sm'>Gender</span>
                <FiMinus />
              </h1>
              <div className='w-full h-fit mt-5 '>
                <div className='w-full flex items-center gap-2'>
                  <div className={`size-4 cursor-pointer  border rounded-xs center ${male ? "bg-yellow-400/80 text-[#222]" : "border-white/70"}`} onClick={() => setMale(!attar)}>
                    {male && <IoCheckmarkOutline className='size-3' />}
                  </div>
                  <p className='font-body font-light text-sm'>Men <span>(22)</span></p>
                </div>
                <div className='w-full flex items-center gap-2 mt-3'>
                  <div className={`size-4 cursor-pointer  border rounded-xs center ${women ? "bg-yellow-400/80 text-[#222]" : "border-white/70"}`} onClick={() => setWomen(!attar)}>
                    {women && <IoCheckmarkOutline className='size-3' />}
                  </div>
                  <p className='font-body font-light text-sm'>Women <span>(52)</span></p>
                </div>
              </div>
            </div>
            <div className='w-full text-white border-b border-white/10 py-5'>
              <h1 className='flex justify-between items-center'>
                <span className='font-body uppercase text-sm'>Price Range</span>
                <FiMinus />
              </h1>
              <div>
                <PriceRangeSlider />
              </div>
            </div>
          </div>
          {/* Add filter options here */}
        </div>

        {/* Products Column — flex-col so top bar is fixed, grid scrolls */}
        <div className='w-5/6 flex flex-col' style={{ height: 'calc(100vh - 72px)' }}>

          {/* Top bar — stuck, never scrolls */}
          <div className='bg-[#111]/70 shrink-0 border-b border-white/10'>
            <div className='w-full px-5 py-5 flex gap-3 items-center'>
              <BsSliders className='text-yellow-400/80 text-lg' />
              <p className='text-white uppercase font-body text-sm font-light'>filter</p>
            </div>
          </div>

          {/* Scrollable product grid */}
          <div className='flex-1 overflow-y-auto product-section'>
            <div className='flex gap-5 p-5 flex-wrap'>
              {bestproducts.map((product) => (
                <div
                  className='h-fit border border-white/10 bg-[#222]/70 overflow-hidden relative shrink-0 grow'
                  style={{ width: 'calc(25% - 20px)' }}
                  key={product.id}
                >
                  <img className='w-full h-auto' src={product.img} alt={product.name} />
                  <div className='w-full mt-2 text-white font-body px-5 py-3 text-center'>
                    <h2 className='text-xl uppercase font-subheading font-medium'>{product.name}</h2>
                    <p className='font-body py-1 text-xl'>
                      Rs. <span className='text-gradient font-semibold font-subheading'>{product.price.toFixed(2)}</span>
                    </p>
                    <p className='flex justify-center items-center gap-2'>
                      <StarRating rating={product.rating} />
                      <span className='text-white/70 text-sm'>({product.reviews})</span>
                    </p>
                    <button className='w-full flex items-center justify-center py-2 gap-3 border-2 border-yellow-400/40 text-yellow-400/70 mt-2 hover:bg-yellow-400/80 transition-all duration-300 hover:text-black cursor-pointer'>
                      <BsHandbag />
                      <p className='uppercase text-sm'>Add to cart</p>
                    </button>
                  </div>
                </div>
              ))}
              {bestproducts.map((product) => (
                <div
                  className='h-fit border border-white/10 bg-[#222]/70 overflow-hidden relative shrink-0 grow'
                  style={{ width: 'calc(25% - 20px)' }}
                  key={product.id}
                >
                  <img className='w-full h-auto' src={product.img} alt={product.name} />
                  <div className='w-full mt-2 text-white font-body px-5 py-3 text-center'>
                    <h2 className='text-xl uppercase font-subheading font-medium'>{product.name}</h2>
                    <p className='font-body py-1 text-xl'>
                      Rs. <span className='text-gradient font-semibold font-subheading'>{product.price.toFixed(2)}</span>
                    </p>
                    <p className='flex justify-center items-center gap-2'>
                      <StarRating rating={product.rating} />
                      <span className='text-white/70 text-sm'>({product.reviews})</span>
                    </p>
                    <button className='w-full flex items-center justify-center py-2 gap-3 border-2 border-yellow-400/40 text-yellow-400/70 mt-2 hover:bg-yellow-400/80 transition-all duration-300 hover:text-black cursor-pointer'>
                      <BsHandbag />
                      <p className='uppercase text-sm'>Add to cart</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Shop