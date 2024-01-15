

import React from 'react'
import './cartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget({ number, handleClick }) {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <div className='containerCart'>
        <ShoppingCartIcon className="cartIcon" 
        onClick={(event) => {
          handleClick(event);
          }}
        />
        <span className='cartNumber'>{number}</span>
    </div>
  );
}
                                                                                                                                                                                                                                                                                   
export default CartWidget
