import React from 'react';
import Task from './Task';

const TaskList = ({todos, setTodos, filterTodos}) => {
    return (
        <div className="task-container">
        <ul className="task-list">
        {filterTodos.map((task) => (
            <Task 
             setTodos={setTodos}
             todos={todos}
             key={task.id} 
             task={task}
             text={task.text} 
             Time={task.Time} />
        
        ))}
        </ul>
      </div>
    )
}

export default TaskList

