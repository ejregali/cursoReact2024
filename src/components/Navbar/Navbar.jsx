
import React from 'react'
import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/img/logo.svg';
import UserWidget from '../UserWidget/UserWidget';
import SearchWidget from '../SearchWidget/SearchWidget';
import Login from '../Login/Login';

function Navbar() {
  const handleClick = (event) => {
    console.log(event);
  };
  
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt='Logo' className='logo'/>        
        </div>
        <ul className="left-links">
          <li><a href="#">SHOP</a></li>
          <li><a href="#">NOSOTROS</a></li>
          <li><a href="#">CATEGORIAS</a></li>
          <li><a href="#">TESTIMONIOS</a></li>
        </ul>
        <div className="nav-icons">
          <SearchWidget/>
          <UserWidget/>
          <CartWidget number={5} handleClick={handleClick}/>
          <Login/>
        </div>

      </nav>
    </>
  );
}

export default Navbar
