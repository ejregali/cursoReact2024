import React from 'react'
import './searchWidgetStyled.css';
import Search from '../../assets/img/search.svg';


function SearchWidget() {
  return (
    <div className='containerSearch'>
      <img src={Search} alt='Busqueda' className="searchIcon"/> 
    </div>
  )
}

export default SearchWidget
