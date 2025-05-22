import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeWishlist } from '../../redux/features/wishlistSlice';
import { useDispatch } from 'react-redux';

const Wishcard = ({item}) => {
    const dispatch = useDispatch()

  return (
    <div>
        
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.title}
        </Card.Text>
        <Card.Text>
         $ {item.price}
        </Card.Text>
        <Button onClick={()=>dispatch(removeWishlist(item))} variant="primary">remove to wishlist</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Wishcard