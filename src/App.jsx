import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Router from "./Router"
import { push } from "connected-react-router"
import { PrimaryButton ,DeleteButton ,ClickButton} from "./components/UIkid/index"
import { FoodDelete } from "./reducers/foodSum/actions"
import "./assets/css/app.css"
import "./assets/css/style.css"

//----------------------material ui import---------------------------
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextFormatOutlined } from "@material-ui/icons"
//-----------------------material ui imort--------------------------

//----------------------materiau ui 定義 ----------------------
const useStyles = makeStyles({
  table: {
    maxWidth: 800,
    margin:"auto"
  },
});

const totalKal=(props)=>{
  const sumKal=(props).reduce((p, x) => p + x.kal, 0)
  return sumKal
}
const totalFat=(props)=>{
  const sumFat=(props).reduce((p, x) => p + x.fat, 0)
  return sumFat
}
const totalCarbo=(props)=>{
  const sumCarbo=(props).reduce((p, x) => p + x.carbo, 0)
  return sumCarbo
}
const totalProtein=(props)=>{
  const sumProtein=(props).reduce((p, x) => p + x.protein, 0)
  return sumProtein
}
//-------------------------material ui 定義-------------------------
const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state)
  const classes = useStyles();
 
  return (
    <div className="app">
      <header className="header">
      <h2 className="header-head">ダイエット応援サイト</h2>
      <div className="header-container">
        <div className="header-button"> <ClickButton label={"胸肉"} onClick={() => dispatch(push("/home"))} /></div>
        <div className="header-button"><ClickButton label={"白米"} onClick={() => dispatch(push("/rice"))} /></div>
        <div className="header-button"><ClickButton label={"卵"} onClick={() => dispatch(push("/egg"))} /></div>
        <div className="header-button"><ClickButton label={"牛肉"} onClick={() => dispatch(push("/meat"))} /></div>
        <div className="header-button"><ClickButton label={"鮭"} onClick={() => dispatch(push("/salmon"))} /></div>
        <div className="header-button"><ClickButton label={"その他"} onClick={() => dispatch(push("/other"))} /></div>
      </div>
      </header>
      <main>
        <Router />
      </main>
  <footer className="footer">
    <div className="footer-top">
      <h2>合計</h2>
    </div>
{/*------------------------ marerial ui ----------------------------------------*/}
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>名前&nbsp;&nbsp;(100gあたり)</TableCell>
            <TableCell align="right">カロリー</TableCell>
            <TableCell align="right">脂質&nbsp;(g)</TableCell>
            <TableCell align="right">炭水化物&nbsp;(g)</TableCell>
            <TableCell align="right">タンパク質&nbsp;(g)</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(selector.foodsum).map((food,index) => (
            <TableRow key={index}>
              <TableCell>{food.name}&nbsp;&nbsp;{food.val}g</TableCell>
              <TableCell align="right">{food.kal}</TableCell>
              <TableCell align="right">{food.fat}</TableCell>
              <TableCell align="right">{food.carbo}</TableCell>
              <TableCell align="right">{food.protein}</TableCell>
              <TableCell align="right"><DeleteButton label={"削除"} onClick={() => dispatch(FoodDelete(selector.foodsum[index]))} /></TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell >合計</TableCell>
            <TableCell align="right">{totalKal(selector.foodsum)}</TableCell>
            <TableCell align="right">{totalFat(selector.foodsum)}</TableCell>
            <TableCell align="right">{totalCarbo(selector.foodsum)}</TableCell>
            <TableCell align="right">{totalProtein(selector.foodsum)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
{/*------------------------ marerial ui ----------------------------------------*/}
  </footer>
     
    </div>

  )
}

export default App
