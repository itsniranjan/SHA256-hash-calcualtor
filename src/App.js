import React, { useState } from 'react';
import './App.css';
const crypto = require('crypto');

function hashData(data) {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}



function App() {
  const [inputValue, setInputValue] = useState('');
  const [hashValue, setHashValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setHashValue(hashData(value));
  };

  return (
    <div className="App">
      <h1>SHA-256 Hashing</h1>
      <input
        type="text"
        placeholder="Enter a string"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Hash Value: {hashValue}</p>
    </div>
  );
}

export default App;

