import React from 'react'
import { useState } from 'react';


const Binding = () => {
    const [text, setText] = useState('');
  return (
    <div className="section">
        <h2>Two-Way Data Binding</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>You typed: {text}</p>
      </div>
  )
}

export default Binding