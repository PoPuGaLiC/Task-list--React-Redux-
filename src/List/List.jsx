import React from 'react';
import ReactDOM from 'react-dom/client';
import Task from '../Task/Task'
const List =(props) => {
    function deleteTask(id){
        props.setTaskList(props.taskList.filter(el=> el.id!=id))
    }
    return(
        <div>
            {props.taskList.map(el => <Task key={el.id} task={el} deleteTask={deleteTask}/>)}
        </div>
    )
}

export default List;