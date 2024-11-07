import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
  
    return (
      <div className="section">
        <h2>Counter</h2>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      </div>
    );
  }
  export default Counter;