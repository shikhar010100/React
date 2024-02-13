import { Link } from 'react-router-dom';
import '../styles/cart.scss'
import { FaTrash } from 'react-icons/fa';
type CartItemProps = {
  cartItem: any;
}


const CartItems = ({ cartItem }: CartItemProps) => {
  const { photo, productId, name, price, quantity } = cartItem;
  return (
    <div className='cartitem'>
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`
        }>{name}</Link>
        <span>${price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button><FaTrash /></button>
    </div>
  )
}
export default CartItems;