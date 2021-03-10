import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  container:{
    maxWidth: 650,
    margin:"auto",
    marginTop:20,
    marginBottom:40
  },
  table: {
    maxWidth: 650,
  },
});



const DenseTable=(props)=> {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>名前 ({props.val}g あたり)</TableCell>
            <TableCell align="right">カロリー</TableCell>
            <TableCell align="right">脂質&nbsp;(g)</TableCell>
            <TableCell align="right">炭水化物&nbsp;(g)</TableCell>
            <TableCell align="right">タンパク質&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow key={props.name}>
              <TableCell component="th" >
                {props.name}
              </TableCell>
              <TableCell align="right">{props.kal}</TableCell>
              <TableCell align="right">{props.fat}</TableCell>
              <TableCell align="right">{props.carbo}</TableCell>
              <TableCell align="right">{props.protein}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable