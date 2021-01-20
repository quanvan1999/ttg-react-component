import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Container from './components/Container'
import theme from './utils/theme'
const title = {
  "id": "ID",
  "title": "Title",
  "body": "Body"
}

export default function Dat(props) {
  var {data} = props
  return (
    <ThemeProvider theme = {theme.light}>
      <Container headline = {"Table Component"}>
      </Container>
    </ThemeProvider>
  )
}

 

