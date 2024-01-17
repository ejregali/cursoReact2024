import React from 'react'
import './productCardStyled.css'
import Card1 from '../../assets/img/card1.jpg';

function ProductCard() {
  return (
    <div className='containerCard'>
        <img src={Card1} alt="Card1/Producto1" />
        <div className="precio">
            <h1 className='titulo'>Relax de Vainilla</h1>
            <h1 className='precio'>$20</h1>
            <h2 className='detalle'>Detalle</h2>
            <button>AD TO CART +</button>
        </div>
    </div>
  )
}

export default ProductCard
