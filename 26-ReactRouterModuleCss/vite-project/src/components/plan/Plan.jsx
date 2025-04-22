import React from 'react'

const Plan = ({title,price,users,features,disabled}) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '250px' }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '24px', margin: '10px 0' }}>{price} / mo.</p>
      <p>{users}</p>
      <div style={{ marginTop: '10px' }}>
        {features.map(f => <p>✓ {f}</p>)}
        {disabled.map(d => <p style={{ color: '#999' }}>✕ {d}</p>)}
      </div>
      <button style={{ marginTop: '20px', width: '100%', padding: '8px', border: '1px solid blue', color: 'blue', borderRadius: '5px' }}>
        Choose plan
      </button>
    </div>
  )
}

export default Plan