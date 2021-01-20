import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Table from './components/Table/Table'
import Container from './components/Container'
import theme from './utils/theme'
import Menu from './components/Table/Menu'
import IcoArrowLeft from './components/icons/IcoArrowLeft'
import IcoArrowRight from './components/icons/IcoArrowRight'
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
        <Table>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{title.id}</Table.HeaderCell>
              <Table.HeaderCell>{title.title}</Table.HeaderCell>
              <Table.HeaderCell>{title.body}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            
          <Table.Body>
            {
              data.map((value, index)=>{
                return(
                  <Table.Row key={index}>
                    <Table.Cell>
                      {value.id}
                    </Table.Cell>
                    <Table.Cell>{value.title}</Table.Cell>
                    <Table.Cell>{value.body}</Table.Cell>
                  </Table.Row>
                )
              })
            }
          </Table.Body>

          <Table.TableFooter>
              <Table.HeaderCell>
                <Menu>
                  <Menu.Item><IcoArrowLeft/></Menu.Item>
                  <Menu.Item>One</Menu.Item>
                  <Menu.Item>Two</Menu.Item>
                  <Menu.Item>three</Menu.Item>
                  <Menu.Item><IcoArrowRight/></Menu.Item>
                </Menu>
              </Table.HeaderCell>
          </Table.TableFooter>

        </Table>
      </Container>
    </ThemeProvider>
  )
}

 

