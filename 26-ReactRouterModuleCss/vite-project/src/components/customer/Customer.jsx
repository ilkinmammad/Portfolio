import React from 'react'
import style from './customer.module.css'
const Customer = () => {
  return (
    <div className={style.container}>
    <h2 className={style.title}>Customer testimonials</h2>
    <p className={style.subtitle}>Our customers love working with us</p>

    <div className={style.testimonials}>
      <div className={style.card}>
        <p>Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!</p>
        <p>- Client Name, Location</p>
      </div>

      <div className={style.card}>
        <p>The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!</p>
        <p>- Client Name, Location</p>
      </div>
    </div>
  </div>
  )
}

export default Customer