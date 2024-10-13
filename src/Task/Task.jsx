import React from 'react';
import ReactDOM from 'react-dom/client';

const Task =(props) => {
    return(
        <div onClick={()=>props.deleteTask(props.task.id)}>
            {props.task.taskName} {props.task.date.toLocaleString()}
        </div>
    )
}
export default Task;