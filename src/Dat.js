import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import TableComponent from './components/Table/Table'
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
        <TableComponent>

          <TableComponent.Header>
            <TableComponent.Row>
              <TableComponent.HeaderCell>{title.id}</TableComponent.HeaderCell>
              <TableComponent.HeaderCell>{title.title}</TableComponent.HeaderCell>
              <TableComponent.HeaderCell>{title.body}</TableComponent.HeaderCell>
            </TableComponent.Row>
          </TableComponent.Header>
            
          <TableComponent.Body>
            {
              data.map((value, index)=>{
                return(
                  <TableComponent.Row key={index}>
                    <TableComponent.Cell>
                      {value.id}
                    </TableComponent.Cell>
                    <TableComponent.Cell>{value.title}</TableComponent.Cell>
                    <TableComponent.Cell>{value.body}</TableComponent.Cell>
                  </TableComponent.Row>
                )
              })
            }
          </TableComponent.Body>

        </TableComponent>
      </Container>
    </ThemeProvider>
  )
}

 

