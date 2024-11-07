import React from 'react'
import { useState } from 'react';


const DisplyRecord = () => {
    const [items] = useState(['Record 1', 'Record 2', 'Record 3']);

    // const items =[record1,record2,record3]
  return (
    <div className="section">
        <h2>Display Records</h2>
        <ul>
          {items.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </div>
  )
}

export default DisplyRecord