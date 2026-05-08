import React from "react"
import { useMediaQuery }  from 'react-responsive'
import DesktopShop from "./components/DesktopShop";
import Navbar from "../../components/Navbar";
import MobileShop from "./components/MobileShop";
const Shop = () => {
  const isMobile = useMediaQuery({ maxWidth: 768});
  return (
    <main className='w-full min-h-screen bg-black shop'>
      <Navbar />
      { isMobile ? <MobileShop /> : <DesktopShop />}
    </main>
  )
}

export default Shop