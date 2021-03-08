
export const FOODSUM ='FOODSUM';
export const FoodSumAdd=(state)=>{
  return{
    type:'FOODSUM',
    payload:
      state    
  }
  }
export const DELETE ="DELETE";
export const FoodDelete=(city)=>{
  return{
    type:"DELETE",
    city
  }
}
  

export const FOODNULL ="FOODNULL"
export const FoodNullAdd=()=>{
  return{
    type:"FOODNULL",
    payload:{
    }
  }
} 