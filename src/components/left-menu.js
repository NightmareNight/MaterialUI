import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

export const Leftmenu = () => {
  const classes = useStyles();
    return (
      <div className={classes.root}>
            <Paper elevation={3}>
              <Grid container justify="center" direction="column">
                <Button size="large" className={classes.margin}>
                  Large
                </Button>
                <Button size="large" className={classes.margin}>
                  Large
                </Button>
                <Button size="large" className={classes.margin}>
                  Large
                </Button>
                <Button size="large" className={classes.margin}>
                  Large
                </Button>
                <Button size="large" className={classes.margin}>
                  Large
                </Button>
                <Button size="large" className={classes.margin}>
                  Large
                </Button>
                <Button size="large" className={classes.margin}>
                  Large
                </Button>
              </Grid>
            </Paper> 
      </div>
    ) 
};
export default Leftmenu;


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(60),
    },
  },
}));

