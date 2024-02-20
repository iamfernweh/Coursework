import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  return(
    <div className ='App'>
      <Button count={count} setCount={setCount} />
    </div>
  );
}

function Button(props) {
  console.log("Props: ", props);
  return (
    <button
      onClick={() => {
        props.setCount(props.count+1);
      }}
    >
            {props.count}
          
    </button>
  );
}
