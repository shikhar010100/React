import  { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc';
import CartItems from '../components/cartItems';
import { Link } from 'react-router-dom';
const cartItems = [
  {
    productId:"sdfs",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRQqzihZ0oLFJPvDHrAlxqGL0VeQWiEYf0Q&usqp=CAU",
    name:"",
    price:3000,
    quantity:4,
    stock:10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges - discount;



const Cart = () => {
  const [coupenCode, setCoupenCode] = useState<string>("");
  const [isvalidCoupenCode, setIsValidCoupenCode] = useState<boolean>(false);
 
  useEffect(()=>{
    const timeOutId = setTimeout(()=>{
      if(Math.random()>0.5)setIsValidCoupenCode(true);
      else setIsValidCoupenCode(false);
    },1000)
    return()=>{
clearTimeout(timeOutId)
setIsValidCoupenCode(false)
    };
  },[coupenCode]);

 
  return (
    <div className='cart'>
      <main>
       {cartItems.length>0?( cartItems.map((i,idx)=>(
          <CartItems key={idx} cartItem={i}/>
       ))):( <h1>No Items Added</h1>)
       }

      </main>
      <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount:<em className='red'>-${discount}</em>
        </p>
        <p>
          <b>Total: ${total}</b>
        </p>
        <input type="text" placeholder='Coupen Code' value={coupenCode} onChange={(e) => setCoupenCode(e.target.value)} />
        {coupenCode && (isvalidCoupenCode ? (
        <span className='green'>
          ${discount} off using the <code>{coupenCode}</code>
          </span>
        ) : (
        <span className='red'>
          Invalid Coupen <VscError />
          </span>
        ))}

        {cartItems.length>0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  )
}
export default Cart;