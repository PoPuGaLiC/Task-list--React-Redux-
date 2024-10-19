import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
const AddTask = () => {
    const dispatch = useDispatch()
    const newTask = useSelector(state => state.taskList.newTask)
    const filterID = useSelector(state => state.filter.filterID)
    return (
        <div>
            <input
                value={newTask}
                onChange={(event) => { dispatch({ type: "CHANGE_NEW_TASK", payload: event.target.value }) }} />
            <button onClick={() => {
                if (newTask != '') {
                    dispatch({ type: "ADD_TASK", payload: { id: crypto.randomUUID(), date: new Date(), taskName: newTask } })
                    dispatch({ type: "FILTER_TASK", payload: filterID });
                }
            }}>
                Добавить
            </button>
        </div>
    )
}
export default AddTask;