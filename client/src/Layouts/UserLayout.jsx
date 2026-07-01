import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { useWindowScroll } from 'react-use';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserLayout = () => {

    const { y: currentY } = useWindowScroll();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsScrolled(currentY > 100)
    }, [currentY])

    return (
        <main className="min-h-screen">
            <Navbar additional={`bg-transparent! border-none! ${isScrolled && 'backdrop-blur-md!'} lg:px-40!`} />
            <Outlet />
            <Footer background={`bg-[#111]!`} paddingY={`pt-30!`} overlay={`to-[#111]!`} toOver={`to-75%!`} translateY={`translate-y-2/10!`} />
        </main >
    )
}

export default UserLayout