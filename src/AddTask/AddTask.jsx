import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import cl from "./AddTask.module.css"
import enter from "../images/enter.png";

const AddTask = () => {
    const dispatch = useDispatch()
    const newTask = useSelector(state => state.taskList.newTask)
    return (
        <div className={cl.addTask}>
            <button onClick={() => {
                if (newTask != '') {
                    dispatch({ type: "ADD_TASK", payload: { id: crypto.randomUUID(), taskName: newTask, status: false} })
                    dispatch({ type: "CHANGE_NEW_TASK", payload: '' })
                }
            }}>
            <img className={cl.enter} src={enter}/>
            </button>
            <input
                value={newTask}
                onChange={(event) => {
                    dispatch({ type: "CHANGE_NEW_TASK", payload: event.target.value })
                    
                }} 
                placeholder='What needs to be done?'/>
            
        </div>
    )
}
export default AddTask;