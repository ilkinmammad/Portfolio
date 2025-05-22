import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, getProducts, high, low, search } from '../../redux/features/productSlice';
import "./admin.css"
import {useFormik} from "formik"


const Admin = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const {handleChange ,handleSubmit , errors , values } = useFormik({
    initialValues:{
      name:"",
      image:"",
      price:"",
      title:"",
    } , onSubmit:(values ,{resetForm}) => {
dispatch(createProduct(values))
resetForm()
    }
  })
  const {image , name ,price,title} = values
  return (
    <div>
      <div className="Container">
        <div className="creating">
          <form onSubmit={handleSubmit} action="">
            <input type="text"
              name='image'
              placeholder='  img url'
              value={image}
onChange={handleChange}
            />
            <input type="text"
              name='name'
              placeholder='  name'
              value={name}
onChange={handleChange}
            />
            <input type="number"
              name='price'
              placeholder='  price'
              value={price}
onChange={handleChange}
            />
            <input type="text"
              name='title'
              placeholder='  title'
              value={title}
onChange={handleChange}
            />
            <button type='submit'>  CREATE</button>
          </form>
        </div>
      </div>

      <div className="Container">
        <div className="action">
          <input type="text" className='search' placeholder='   Search...' onChange={(e) => dispatch(search(e.target.value))} />
          <div className='sort'>
            <button onClick={() => dispatch(low())}>High to Low</button>
            <button onClick={() => dispatch(high())}>Low to High</button>
          </div>
        </div>
      </div>

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

          {products && products.map((item) =>
            <tr key={item._id}>
              <td style={{ width: "20%" }}> <img style={{ width: "100%" }} src={item.image} alt="" /> </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td><button onClick={() => dispatch(deleteProduct(item._id))}> remove </button></td>
            </tr>)}



        </tbody>
      </Table>
    </div>
  )
}

export default Admin