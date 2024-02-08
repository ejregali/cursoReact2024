import React from 'react'
import TaskList from './lolo';
import FilterTask from '../Filter/FilterTask';
import {filterState} from 'react';
import {getProducts, productos} from '../../serverMock/productMock';
import Item from '../Item/Item';

const Container = () => {
    /*const productos = [
        { id: '1', title: 'Comprar Frutas', completed: true },
        { id: '2', title: 'Estudiar React', completed: true },
         {id: '3', title: 'Entrgar PDF', completed: false },
    ];*/

    const aplyfilter = (filterState) => {
      switch(filterState){  
        case "all":
          return productos;
        case "Hogar":
          return productos.filter((productos) => productos.category);
        case "Relax":
          return productos.filter((productos) => !productos.category);
      }
    };

  return (
    <div>
        <FilterTask 
            render={(handleChange, filterState) => (
                <div>
                    <label htmlFor="filter">Filtra por estados</label>
                    <select onChange={handleChange} value={filterState}>
                        <option value="all">Todos</option>
                        <option value="completed">Relax</option>
                        <option value="uncompleted">Hogar</option>
                    </select>
                    <Item productos={aplyfilter(filterState)}/>
                </div>
            )}
        />

      
    </div>
  );
};

export default Container;
