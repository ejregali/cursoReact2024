import React, { useEffect, useState } from 'react';
import './itemStyled.css';
import { getProducts } from '../../serverMock/productMock';

function Item() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getProducts().then((res) => setItems(res));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      
      <div className="tituloListShop">
                    <h1>Candles</h1>
                    <div className="shortBy">
                        <h2>Sort By: </h2>
                        <div className="categories">
                          <button onClick={() => handleCategoryChange(null)}>ALL</button>
                          <button onClick={() => handleCategoryChange('Hogar')}>HOGAR</button>
                          <button onClick={() => handleCategoryChange('Relax')}>RELAX</button>
                          <button onClick={() => handleCategoryChange('elements')}>ELEMENT</button>
                        </div>
                    </div>
                </div>
      {items
        .filter((item) => !selectedCategory || item.category === selectedCategory)
        .map((item) => {
          const { img, name, id, price, category, description } = item;
          return (
            <div key={id} className="containerCard">
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
                <h2 className="detalle">Category: {category}</h2>
                <button>ADD TO CART +</button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Item;
