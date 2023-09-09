import { TextField } from '@mui/material'
import React from 'react'

function Textfields() {
    const getData =(e)=>{
        console.log(e.target.value);
    }
  return (
    <div>
      <TextField label="Enter your Name Here" color='secondary' variant='filled'  onChange={getData} />
      <br/>
    </div>
  )
}

export default Textfields
