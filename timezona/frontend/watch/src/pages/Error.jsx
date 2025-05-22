import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <div className="text-area">
        <p style={{color:"black"}}>This page not found</p>
        <p style={{color:"black"}}>Please come back <Link to="/"> HOME </Link> page</p>
      </div>
    </div>
  )
}

export default Error