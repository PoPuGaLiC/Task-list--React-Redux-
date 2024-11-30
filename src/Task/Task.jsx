import React from 'react';
import cl from "./Task.module.css"
import checkmark from "../images/checkmark.png";
import { useDispatch } from 'react-redux'
const Task = (props) => {
    const dispatch = useDispatch()
    const сlasses =[cl.task]
    if (props.task.status === true){
        сlasses.push(cl.completed)
    }
    return (
        <div className={сlasses.join(" ")} onClick={() => dispatch({ type: "COMPLETE_TASK", payload: {id: props.task.id,taskName:props.task.taskName, status: !props.task.status} })}>
            <button className={cl.button}>
                {props.task.status === true ? <img className={cl.checkmark} src={checkmark}/> : null}
                
                </button>
            {props.task.taskName}
        </div>
    )
}
export default Task;