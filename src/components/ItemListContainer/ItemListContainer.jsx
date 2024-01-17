import React from 'react'
import './itemListContainerStyled.css'
import BannerImg from '../../assets/img/imgbanner.jpg';
import ProductCard from '../ProductCard/ProductCard';


function ItemListContainer({greeting}) {
    console.log(greeting);
  return (
    <>
    <div className='containerBanner'>
        <img src={BannerImg} alt='Vela'/>
        <div className="contenidoBanner">
            <h2 className='greeting'>{greeting}</h2>
            <h1>Siempre <span>refresca y calma</span> <br/> tus sentimientos con una <br/>variedad de <span className='spanVela'>Scandle</span></h1>
            <button>PRODUCTOS</button>
        </div>
    </div>
    <ProductCard />
    </>
  )
}

export default ItemListContainer
