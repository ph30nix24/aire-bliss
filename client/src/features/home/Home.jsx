import React from 'react'
import Hero from './components/Hero'
import Navbar from '../../components/Navbar'
import BestSellers from './components/BestSellers'
import Featured from './components/Featured'
import Collection from './components/Collection'
import Testomonials from './components/Testomonials'
import BrandValue from './components/BrandValue'

const Home = () => {
  return (
    <main className='bg-black'>
        <Navbar />
        <Hero />
        <BestSellers />
        <Featured />
        <Collection />
        <Testomonials />
        <BrandValue />
    </main>
  )
}

export default Home