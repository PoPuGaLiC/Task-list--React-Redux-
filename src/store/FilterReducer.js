
const defaultState={
    filterID: 'date-start'
}
  
export const FilterReducer = (state = defaultState, action)=>{
switch( action.type){
    case "CHANGE_FILTER":
    return {...state, filterID: action.payload}
    
    default:
        return state
}
}