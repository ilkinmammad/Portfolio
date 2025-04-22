import React from 'react'
import Featured from '../featured/Featured';
import { FaCartShopping } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { FaLock } from "react-icons/fa";
const Featureds = () => {
    
        let featureds = [
          {
            id: 1,
            title: "Featured title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit",
            image: <FaCartShopping />
          },
          {
            id: 2,
            title: "Featured title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit",
            image: <MdComputer />
          },
          {
            id: 3,
            title: "Featured title",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit",
            image: <FaLock />
          }
        ]
    return (
      <div style={{display:'flex',justifyContent:'center' , margin:'40px 0', gap:'40px'}}>
      {featureds.map((featured) => (
        <Featured 
        key={featured.id} 
        icon={featured.image} 
        title={featured.title} 
        desc={featured.desc} 
        />
      ))}
      </div>
  )
}

export default Featureds