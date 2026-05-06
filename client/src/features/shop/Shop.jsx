import React from 'react'
import Navbar from '../../components/Navbar'
const Shop = () => {
  return (
    <main className='w-full min-h-screen bg-black'>
        <Navbar />
        <div className='w-full h-[50vh] border-b border-yellow-500/20 flex'>
            <div className='w-2/5 h-full '></div>
            <div className='w-3/5 h-full pt-20 pr-20'>
                <img src="./shop/shop.webp" className='size-full object-contain' alt="" />
            </div>
        </div>
    </main>
  )
}

export default Shop