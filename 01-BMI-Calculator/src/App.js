import React, { useMemo, useState } from 'react';
import './App.css';

const App = () => {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(100);

  function handleHeight(e) {
    setHeight(e.target.value);
  }

  function handleWeight(e) {
    setWeight(e.target.value);
  }

  const output = useMemo(() => {
    const heightInMetres = height / 100;
    const bmi = weight / (heightInMetres * heightInMetres);
    return bmi.toFixed(1);
  }, [height, weight]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={handleWeight}
          value={weight}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="100"
          max="220"
          onChange={handleHeight}
          value={height}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is:</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
