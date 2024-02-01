import React from 'react'
import './itemStyled.css'
import {useEffect, useState} from 'react';
import {getProducts} from '../../serverMock/productMock';




function ProductCard() {
  const [items, setItems] = useState([])
useEffect (() => {
  getProducts().then((res)=> setItems(res));
},[])

  return (
<>
      {items.map ((item) => {
          const { img, name, id, price, category, description} = item;
          return (
            <div key={id} className='containerCard'>
              <img src={img} alt={name} />
              <div className="contenido">
                <div className="columna">
                  <h1 className="titulo">{name}</h1>
                  <div className="precios">
                    <h1 className="precioreal">${price}</h1>
                    <h1 className="preciotachado">$24</h1>
                  </div>
                </div>
                <h2 className="detalle">{description}</h2>
                <button>ADD TO CART +</button>
              </div>
            </div>
          );
          }
    )}
</>
  )}


export default ProductCard
