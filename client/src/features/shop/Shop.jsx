import React, { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import DesktopShop from "./components/DesktopShop";
import Navbar from "../../components/Navbar";
import MobileShop from "./components/MobileShop";
import { useWindowScroll } from "react-use";
const Shop = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { y: currentY } = useWindowScroll();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(currentY > 100)
  }, [currentY])



  return (
    <main className='w-full min-h-screen bg-black shop'>
      <Navbar additional={`bg-transparent! ${isScrolled && 'backdrop-blur-sm!'} py-3! border-none!`} />
      {isMobile ? <MobileShop /> : <DesktopShop />}
    </main>
  )
}

export default Shop