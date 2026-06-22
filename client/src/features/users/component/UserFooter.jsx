import React from 'react'

const UserFooter = () => {
  return (
    <footer className='w-full h-fit bg-[#111] py-20 relative'>

        <img src="./../../../../footer-1.webp" className='w-20 absolute'  alt="" />
        <div className='w-fit mx-auto flex items-center text-white text-5xl font-stylish italic gap-2'>
            <span className='text-gradient-gold tracking-widest'>Aire</span>
            <img src="./../../../../logo-2.png" className='size-12' alt="" />
            <span className='text-gradient-gold tracking-widest'>Bliss</span>
        </div>

        <div className='w-full center gap-10 my-10'>
            <a href="#" className='text-xs uppercase text-white/80 font-body tracking-[0.325em] hover:text-yellow-400'>privacy policy</a>
            <a href="#" className='text-xs uppercase text-white/80 font-body tracking-[0.325em] hover:text-yellow-400'>terms of service </a>
            <a href="#" className='text-xs uppercase text-white/80 font-body tracking-[0.325em] hover:text-yellow-400'>contact us</a>
        </div>

        <p className='text-center text-white/50 text-sm italic font-light tracking-wide font-body'>© 2026 Aire Bliss. All rights reserved. | Designed by Team Aire Bliss</p>
    </footer>
  )
}

export default UserFooter