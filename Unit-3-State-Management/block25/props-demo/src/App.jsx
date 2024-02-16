import { useState } from 'react'
import './App.css'
import Item from "./components/Item"; //no { } since we are importing HTML
import Cart from './components/Cart';

function App() {
  //make array of items, map over them to build <item> components

  const [cart, setCart] = useState([])
  
  //cart is an array of item Objects
  const addToCart = (itemName, itemPrice) => {
    setCart([...cart, {itemName, itemPrice}])
  }

  return (
    <>
      <h1>Block 25 Props Demo - Grocery List</h1>
      <h2>Items</h2>
      <Item name='apples' price={3} addToCart={addToCart}></Item>
      <Item name='oranges' price={4} addToCart={addToCart}></Item>
      <Item name='bananas' price={0.25} addToCart={addToCart}></Item>
      <Item name='eggs' price={7} addToCart={addToCart}></Item>

      <hr/>

      <h2>Cart</h2>
      <Cart cart={cart}></Cart>
    </>
  )
}

export default App
