import { Switch } from '@mui/material'
import React from 'react'

function Switches() {
    const getVal = (e,val)=>{
        console.warn(val);
    }
  return (
    <div>
      <Switch color='primary' size='small' onChange={getVal}/>
      <Switch color='secondary' size='medium'/>
      <Switch color='default' size='large'/>
    </div>
  )
}

export default Switches
