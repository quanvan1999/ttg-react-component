import React, { useEffect, useState, useRef } from 'react'
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

export default function Dat() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json))
  },[])
  const [currentPage, setCurrentPage] = useState(1)
  const rowPerPage = useRef(10)
  let max = data.length, pageMax = max/rowPerPage.current

  // lay so trang
  var temp = []
  for(let i=1; i<=pageMax; i++){
    temp.push(i)
  } //end

  const handleSetdata = (props)=>{
      setCurrentPage(props)
  }
  const handlePre = ()=>{
      if(currentPage <= 1){ setCurrentPage(1) }
      else{ setCurrentPage(currentPage - 1) }
  }
  const handleNext = ()=>{
      if(currentPage >= pageMax){ setCurrentPage(pageMax) }
      else{ setCurrentPage(currentPage + 1) }
  }
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
              data.slice((currentPage-1)*rowPerPage.current, currentPage*rowPerPage.current).map((value, index)=>{
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
                  <Menu.Item onClick={()=>handlePre()}><IcoArrowLeft/></Menu.Item>
                  {
                    temp.map((value, index)=>{
                      return(
                        <Menu.Item onClick={()=>handleSetdata(value)} key={index}>{value}</Menu.Item>
                      )
                    })
                  }
                  <Menu.Item onClick={()=>handleNext()}><IcoArrowRight/></Menu.Item>
                </Menu>
              </Table.HeaderCell>
          </Table.TableFooter>

        </Table>

      </Container>
    </ThemeProvider>
  )
}

 

