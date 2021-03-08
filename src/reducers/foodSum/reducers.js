import * as Actions from"./actions"
import initialState from "../store/initialState";

export const FoodReducer =(state =initialState.foodsum,action )=>{
  switch(action.type){
    case (Actions.FOODSUM):
      return[
        ...state,
        action.payload
      ];
      case(Actions.DELETE):
      return state.filter(value => value !== action.city);
      default:
        return state;
  }
};
