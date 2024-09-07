import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const multipleDecimalsRegex = /\..*\./;
  const validateInput = (input) => {
    if (multipleDecimalsRegex.test(input)) {
      return false; // input contains multiple decimal points
    }
    return true; // input is valid
  };

  function calCulateResult(input) {
    try {
      const operators = ['+', '-', '*', '/', '%'];
      let operator = null;

      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i];
          break;
        }
      }

      if (!validateInput(input)) {
        setInput('SYNTAX ERROR');
        return;
      }

      if (!operator) {
        if (input === '') {
          setInput('');
          return;
        }
        setInput(parseFloat(input).toString());
        return;
      }

      const [op1, op2] = input.split(operator).map(parseFloat);

      let result;
      switch (operator) {
        case '+':
          result = op1 + op2;
          break;
        case '-':
          result = op1 - op2;
          break;
        case '*':
          result = op1 * op2;
          break;
        case '/':
          result = op1 / op2;
          break;
        case '%':
          result = op1 % op2;
          break;
        default:
          throw new Error('Invalid Expression');
      }
      setInput(result.toString());
    } catch (error) {
      setInput('SYNTAX ERROR');
    }
  }

  function handleButtonClick(value) {
    if (value === 'C') {
      setInput('');
    } else if (value === '<') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      calCulateResult(input);
    } else {
      setInput((prevValue) => prevValue + value);
    }
  }
  return (
    <div className="container">
      <div className="calc">
        <h1 className="input">{input}</h1>
        <div>
          <button onClick={() => handleButtonClick('C')}>C</button>
          <button onClick={() => handleButtonClick('<')}>&lt;</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('00')}>00</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
