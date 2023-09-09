import React,{useState} from 'react'
import { Radio } from '@mui/material'

function RadioButtons() {
    const [gender, setGender] = useState("female")
    const testFunc = (e)=>{
        // alert("Test Function")
        // console.warn(e.target);
        console.warn(e.target.value);
        setGender(e.target.value)
    }
  return (
    <div>
      <div>
        <span>Male</span>
        <Radio color='primary' checked={gender==="male"} value="male" onChange={testFunc}/>
      </div>
      <div>
        <span>Female</span>
        <Radio color='secondary'checked={gender==="female"} value="female" onChange={testFunc}/>
      </div>
      <div>
        <span>Other</span>
        <Radio color='secondary'checked={gender==="other"} value="other" onChange={testFunc}/>
      </div>
    </div>
  )
}

export default RadioButtons
