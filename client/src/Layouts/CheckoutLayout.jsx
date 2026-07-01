import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { useWindowScroll } from 'react-use';

const CheckoutLayout = () => {
    const { y: currentY } = useWindowScroll();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsScrolled(currentY > 100)
    }, [currentY])


    return (
        <main className="min-h-screen">
            <Navbar additional={`lg:py-2! lg:px-40! bg-transparent! border-none ${isScrolled && 'backdrop-blur-md!'}`} />

            <Outlet />

            <footer className='w-full py-10 px-5 lg:px-20 flex max-lg:gap-4 max-lg:flex-col justify-between items-center border-t-2 border-[#777]/10 bg-[#111]'>
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
        </main >
    )
}

export default CheckoutLayout