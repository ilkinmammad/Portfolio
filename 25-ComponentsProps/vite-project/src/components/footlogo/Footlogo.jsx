import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footlogo = () => {
  return (
    <div style={{display:'flex',gap:'20px',fontSize:'40px'}}>
<FaTwitterSquare />
<FaFacebook />
<FaLinkedin />
    </div>
  )
}

export default Footlogo