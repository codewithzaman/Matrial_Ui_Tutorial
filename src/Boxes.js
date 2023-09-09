import { Box,Button } from '@mui/material'
import React from 'react'

function Boxes() {
  return (
    <div>
      <Box component="span" style={{color:"red"}} clone="true" m={20}>
        <Button>Click Me</Button>
      </Box>
    </div>
  )
}

export default Boxes
