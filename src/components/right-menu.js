import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export const Rightmenu = () => {
      return (
        <>
        <Grid container justify="center">
          <TextField id="outlined-basic" label="Поиск товара" variant="outlined" />
        </Grid>
          <Grid container direction="column">
            <Button>Товар</Button>
            <Button>Товар</Button>
            <Button>Товар</Button>
            <Button>Товар</Button>
            <Button>Товар</Button>
            <Button>Товар</Button>
          </Grid>
        </>
      )
}
export default Rightmenu;

