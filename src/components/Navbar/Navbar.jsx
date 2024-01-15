
import React from 'react'
import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  const handleClick = (event) => {
    console.log(event);
  };
  
  return (
    <div className='navBar'>
        <h1>NAVBAR</h1>
        <nav>
      <div className="left-icons">
        <img src="search-icon.png" alt="Buscar" />
        <img src="cart-icon.png" alt="Carrito" />
        <button>Login</button>
      </div>
      <div className="logo">
        <h1>SOPLALAVELA</h1>
      </div>
      <div className="right-links">
        <a href="#">SHOP</a>
        <a href="#">ABOUT</a>
        <a href="#">BLOG</a>
        <a href="#">TESTIMONIALS</a>
      </div>
    </nav>
        <CartWidget number={8} handleClick={handleClick}/>
        
    </div>
  );
}

export default Navbar
