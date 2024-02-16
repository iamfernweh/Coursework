import { useState } from 'react'
import './App.css'
import Item from "./components/Item"; //no { } since we are importing HTML
import Cart from './components/Cart';

function App() {
  // V.2 make array of items, map over them to build <Item> components
  const [items, setItems] = useState([
    {id: 1, name: "apples", price: 3},
    {id: 2, name: "oranges", price: 4},
    {id: 3, name: "bananas", price: 0.25},
    {id: 4, name: "eggs", price: 7},
  ])

  // cart is an array of item Objects
  // [ { name: apples, price: 2}, {...} ]
  const [cart, setCart] = useState([])

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals
  // You can use spread syntax to make a shallow copy of an array. 
  const addToCart = (itemName, itemPrice) => {
    setCart([...cart, {itemName, itemPrice}])
  }

  return (
    <>
      <h1>Block 25 Props Demo - Grocery List</h1>
      {/* <h2>Items V.1</h2>
      <Item name="apples" price={3} addToCart={addToCart}></Item>
      <Item name="oranges" price={4} addToCart={addToCart}></Item>
      <Item name="bananas" price={0.25} addToCart={addToCart}></Item>
      <Item name="eggs" price={7} addToCart={addToCart}></Item> */}

      <h2>Items V.2</h2>
      {items.map((item) => <Item key={item.id} name={item.name} price={item.price} addToCart={addToCart}></Item>)}
      <hr />

      <h2>Cart</h2>
      <Cart cart={cart}></Cart>
    </>
  )
}

export default App