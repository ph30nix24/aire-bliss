import React from 'react'
import Hero from './components/Hero'
import Navbar from '../../components/Navbar'
import BestSellers from './components/BestSellers'
import Featured from './components/Featured'
import Collection from './components/Collection'
import Testomonials from './components/Testomonials'
import BrandValue from './components/BrandValue'
import Footer from '../../components/Footer'
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <main className='bg-black'>
        <Navbar />
        <Hero isMobile={isMobile} />
        <BestSellers isMobile={isMobile} />
        <Featured isMobile={isMobile} />
        <Collection isMobile={isMobile} />
        <Testomonials isMobile={isMobile} />
        {/* <BrandValue />
        <Footer /> */}
    </main>
  )
}

export default Home