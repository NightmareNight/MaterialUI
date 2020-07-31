import React from 'react';
import './App.css';
import Leftmenu from './components/left-menu';
import TopMenu from './components/top-menu'
import { Grid } from '@material-ui/core';
import Rightmenu from './components/right-menu'
import Content from './components/content';
import TovarInfo from './components/tovar-info';
import SupplyInfo from './components/Supply';

function App() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Leftmenu />
      </Grid>
      <Grid item xs={9}>
        <br />
        <TovarInfo />
        <br />
        <TopMenu />
        <br />
        <Content />
        <br />
        <SupplyInfo />
        <br />
      </Grid>
      <Grid item xs={2}>
        <br />
        <Rightmenu />
      </Grid>
    </Grid>
  );
}

export default App;
