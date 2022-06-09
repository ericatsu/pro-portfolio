import React from 'react';
import {Hero ,About, Skills, Testimonial, Work, Footer } from  './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar /> 
       <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App