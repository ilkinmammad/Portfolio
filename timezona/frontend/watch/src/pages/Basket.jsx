import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { minusBtn, pilusBtn, removeBasket } from '../redux/features/basketSlice';


const Basket = () => {
    const dispatch = useDispatch()
    const {basket} = useSelector((state)=>state.basket)
  return (
    <div className='Container'>

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Settings</th>
        </tr>
      </thead>
      <tbody>

      {basket && basket.map((item)=> 
         <tr key={item._id}>
          <td style={{width:"20%"}}> <img style={{width:"100%"}} src={item.image} alt="" /> </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td> <button style={{width:"30px"}} onClick={()=>dispatch(minusBtn(item))}>-</button> {item.count}   <button onClick={()=>dispatch(pilusBtn(item))} style={{width:"30px"}} >+</button>  </td>
          <td><button onClick={()=>dispatch(removeBasket(item))}> remove </button></td>
        </tr>)}

       
  
      </tbody>
    </Table>
    </div>
  )
}

export default Basket