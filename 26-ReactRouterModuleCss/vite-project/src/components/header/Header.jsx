import React from 'react'
import Navbar from '../navbar/Navbar'
import style from './header.module.css'
import Hero from '../hero/Hero'

const Header = () => {
  return (
    <div className={style.back}>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Header