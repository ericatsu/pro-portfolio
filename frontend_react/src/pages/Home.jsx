import React from 'react'
import { Navbar } from '../components/Navbar'
import { Work } from '../container/Work'
import { About } from '../container/About'
import { Hero } from '../container/Hero'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Footer/>
    </>
  )
}

export default Home