import {createStore, combineReducers} from 'redux'
import {FilterReducer} from './FilterReducer'
import {TaskListReducer} from './TaskListReducer'

const rootReducer = combineReducers({
    taskList: TaskListReducer,
    filter: FilterReducer,
})

export const store = createStore(rootReducer)