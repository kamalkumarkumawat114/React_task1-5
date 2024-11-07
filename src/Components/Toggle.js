import React from 'react'
import { useState } from 'react';

const Toggle = () => {
    const [show, setShow] = useState(true);
  return (
    <div className="section">
        <h2>Toggle Element</h2>
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'} Element
        </button>
        {show && <p>This is a toggleable element.</p>}
      </div>
  )
}

export default Toggle