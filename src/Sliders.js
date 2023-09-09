import { Slider } from '@mui/material'
import React from 'react'

function Sliders() {
    const getvalue=(e,val)=>{
        console.warn(val);
    }
    let  mark =[{
        value:0,
        label:"Start",
    },{
        value:100,
        label:"Middle",
    },{
        value:200,
        label:"End",
    }]
  return (
    <div style={{height:300, margin:40}}>
      <Slider color = "secondary" defaultValue={40} max={200} step={50} marks={mark} valueLabelDisplay='auto' onChange={getvalue} orientation='vertical'/>
    </div>
  )
}

export default Sliders
