import { MenuItem, Select } from '@mui/material'
import React,{useState} from 'react'

function SelectBox() {
    const [course, setCourse] = useState(2);
    const updateValue=(e,val)=>{
        setCourse(e.target.value);
    }
  return (
    <div>
      <Select value={course} displayEmpty onChange={updateValue}>
        <MenuItem value ="" >Select Course</MenuItem>
        <MenuItem value={1}>React</MenuItem>
        <MenuItem value={2}>Next</MenuItem>
        <MenuItem value={3}>Node</MenuItem>
        <MenuItem value={4}>Express</MenuItem>
      </Select>
    </div>
  )
}

export default SelectBox
