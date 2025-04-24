import React from 'react'
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'


const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', maxWidth:'1200px',margin:'0 auto',padding:'30px 0',fontSize:'20px'}}>
        <Logo/>
        <Navlist/>
    </div>
  )
}

export default Navbar