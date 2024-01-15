import React from 'react';
import './counterStyled.css';
import { useState } from 'react';

function Counter() {
  const [valor, setValor] = useState(0);

  const sumar = () => {
    setValor(valor + 1);
  };

  const restar = () => {
    setValor(valor - 1)
  }

  return (
    <div className='counter'>
        <p>{valor}</p>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
    
    </div>
  )
}

export default Counter
