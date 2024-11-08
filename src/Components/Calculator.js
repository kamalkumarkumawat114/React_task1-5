import React, { useState } from 'react';

function SumTwoNumbers() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleNum1Change = (e) => {
    let value = e.target.value;
    if (validateInput(value)) {
      setNum1(value);
    }
  };

  const handleNum2Change = (e) => {
    let value = e.target.value;
    if (validateInput(value)) {
      setNum2(value);
    }
  };

  const validateInput = (value) => {
    // Allow only one optional "-" at the beginning followed by numbers
    // Disallow any spaces
    const regex = /^-?\d*\.?\d*$/;
    return regex.test(value);
  };

  const calculateSum = () => {
    if (!disabled) {
      const number1 = parseFloat(num1) || 0;
      const number2 = parseFloat(num2) || 0;
      setSum(number1 + number2);
    }
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="section">
      <h1>Sum of Two Numbers</h1>
      <input
        type="text"
        value={num1}
        onChange={handleNum1Change}
      
      />
      
      <input
        type="text"
        value={num2}
        onChange={handleNum2Change}
        
      />
      <button onClick={calculateSum} disabled={disabled}>Calculate</button>
      <button onClick={toggleDisable}>
        {disabled ? 'Enable' : 'Disable'} Calculate
      </button>
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
}

export default SumTwoNumbers;
