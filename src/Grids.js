import { Grid } from '@mui/material'
import React from 'react'

function Grids() {
  return (
    <div>
      <Grid item xs={12} container spacing={3}>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"green"}}>Block 1</h1></Grid>
        <Grid item lg={3} sm={6}  xs={12}><h1 style={{backgroundColor:"green"}}>Block 2</h1></Grid>
        <Grid item lg={3} sm={6}  xs={12}><h1 style={{backgroundColor:"green"}}>Block 3</h1></Grid>
        <Grid item lg={3} sm={6}  xs={12}><h1 style={{backgroundColor:"green"}}>Block 4</h1></Grid>
      </Grid>
    </div>
  )
}

export default Grids
