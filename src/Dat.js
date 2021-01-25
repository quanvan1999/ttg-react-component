import React, { useEffect, useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import {Table} from './components/elements'
import Container from './components/Container'
import theme from './utils/theme'
import Pagination from './components/elements/Pagination'
import { Tab } from './components/elements'

export default function Dat() {
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => setData(json))
  // },[])
  // const [currentPage, setCurrentPage] = useState(1)
  // const rowPerPage = useRef(10)
  // const [activePage, setActive] = useState(1)

  // const handleSetActive = (active)=>{
  //   if(active !== "..."){
  //     console.log(active)
  //     setActive(active)
  //   }
  // }
  const handleGetValue = (page)=>{
    console.log(page)
  }

  return (
    <ThemeProvider theme = {theme.light}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Apple</Table.Cell>
            <Table.Cell>10</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Banana</Table.Cell>
            <Table.Cell>11</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Orange</Table.Cell>
            <Table.Cell>12</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Container headline = {"Table Component"}>
        <Pagination totalPage={20} boundary={1} sibling={1}  handleGetValue={handleGetValue} activePage={1} />
      </Container>
    </ThemeProvider>
  )
}

 

