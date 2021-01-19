import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import TableComponent from './components/Table/Table'
import Container from './components/Container'
import theme from './utils/theme'
import Pagination from './components/Table/TablePagination';
const title = {
  "id": "ID",
  "title": "Title",
  "body": "Body"
}

export default function Dat() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("edit")
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json))
  },[])
  // console.log(data)
    return (
      <ThemeProvider theme = {theme.light}>
        <Container headline = {"Table Component"}>
          <TableComponent displayMode={mode}>
            <TableComponent.Header>
              <TableComponent.Row>
                <TableComponent.HeaderCell>{title.id}</TableComponent.HeaderCell>
                <TableComponent.HeaderCell>{title.title}</TableComponent.HeaderCell>
                <TableComponent.HeaderCell>{title.body}</TableComponent.HeaderCell>
              </TableComponent.Row>
            </TableComponent.Header>  
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
            <TableComponent.TableFooter>
              <Pagination totalPage={data.length}/>
            </TableComponent.TableFooter>
          </TableComponent>
        </Container>
      </ThemeProvider>
    )
}

 

