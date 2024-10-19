import React from 'react';

import { useSelector } from 'react-redux'
import Task from '../Task/Task'
const List = () => {
    const taskList = useSelector(state => state.taskList.taskList)
    return (
        <div>
            {taskList.map(el => <Task key={el.id} task={el} />)}
        </div>
    )
}

export default List;