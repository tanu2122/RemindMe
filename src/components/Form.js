import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "glamor";

toast.configure();


const Form = ({inputText, setInputText, inputTime, setInputTime, todos, setTodos, currentTime, time, task}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };    

    function getDateTime() {
        var now = new Date();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds();
        if(hour.toString().length === 1) {
            hour = '0'+hour;
       }
       if(minute.toString().length === 1) {
            minute = '0'+minute;
       }
       if(second.toString().length === 1) {
            second = '0'+second;
       }  
       var dateTime = hour+':'+minute+':'+second; 
         return dateTime;
         
    }
    setInterval(function(){
        currentTime = getDateTime();
     
        if(currentTime === time)
        {
            toast('You have late taks! If done set as completed...', {
                        type: 'warning',
                        autoClose: 30000,
                        pauseOnHover: false,
                    });  
        }
        
    }, 1000);

    const inputTimeHandler = (e) => {
            setInputTime(e.target.value);  
            time=e.target.value;
    };
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, Time: inputTime, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
        setInputTime("");
    };

  
    return (
        <form>
        <div className="next"><input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Task Name"/></div>
        <div className="next"><input value={inputTime} onChange={inputTimeHandler} id="appt-time" type="time" name="appt-time" step="2" className="todo-input" />
        </div>
        <div className="next"><button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button></div>
    </form>

    
    )
}

export default Form
