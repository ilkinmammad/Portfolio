import React from 'react'
import Wrap from '../wrap/Wrap'
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'

const Navbar = () => {
  return (
    <div className='Container' style={{display:"flex" , padding:"30px 0" ,justifyContent:"space-between" ,alignItems:"center"}}>
      <Logo/>
      <Navlist/>
      <Wrap/>
    </div>
  )
}

export default Navbar