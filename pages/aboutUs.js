import AboutHeader from '@/src/components/AboutHeader'
import AboutHero from '@/src/components/AboutHero'
import Community from '@/src/components/Community'
import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import Operations from '@/src/components/Operations'
import React from 'react'

const about = () => {
  return (
    <section className=' bg-black overflow-x-hidden'>
        <Navbar/>
        <AboutHero/>
        <AboutHeader/>
        <Community/>
        <Operations/>
        <Footer/>
    </section>
  )
}

export default about