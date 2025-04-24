import React from 'react'
import style from './navlist.module.css'
import { Link } from 'react-router-dom'
const Navlist = () => {
    return (
        <div >
            <ul style={{display:'flex',gap:'20px'}}>
            <li className={style.list}><Link to="/" >Home</Link></li>
            <li className={style.list}><Link to="/about" >About</Link></li>
            <li className={style.list}><Link to="/contact" >Contact</Link></li>
            <li className={style.list}><Link to="/services" >Services</Link></li>
        </ul>
        </div>
    )
}

export default Navlist