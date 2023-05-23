import * as React from 'react';
import Grid from '@mui/material/Grid';



export default function BasicGrid() {
    return (
        <div>
            <h1> Grids</h1>
            <Grid item xs={12} container spacing={2}>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"red"}}>Grid</h1></Grid>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"red"}}>Grid</h1></Grid>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"red"}}>Grid</h1></Grid>
            <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"red"}}>Grid</h1></Grid>

        </Grid>

        </div>

        

    );
}