import './App.css';
import { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (value) => {
    setDisplayValue(displayValue === '0' ? value : displayValue + '' + value);
  };

  return (
    <>
    <div className='container mainview'>
    <div className='display'>{displayValue}</div>
      <div className='col col-4'>
    <button className='buttons' onClick={() => handleClick('9')}>9</button>
    <button className='buttons' onClick={() => handleClick('8')}>8</button>
    <button className='buttons' onClick={() => handleClick('7')}>7</button>
    <button className='buttons' onClick={() => setDisplayValue('0')}>C</button>
    </div>
    <div className='col col-4'>
    <button className='buttons' onClick={() => handleClick('6')}>6</button>
    <button className='buttons' onClick={() => handleClick('5')}>5</button>
    <button className='buttons' onClick={() => handleClick('4')}>4</button>
    <button className='buttons' onClick={() => handleClick('/')}>/</button>
    </div>
    <div className='col col-4'>
    <button className='buttons' onClick={() => handleClick('3')}>3</button>
    <button className='buttons' onClick={() => handleClick('2')}>2</button>
    <button className='buttons' onClick={() => handleClick('1')}>1</button>
    <button className='buttons' onClick={() => handleClick('*')}>*</button>
    </div>
    <div className='col col-4'>
    <button className='buttons justify-content-center' onClick={() => handleClick('0')}>0</button>
    <button className='buttons' onClick={() => handleClick('+')}>+</button>
    <button className='buttons' onClick={() => handleClick('-')}>-</button>
    <button className='buttons' onClick={() => setDisplayValue(eval(displayValue))}>=</button>
    </div>
    </div>
    </>
  );
}

export default App;
