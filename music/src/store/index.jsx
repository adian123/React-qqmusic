import {createStore,combineReducers} from "redux"
const defaultState={
  searchlist:[]
}
const SearchReducer=(state=defaultState,action)=>{
  const {type,payload}=action
   switch(type){
      case "UPDATE" :
      return {...state,searchlist:payload}
      default :
      return state
   }
}
const Reducers=combineReducers({
  SearchReducer
})
export default createStore(Reducers);