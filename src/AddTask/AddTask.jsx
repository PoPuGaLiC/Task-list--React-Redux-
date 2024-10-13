import React from 'react';
import ReactDOM from 'react-dom/client';

const AddTask = (props)=>{
    return(
        <div>
        <input
        value={props.newTask}
        onChange={(event)=>props.setNewTask(event.target.value)}/>
        <button onClick={()=>{
            if( props.newTask != ''){   
                return props.dataFilter(props.filter, {id: crypto.randomUUID(), date: new Date(),  taskName: props.newTask})
            }}}>
                Добавить
        </button>
        </div>
    )
}
export default AddTask;