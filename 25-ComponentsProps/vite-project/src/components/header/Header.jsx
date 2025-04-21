import React from 'react'
import Navbar from '../navbar/Navbar'
import '../header/header.css'
import Hero from '../hero/Hero'


const Header = () => {
  return (
    <div className='header-container'>
     <Navbar/>
     <Hero/>
    </div>
  )
}

export default Header
 