import React, { useEffect, useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import Table from './components/Table/Table'
import Container from './components/Container'
import theme from './utils/theme'
import Pagination from './components/elements/Pagination'

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
      <Container headline = {"Table Component"}>
        <Pagination totalPage={25} boundary={2} sibling={2}  handleGetValue={handleGetValue} activePage={1} />
      </Container>
    </ThemeProvider>
  )
}

 

