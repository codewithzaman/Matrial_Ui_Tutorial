import { Switch } from '@mui/material'
import React from 'react'

function Switches() {
    
  return (
    <div>
      <Switch color='primary' size='small' onChange={getVal}/>
      <Switch color='secondary' size='medium'/>
      <Switch color='default' size='large'/>
    </div>
  )
}

export default Switches
