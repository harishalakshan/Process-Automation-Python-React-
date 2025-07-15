import React, { useState } from 'react';
import axios from 'axios';

export default function AutomationForm() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/predict', { data: input });
    setResult(res.data.result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Predict</button>
      {result && <p>Prediction: {result}</p>}
    </form>
  );
}