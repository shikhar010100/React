import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/home.scss'
import Product_cart from '../components/product_cart';
const addToCartHandler = () =>{}
const Home = () => {
  return (
    <div className='home'>
   <section></section>
   <h1>Latest Product
   <Link to='/Search' className="findMore">
     More
   </Link>
   </h1>
   <main><Product_cart  productId='sdfasd' name='macbook' price={788} stock={21} handler={addToCartHandler} photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRQqzihZ0oLFJPvDHrAlxqGL0VeQWiEYf0Q&usqp=CAU'/>
   <Product_cart  productId='sdfasd' name='macbook' price={788} stock={21} handler={addToCartHandler} photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRQqzihZ0oLFJPvDHrAlxqGL0VeQWiEYf0Q&usqp=CAU'/>
   <Product_cart  productId='sdfasd' name='macbook' price={788} stock={21} handler={addToCartHandler} photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRQqzihZ0oLFJPvDHrAlxqGL0VeQWiEYf0Q&usqp=CAU'/>
   <Product_cart  productId='sdfasd' name='macbook' price={788} stock={21} handler={addToCartHandler} photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRQqzihZ0oLFJPvDHrAlxqGL0VeQWiEYf0Q&usqp=CAU'/></main>
   </div>
  )
}
export default Home ;