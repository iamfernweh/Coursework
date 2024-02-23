import "./index.css";
import { useState } from "react";

export default function Counter() {
  const [newValue, setNewValue] = useState(99);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h2 className="counter-value">{"count"}</h2>

      <div className="counter-buttons">
        {/* Increment coun by 1 */}
        <button className="counter-button">Increment</button>

        {/* Decrement count by 1 */}
        <button className="counter-button">Decrement</button>

        {/* Reset count */}
        <button className="counter-button">Reset</button>

        {/* Set count to value */}
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button className="counter-button">Set</button>
      </div>
    </div>
  );
}
