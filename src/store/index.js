import {createStore, combineReducers} from 'redux'
import {TaskListReducer} from './TaskListReducer'
import {FilterReducer} from './FilterReducer'

const rootReducer = combineReducers({
    taskList: TaskListReducer,
    filter: FilterReducer
})

export const store = createStore(rootReducer)