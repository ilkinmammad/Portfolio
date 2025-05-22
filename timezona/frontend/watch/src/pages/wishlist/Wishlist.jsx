import { useDispatch, useSelector } from 'react-redux';
import Wishcard from '../../components/wishcard/Wishcard';



const Wishlist = () => {
    const dispatch = useDispatch()
    const {wishlist} = useSelector((state)=>state.wishlist)
  return (
    <div className='Container' >
      <div className="total">
        
      {wishlist && wishlist.map((item)=> <Wishcard key={item._id} item={item}/> )}
      </div>



       
  
    
    </div>
  )
}

export default Wishlist