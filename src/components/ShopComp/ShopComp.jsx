import React from 'react'
import Item from '../Item/Item'
import './shopCompStyled.css';


function ShopComp() {

  return (
    <>
    
    <div className='containerShop'>
        <div className="filter">
            
        </div>
        
            <div className="itemlistShop">
                <div className="tituloListShop">
                    <h1>Candles</h1>
                    <div className="shortBy">
                        <h2>Sort By: rffr</h2>
                    </div>
                </div>
                <Item/>
         </div>
            
        
        
    </div>
    </>)

}

export default ShopComp
