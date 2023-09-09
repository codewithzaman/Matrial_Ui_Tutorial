import React,{useState} from 'react'
import { Slider } from '@mui/material'

function RangeSliders() {
    const [val, setVal] = useState([30,100]);
    const updateVal = (e,val)=>{
        setVal(val)
    }
  return (
    <div style={{width:300 , margin:30}}>
      <Slider value={val} max={200} onChange={updateVal}/>
    </div>
  )
}

export default RangeSliders
