import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"

const useStyles =makeStyles({
  "button":{
    backgroundColor :"#ffc654",
    color :"000",
    fontSize :16,
    height : 40,
    marginButtom :16,
    width :250,
  
  }
})
const ClickButton = (props) => {
  const classes =useStyles();
  return (
    <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
      {props.label}
    </Button>
  )
}

export default ClickButton