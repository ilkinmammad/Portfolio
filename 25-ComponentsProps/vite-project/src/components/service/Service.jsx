import React from 'react'

const Service = ({icon , title , desc}) => {
  return (
    <div style={{width:'350px',textAlign:'center'}}>
      {icon }
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Service 