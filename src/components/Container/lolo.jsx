import React from 'react'
const TaskList = ({ productos }) => {
    return (
        <ul>
            {productos.map((productos) => (
                <>
                    <li key={productos.id}>
                        {productos.title} -
                        <span>{productos.completed ? 'Completado' : 'Sin completar'}</span>
                    </li>
                </>
            ))}
        </ul>
    );

};

export default TaskList;
