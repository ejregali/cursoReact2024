
import React from 'react'
import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/img/logo.svg';
import UserWidget from '../UserWidget/UserWidget';
import SearchWidget from '../SearchWidget/SearchWidget';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleClick = (event) => {
    console.log(event);
  };
  
  return (
    <>
      <nav>
        
        <ul className="left-links">
          <Link to='/shop'><li><a href="#">SHOP</a></li></Link>
          <Link to='/nosotros'><li><a href="#">NOSOTROS</a></li></Link>
          <Link to='/categorias'><li><a href="#">CATEGORIAS</a></li></Link>
          <Link to='/testimonios'><li><a href="#">TESTIMONIOS</a></li></Link>
        </ul>
        <div className="logo">
          <Link to='/'><img src={Logo} alt='Logo' className='logo'/></Link>  
        </div>
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
