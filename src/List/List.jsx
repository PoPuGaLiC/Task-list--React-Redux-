import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import Task from '../Task/Task'
const List = () => {
    const taskList = useSelector(state => state.taskList.taskList)
    const filter = useSelector(state => state.filter.filter)
  const dispatch = useDispatch()
    return (
        <div>
            {taskList.filter(el => {
                switch (filter) {
                    case 'active':
                        return (el.status === false);
                    case 'completed':
                        return (el.status === true);
                    default:
                        return true;
                }
            }).sort((a, b)=>(a.id-b.id)).map(el => <Task key={el.id} task={el} />)}
        </div>
    )
}

export default List;