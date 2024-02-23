import { useState } from "react";
import { increment, decrement, reset, set } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const [newValue, setNewValue] = useState(100);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h2 className="counter-value">{count}</h2>

      <div className="counter-buttons">
        {/* Increment coun by 1 */}
        <button className="counter-button" onClick={() => dispatch(increment())}>Increment</button>

        {/* Decrement count by 1 */}
        <button className="counter-button" onClick={() => dispatch(decrement())}>Decrement</button>

        {/* Reset count */}
        <button className="counter-button" onClick={() => dispatch(reset())}>Reset</button>

        {/* Set count to value */}
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button className="counter-button" onClick={() => dispatch(set(newValue))}>Set</button>
      </div>
    </div>
  );
}
