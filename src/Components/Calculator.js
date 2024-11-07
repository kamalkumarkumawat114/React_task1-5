import React from 'react'
import { useState } from 'react';


const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
  return (
    <div className="section">
        <h2>Sum of Two Numbers</h2>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(+e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(+e.target.value)}
        />
        <p>Sum: {num1 + num2}</p>
      </div>
  )
}

export default Calculator