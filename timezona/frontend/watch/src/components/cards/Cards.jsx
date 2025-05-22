import React from 'react'
import "./cards.css"
import { useDispatch } from 'react-redux'
import { addBasket } from '../../redux/features/basketSlice'
import { FaRegHeart } from "react-icons/fa";
import { addWishlist } from '../../redux/features/wishlistSlice';


const Cards = ({product}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <div className="cards">
                <img style={{width:"100%"}} src={product.image} alt="" />
                <FaRegHeart style={{position:"absolute",top:"10px",right:"10px"}} onClick={()=>dispatch(addWishlist(product))} size={24}/>
                

                <h3> {product.name} </h3>
                <span>${product.price}</span>
                <button className='cards-btn' onClick={()=>dispatch(addBasket(product))}>  Add to Basket</button>
            </div>
            
        </div>
    )
}

export default Cards