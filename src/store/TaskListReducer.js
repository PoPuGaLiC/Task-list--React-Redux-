
const defaultState={
    taskList: [
    {id:1,taskName:'Тестовое задание', status: false},
    {id:2, taskName:'Прекрасный код', status: true},
    {id:3, taskName:'Покрытие тестами', status: false}],
    newTask: ''}
  
export const TaskListReducer = (state = defaultState, action)=>{
    switch( action.type){
        case "ADD_TASK":
            return {...state, taskList: [...state.taskList,action.payload]}
            case "COMPLETE_TASK":
                console.log(action.payload)
                return {...state, taskList: [...state.taskList.filter(el=> el.id !== action.payload.id),action.payload]}
        case "DELETE_COMPLETED_TASKS":
            return {...state, taskList: state.taskList.filter(el=> el.status !== true)}
        case "CHANGE_NEW_TASK":
                return {...state, newTask: action.payload}
        default:
            return state
    }
}