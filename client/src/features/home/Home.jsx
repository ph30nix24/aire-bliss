import React from 'react'
import Hero from './components/Hero'
import Navbar from '../../components/Navbar'
import BestSellers from './components/BestSellers'
import Featured from './components/Featured'
import Collection from './components/Collection'

const Home = () => {
  return (
    <main className='bg-black '>
        <Navbar />
        <Hero />
        <BestSellers />
        <Featured />
        <Collection />
    </main>
  )
}

export default Home