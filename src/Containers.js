import { Container } from '@mui/material'
import React from 'react'

function Containers() {
  return (
    <div>
      <Container maxWidth="xs" style={{backgroundColor:"skyblue" }}>
        <h1>Hello I am a Container</h1>
        </Container>
      <Container maxWidth="sm" style={{backgroundColor:"skyblue" }}>
        <h1>Hello I am a Container</h1>
        </Container>
      <Container maxWidth="md" style={{backgroundColor:"skyblue" }}>
        <h1>Hello I am a Container</h1>
        </Container>
      <Container maxWidth="lg" style={{backgroundColor:"skyblue" }}>
        <h1>Hello I am a Container</h1>
        </Container>
      <Container fixed style={{backgroundColor:"skyblue" }}>
        <h1>Hello I am a Container</h1>
        </Container>
    </div>
  )
}

export default Containers
