import React from 'react'
const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <>
                    <li key={task.id}>
                        {task.title} -
                        <span>{task.completed ? 'Completado' : 'Sin completar'}</span>
                    </li>
                </>
            ))}
        </ul>
    );

};

export default TaskList;
