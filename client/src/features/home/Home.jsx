import React from 'react'
import Hero from './components/Hero'
import Navbar from '../../components/Navbar'
import BestSellers from './components/BestSellers'
import Featured from './components/Featured'

const Home = () => {
  return (
    <main className='bg-black '>
        <Navbar />
        <Hero />
        <BestSellers />
        <Featured />
    </main>
  )
}

export default Home