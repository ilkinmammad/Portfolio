import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Wrap = () => {
     const dispatch = useDispatch()
    const {basket} = useSelector((state)=>state.basket)

    const totalCount = basket.reduce((sum,item)=>sum+item.count , 0)
  return (
    <div  style={{display:"flex" , gap:"10px"}}>
      


      <Link to="/wishlist">
<FaRegHeart size={24}/>
      </Link>
      
      <Link to="/basket">
      
<MdOutlineShoppingCart size={24}/>
<sup> {totalCount} </sup>
      </Link>
      
      <Link to="/admin">
<RiAdminFill size={24}/>
      
      </Link>
    </div>
  )
}

export default Wrap