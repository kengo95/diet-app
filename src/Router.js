import { formatMs } from "@material-ui/core"
import React, { useState } from "react"
import {Switch , Route} from "react-router"
import {Home ,Meat,Rice, Egg ,Salmon,Other} from "./templets"

const Router =()=>{
  const [foodSum, addFoodSum]=useState('1')
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