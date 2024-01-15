import React from 'react'
import './itemListContainerStyled.css'
import BannerImg from '../../assets/img/imgbanner.jpg';


function ItemListContainer({greeting}) {
    console.log(greeting);
  return (
    <div className='containerBanner'>
        <img src={BannerImg} alt='Vela'/>
        <div className="contenidoBanner">
            <h2 className='greeting'>{greeting}</h2>
            <h1>Siempre <span>refresca y calma</span> <br/> tus sentimientos disponibles <br/> con una variedad de <span className='spanVela'>Scandle</span></h1>
            <button>PRODUCTOS</button>
        </div>
    </div>
  )
}

export default ItemListContainer
