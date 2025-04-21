import React from 'react'

const Card = ({image,title,desc}) => {
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center' ,gap:'10px'}}>
        <img style={{width:'400px'}} src={image} alt="" />
        <h4 style={{fontSize:'30px'}}>{title}</h4>
        <p style={{color:'gray'}}>{desc}</p>
    </div>
  )
}

export default Card