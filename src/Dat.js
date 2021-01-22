import React, { useEffect, useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import Table from './components/Table/Table'
import Container from './components/Container'
import theme from './utils/theme'
import Menu from './components/Table/Menu'
import IcoArrowLeft from './components/icons/IcoArrowLeft'
import IcoArrowRight from './components/icons/IcoArrowRight'
import Pagination from './components/Table/Pagination'
const title = {
  "id": "ID",
  "title": "Title",
  "body": "Body"
}

export default function Dat() {
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => setData(json))
  // },[])
  // const [currentPage, setCurrentPage] = useState(1)
  // const rowPerPage = useRef(10)
  const [activePage, setActive] = useState(1)

  const handleSetActive = (props)=>{
    setActive(props)
    console.log(props)

  }

  return (
    <ThemeProvider theme = {theme.light}>
      <Container headline = {"Table Component"}>
        <Pagination totalPage={15} boundary={2} sibling={1} handleSetActive={handleSetActive} activePage={6} />
      </Container>
    </ThemeProvider>
  )
}

 

