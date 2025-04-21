import React from 'react'
import Footleft from '../footleft/Footleft'
import Footlogo from '../footlogo/Footlogo'
import Footright from '../footright/Footright'

const Footer = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between' ,margin:'0 80px 20px 80px',alignItems:'center' }}>
        <Footleft/>
        <Footlogo/>
        <Footright/>
    </div>
  )
}

export default Footer