import React from 'react';

import { useDispatch } from 'react-redux'
const Task = (props) => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch({ type: "DELETE_TASK", payload: props.task.id })}>
            {props.task.taskName} {props.task.date.toLocaleString()}
        </div>
    )
}
export default Task;