import './App.css';
import React,{useState} from "react"
import {Button} from "@mui/material"
import {Delete} from "@mui/icons-material"
function Buttons() {
    const [color, setColor] = useState("warning")
    const [disabledBtn,setDisbaledBtn] = useState(false)
    function customMe(){
      // alert("function is called")
      // setColor("primary")
      setDisbaledBtn(true)
    }
  return (
    <div>
      <Button color="primary" variant='contained' size="small" onClick={()=>{alert("Button is Clicked")}} 
      > Click Me</Button>
      <br/> <br/>
      <Button color={color} disabled={disabledBtn} size='medium'  variant='contained' onClick={()=>{customMe()}}>Click Me</Button>
      <br/> <br/>
      <Button disabled size='large' color='secondary' variant='outlined'>Click Me</Button>
      <br/> <br/>
      <Button color="primary" variant='contained' size="large" startIcon={<Delete/>}
      > Delete</Button>
      <br/> <br/>
      <Button color="primary" variant='outlined' size="large" endIcon={<Delete/>}
      > Delete</Button>
    </div>
  )
}

export default Buttons
