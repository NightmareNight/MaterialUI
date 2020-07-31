import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Divider } from '@material-ui/core';




export const TovarInfo = () => {
  const classes = useStyles();
    return(
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <strong>Подробно о товаре: (Название товара)</strong>
        </Typography>
      <Divider />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <strong>Id: 1</strong>
          <br />
          <strong>Название: Бизяськи</strong> 
          <br />
          <strong>Артикул: BBB6</strong>
          <br />
          <strong>Цена: 60 0000</strong> 
          <br />
          <strong>Категория: Бизиборды</strong>
        </Typography>
      </CardContent>
    </Card>
    )
}
export default TovarInfo;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});