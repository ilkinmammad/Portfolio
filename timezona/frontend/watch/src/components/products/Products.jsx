import React, { useEffect } from 'react'
import "./products.css"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/productSlice'
import Cards from '../cards/Cards'

const Products = () => {
    const dispatch = useDispatch()
    const {products} = useSelector((state)=>state.products)
    console.log(products);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    

  return (
    <div className='Container' style={{padding:"50px 0"}}>
        <div className="text-area">
            <h3>Popular Items</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur labore repellendus incidunt nihil tenetur maiores architecto blanditiis!</p>
        </div>
        <div className="product">
{products && products.map((product) => <Cards key={product._id} product={product} />)}
        </div>

<div className="btnpro">
    <button className='view'> View More Products</button>

</div>
    </div>
  )
}

export default Products