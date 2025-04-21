import React from 'react'
import './hero.css'
import Button from '../button/Button'

const Hero = () => {
  return (
    <div className='hero'>
      <p style={{fontSize:'30px'}}>Welcome To Our Studio!</p>
      <h1 style={{fontSize:'60px'}}>IT'S NICE TO MEET YOU</h1>
      <Button/>
    </div>
  )
}

export default Hero
