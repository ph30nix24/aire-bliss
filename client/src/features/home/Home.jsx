import React from 'react'
import Hero from './components/Hero'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <main className='bg-black'>
        <Navbar />
        <Hero />
    </main>
  )
}

export default Home