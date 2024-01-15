

import React from 'react'
import './cartWidget.css'
import Bag from '../../assets/img/bag.svg';


function CartWidget({ number, HandleClick }) {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <div className='containerCart'>
      <img src={Bag} alt='Bag' className="cartIcon" onClick={(event) => {handleClick(event);}}/> 
        <span className='cartNumber'>{number}</span>
    </div>
  );
}
                                                                                                                                                                                                                                                                                   
export default CartWidget
