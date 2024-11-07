import React from 'react'
import { useState } from 'react';

const Additems = () => {

    const addItem = () => setItems([...items, `Item ${items.length + 1}`]);
    const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);
  return (
   
    <div className="section">
        <h2>Dynamically Add Items</h2>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
  )
}

export default Additems