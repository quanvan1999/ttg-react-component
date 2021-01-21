import {ThemeProvider} from 'styled-components'
import { React } from "react";
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup, SimpleInput, Alert, Snackbar, FAB, Avatar} from './components/elements'
import IconCheck from './components/icons/IcoCheckCircle';
import IconError from './components/icons/IcoAlertTriangle';
import IconPlus from './components/icons/IcoEdit2';
import IconInfo from "./components/icons/IcoInfo";
import IcoX from './components/icons/IcoX'
import theme from './utils/theme'
import {useState,useRef} from 'react'
import List from './components/List'
import ListItem from './components/ListItem'
import Tooltip from './components/elements/Tooltip';


function Quan() {
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  const [rangeValue, setRangeValue] = useState(0)

  const onChangeSlider = e => {
    setRangeValue(parseInt(e.target.value, 10))
  }
  
  const [open, setOpen] = useState(false)

  
  return (
    <div>
      <ThemeProvider theme = {theme.light}>
        <Container headline = {"Simple List "}>
          <List>
              <ListItem>
                <ListItem.Checkbox value="123"></ListItem.Checkbox>
                <ListItem.Text>List Item 1</ListItem.Text>
                <ListItem.Button  type="outline" color="warning">Delete</ListItem.Button>
              </ListItem>
              <ListItem>
                <ListItem.Checkbox value="123"></ListItem.Checkbox>
                <ListItem.Text>List Item 1</ListItem.Text>
                <ListItem.Button type="outline" color="warning">Delete</ListItem.Button>
              </ListItem>
              <ListItem>
                <ListItem.Checkbox value="123"></ListItem.Checkbox>
                <ListItem.Text>List Item 1</ListItem.Text>
                <ListItem.Button  type="outline" color="warning">Delete</ListItem.Button>
              </ListItem>
              </List>
              <List>
              <ListItem>
                <ListItem.Avatar></ListItem.Avatar>
                <ListItem.Text>Brunch this weekend?
Ali Connors — I'll be in your neighborhood doing errands this</ListItem.Text>
                <ListItem.Button color="warning">Delete</ListItem.Button>
              </ListItem>
              <ListItem>
                <ListItem.Avatar></ListItem.Avatar>
                <ListItem.Link target="_blank" href="https://google.com">Link google new tab</ListItem.Link>
              </ListItem>
              <ListItem>
                <ListItem.Icon><IconInfo/></ListItem.Icon>
                <ListItem.Link target="_blank" href="https://google.com">Link google</ListItem.Link>
                <ListItem.Toggle></ListItem.Toggle>
              </ListItem>
          </List>
         </Container>
      </ThemeProvider>
    </div>
  )
}



export default Quan;
