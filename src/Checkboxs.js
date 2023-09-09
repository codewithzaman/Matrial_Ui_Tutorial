import React, { useState } from 'react'
import { Checkbox } from '@mui/material'
import { Favorite,FavoriteBorder } from '@mui/icons-material';

function Checkboxs() {
    const [name, setName] = useState([])
    function getValue(e){
        let data = name ;
        data.push(e.target.value)
        console.warn(data);
    }
  return (
    <div>
      <Checkbox value="Nader" color='default' onChange={(e)=>{getValue(e)}}/>
      <Checkbox value= "Sheikh" color='primary' onChange={(e)=>{getValue(e)}}/>
      <Checkbox value="Zaman" onChange={(e)=>{getValue(e)}}/>
      <Checkbox value="Khan" indeterminate onChange={(e)=>{getValue(e)}}/>
      <Checkbox value="Shan" color='secondary' icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} onChange={(e)=>{getValue(e)}}/>
      <Checkbox value="Shan" color='primary' icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} onChange={(e)=>{getValue(e)}}/>
      <Checkbox value="Shan" color='warning' icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} onChange={(e)=>{getValue(e)}}/>
      <Checkbox value="Shan" color='error' icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} onChange={(e)=>{getValue(e)}}/>
    </div>
  )
}

export default Checkboxs
