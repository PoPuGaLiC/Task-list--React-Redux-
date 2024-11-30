
const defaultState={
    filter: 'all'}
  
export const FilterReducer = (state = defaultState, action)=>{
    switch( action.type){
        case "CHANGE_FILTER":
            console.log(action.payload)
            return {...state, filter: action.payload}
        default:
            return state
    }
}