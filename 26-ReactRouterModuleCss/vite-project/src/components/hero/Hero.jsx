import React from 'react'

import style from './hero.module.css'
const Hero = () => {
    return (
        <div className={style.hero_cont}>
            <h1 style={{ fontWeight: 'bolder', fontSize: '50px', width: '600px', textAlign: 'center' }}>Present your business in a whole new way</h1>
            <p style={{ fontSize: '20px', color: 'gray', width: '600px', textAlign: 'center' }}>Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit!</p>
            <div className={style.btn_div}>
                <button className={style.btn_get}>Get Started</button>
                <button className={style.btn_learn}>Learn More</button>
            </div>
        </div>
    )
}

export default Hero