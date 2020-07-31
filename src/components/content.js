import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Товар', 1, 'Москва', 'Продано цыганам', <IconButton aria-label="delete" color="secondary"><DeleteIcon /></IconButton>),
    createData('Товар', 2, 'Москва', 'Продано цыганам', <IconButton aria-label="delete" color="secondary"><DeleteIcon /></IconButton>),
    createData('Товар', 3, 'Москва', 'Продано цыганам', <IconButton aria-label="delete" color="secondary"><DeleteIcon /></IconButton>),
    createData('Товар', 4, 'Москва', 'Продано цыганам', <IconButton aria-label="delete" color="secondary"><DeleteIcon /></IconButton>),
    createData('Товар', 5, 'Москва', 'Продано цыганам', <IconButton aria-label="delete" color="secondary"><DeleteIcon /></IconButton>),
  ];

export const Content = () => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
            <TableBody>
                {rows.map((row) => (
                <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
      </TableContainer>
    )
}
export default Content;

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });