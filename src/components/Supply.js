import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, calories, fat, carbs, protein, nek, sum) {
    return { name, calories, fat, carbs, protein, nek, sum };
  }
  
  const rows = [
    createData( 'Бизяськи', 3, 'Сладкий Чупик', 12, 'Дядя Вася', 1000, 'В рассрочку' ),
    createData( 'Бизяськи', 3, 'Сладкий Чупик', 12, 'Дядя Вася', 1000, 'В рассрочку' ),
    createData( 'Бизяськи', 3, 'Сладкий Чупик', 12, 'Дядя Вася', 1000, 'В рассрочку' ),
    createData( 'Бизяськи', 3, 'Сладкий Чупик', 12, 'Дядя Вася', 1000, 'В рассрочку' ),
  ];

export const SupplyInfo = () => {
    const classes = useStyles();
    return(
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell><strong>Товар:</strong></TableCell>
            <TableCell align="right"><strong>Количество</strong></TableCell>
            <TableCell align="right"><strong>Магазин:</strong></TableCell>
            <TableCell align="right"><strong>На складе:</strong></TableCell>
            <TableCell align="right"><strong>Поставщик</strong>&nbsp;</TableCell>
            <TableCell align="right"><strong>Закупочная цена:</strong>&nbsp;</TableCell>
            <TableCell align="right"><strong>Тип:</strong></TableCell>
          </TableRow>
        </TableHead>
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
              <TableCell align="right">{row.nek}</TableCell>
              <TableCell align="right">{row.sum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}
export default SupplyInfo;

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
