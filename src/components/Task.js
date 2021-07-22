import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const Task = ({text, Time, task, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== task.id));
        toast('Task has been deleted Successfully!', {
            type: 'error',
            autoClose: 30000,
            pauseOnHover: false,
        });
    };
    const completeHandler = () => {
        setTodos(todos.filter((el) => el.id !== task.id));
        toast('Task has been completed Successfully!', {
            type: 'success',
            autoClose: 30000,
            pauseOnHover: false,
        });
    };
    
    return (
        <div className="task">
            <li className="task-item">{text}</li>
            <li className="task-item">{Time}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Task
