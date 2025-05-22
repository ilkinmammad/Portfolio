import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import "./navlist.css"

const Navlist = () => {
  return (
<div style={{display:"flex" , gap:"20px"}}>
      <div className="navlistt">
        <ul className='navlist' style={{display:"flex" , gap:"20px"}}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      
      <li>
        <Link to="/blog">BLog</Link>
      </li>
      <li>
        <Link to="/pages">Pages</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      

    </ul>
      </div>
    <div className='hamburger'>
<GiHamburgerMenu />
</div>

</div>
  )
}

export default Navlist