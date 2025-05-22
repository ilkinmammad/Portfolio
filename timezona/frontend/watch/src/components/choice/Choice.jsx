import React from 'react'
import "./choi.css"

const Choice = () => {
  return (
    <div>
      <div className="Container">
        <div className="total">
          <div className="choi-cont">
            <h2>Watch of Choice</h2>
            <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <button className='choi-btn'>Show Watches</button>
          </div>


          <div className="choi-image">
            <img style={{width:"100%"}} src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png" alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Choice