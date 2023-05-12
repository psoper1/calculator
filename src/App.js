import './App.css';
import { useState } from 'react';
import * as math from 'mathjs';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (value) => {
    setDisplayValue(displayValue === '0' ? value : displayValue + '' + value);
  };

  const handleEvaluate = () => {
    try {
      const result = math.evaluate(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEvaluate();
    }
  };

  return (
    <>
    <h1 className='text-center header'>The Best Calculator in the World</h1>
        <div className='calc container'>
          <div className='theApp'>
          <input
          type='text'
            id='inputField'
            placeholder='0'
            value={displayValue === '0' ? '' : displayValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            onChange={(e) => setDisplayValue(e.target.value)}
            className='display form-control'
            onKeyDown={handleKeyPress}
          />
          <div className='col'>
            <button className='buttons btn' onClick={() => handleClick('7')}>7</button>
            <button className='buttons btn' onClick={() => handleClick('8')}>8</button>
            <button className='buttons btn' onClick={() => handleClick('9')}>9</button>
            <button className='buttons btn' onClick={handleClear}>C</button>
          </div>
          <div className='col'>
            <button className='buttons btn' onClick={() => handleClick('4')}>4</button>
            <button className='buttons btn' onClick={() => handleClick('5')}>5</button>
            <button className='buttons btn' onClick={() => handleClick('6')}>6</button>
            <button className='buttons btn' onClick={() => handleClick('/')}>/</button>
          </div>
          <div className='col'>
            <button className='buttons btn' onClick={() => handleClick('1')}>1</button>
            <button className='buttons btn' onClick={() => handleClick('2')}>2</button>
            <button className='buttons btn' onClick={() => handleClick('3')}>3</button>
            <button className='buttons btn' onClick={() => handleClick('*')}>*</button>
          </div>
          <div className='col'>
            <button className='buttons btn' onClick={() => handleClick('+')}>+</button>
            <button className='buttons btn' onClick={() => handleClick('0')}>0</button>
            <button className='buttons btn' onClick={() => handleClick('-')}>-</button>
            <button className='buttons btn' onClick={handleEvaluate}>=</button>
          </div>
          </div>
        </div>
    </>
  );
}

export default App;
