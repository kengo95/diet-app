import React from "react"
import {Switch , Route} from "react-router"
import {Home ,Meat,Rice, Egg ,Salmon,Other} from "./templets"

const Router =()=>{
  
  return (
    <Switch>
      <Route exact path={"/home"}  component={Home} />
      <Route exact path={"/meat"}  component={Meat} />
      <Route exact path={"/rice"}  component={Rice} />
      <Route exact path={"/egg"}  component={Egg} />
      <Route exact path={"/salmon"}  component={Salmon} />
      <Route exact path={"/other"}  component={Other} />
      
    </Switch>
  )
}

export default Router;