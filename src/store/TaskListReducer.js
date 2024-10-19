
const defaultState={
    taskList: [
    {id:1, date:  new Date(), taskName:'Sleep'},
    {id:2, date:new Date() ,  taskName:'Eat'}],
    newTask: ''}
  
export const TaskListReducer = (state = defaultState, action)=>{
    switch( action.type){
        case "ADD_TASK":
            return {...state, taskList: [...state.taskList,action.payload]}
        case "DELETE_TASK":
            return {...state, taskList: state.taskList.filter(el=> el.id!=action.payload)}
        case "CHANGE_NEW_TASK":
                return {...state, newTask: action.payload}
        case "FILTER_TASK":
            switch(action.payload){
                case 'date-start': 
                    return {...state, taskList:[...state.taskList].sort((a,b)=> {
                        return new Date(a.date).getTime() - new Date(b.date).getTime()
                    })};
                case 'date-end':
                    return {...state, taskList:[...state.taskList].sort((a,b)=> {
                        return new Date(b.date).getTime() - new Date(a.date).getTime()
                    })};
                case 'name-start':
                    return {...state, taskList:[...state.taskList].sort((a, b) => {
                        return a.taskName < b.taskName ? -1 : 1
                    })};
                case 'name-end':
                    return {...state, taskList:[...state.taskList].sort((a, b) => {
                        return a.taskName > b.taskName ? -1 : 1
                    })};
            }   
        default:
            return state
    }
}