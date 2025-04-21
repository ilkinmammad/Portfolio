import React from 'react'
import Servicetitle from '../servicetitle/Servicetitle'
import Service from '../service/Service'
import { FaCartShopping } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { FaLock } from "react-icons/fa";




const Services = () => {
  let services = [
    {
      id: 1,
      title: "E-Commerce",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit",
      image: <FaCartShopping />
    },
    {
      id: 2,
      title: "Responsive Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit",
      image: <MdComputer />
    },
    {
      id: 3,
      title: "Web Security",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit",
      image: <FaLock />
    }
  ]
  return (
    <div>
      <Servicetitle />

      <div style={{display:'flex',justifyContent:'center' , margin:'40px 0', gap:'40px'}}>
      {services.map((service) => (
        <Service 
        key={service.id} 
        icon={service.image} 
        title={service.title} 
        desc={service.desc} 
        />
      ))}
      </div>
    </div>
  )
}

export default Services