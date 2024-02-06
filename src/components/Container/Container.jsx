import React from 'react'
import TaskList from './TaskList';
import FilterTask from '../Filter/FilterTask';

const Container = () => {
    const tasks = [
        { id: '1', title: 'Comprar Frutas', completed: true },
        { id: '2', title: 'Estudiar React', completed: true },
         {id: '3', title: 'Entrgar PDF', completed: true },
    ];

  return (
    <div>
        <FilterTask 
            render={(handleChange, filterState) => (
                <div>
                    <label htmlFor="filter">Filtra por estados</label>
                    <select onChange={handleChange} value={filterState}>
                        <option value="all">Todos</option>
                        <option value="completed">Completados</option>
                        <option value="uncompleted">Sin completar</option>
                    </select>
                </div>
            )}
        />

      <TaskList tasks={tasks}/>
    </div>
  );
};

export default Container;
