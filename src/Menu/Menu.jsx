import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import cl from "./Menu.module.css"

const Menu = () => {
    const dispatch = useDispatch()
    const taskList = useSelector(state => state.taskList.taskList)
    const filter = useSelector(state => state.filter.filter)

    return (
        <div className={cl.menu}>
            <span>{taskList.reduce((count, el) => {
                if (el.status === false) {
                    count = count + 1
                }
                return count
            }, 0)} items left</span>
            <div className={cl.tabs}>
                <span className={filter==='all' ? cl.active : ''}
                onClick={() => dispatch({ type: "CHANGE_FILTER", payload: 'all' })}>All</span>
                <span className={filter==='active' ? cl.active : ''}
                onClick={() => dispatch({ type: "CHANGE_FILTER", payload: 'active' })}>Active</span>
                <span className={filter==='completed' ? cl.active : ''}
                onClick={() => dispatch({ type: "CHANGE_FILTER", payload: 'completed' })}>Completed</span>
            </div>

            <span onClick={() => dispatch({ type: "DELETE_COMPLETED_TASKS" })}>Clear completed</span>
        </div>
    )
}
export default Menu;