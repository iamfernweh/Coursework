import { useState } from 'react'
import './App.css'
import Item from "./components/Item"; //no { } since we are importing HTML

function App() {
  //make array of items, map over them to build <item> components

  return (
    <>
      <h1>Block 25 Props Demo - Grocery List</h1>
      <h2>Items</h2>
      <Item name='apples' price={3}></Item>
      <Item name='oranges' price={4}></Item>
      <Item name='bananas' price={0.25}></Item>
      <Item name='eggs' price={7}></Item>

      <hr/>

      <h2>Cart</h2>
       {/* TODO */}
    </>
  )
}

export default App
