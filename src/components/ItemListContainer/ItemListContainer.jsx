import React from 'react'
import './itemListContainerStyled.css'
import BannerImg from '../../assets/img/imgbanner.jpg';
import Item from '../Item/Item';

function ItemListContainer({greeting}) {


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
    <div className="tituloLista">
      <h2>TENDENCIA</h2>
      <h1>Conoce nuestros mejores productos </h1>
    </div>
    <div className="listadeproductos">
        <Item />
    </div>
    </>
  )
}

export default ItemListContainer
