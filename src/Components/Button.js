import React from 'react'
import { useState } from 'react';


const Button = () => {
    const [isEnabled, setIsEnabled] = useState(false);
  return (
    <div className="section">
    <h2>Enable/Disable Button</h2>
    <input type="checkbox" onChange={() => setIsEnabled(!isEnabled)} />
    <button disabled={!isEnabled}>Click Me</button>
  </div>
  )
}

export default Button