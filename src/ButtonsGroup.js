import React from 'react'
import { Button,ButtonGroup } from '@mui/material'

function ButtonsGroup() {
  return (
    <div>
        <ButtonGroup color='secondary' variant='contained' orientation='vertical'>
        <Button>One</Button>
        <br/>
        <Button>Two</Button>
        <br/>
        <Button>Three</Button>
        </ButtonGroup>
      
    </div>
  )
}

export default ButtonsGroup
