import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {connectRouter , routerMiddleware} from "connected-react-router"
import {FoodReducer} from"../foodSum/reducers"


export default function createStore(history){
  return reduxCreateStore(
    combineReducers({
      foodsum:FoodReducer,
      router:connectRouter(history)
    }),applyMiddleware(
      routerMiddleware(history)
    )
  )
}