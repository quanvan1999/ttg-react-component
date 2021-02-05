/* global emojione */
import {ThemeProvider} from 'styled-components'
import { React } from "react";
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup, SimpleInput, Alert, Snackbar, FAB, Avatar} from './components/elements'
import IconCheck from './components/icons/IcoCheckCircle';
import IconError from './components/icons/IcoAlertTriangle';
import IconInfo from "./components/icons/IcoInfo";
import IcoX from './components/icons/IcoX'
import IcoHome from './components/icons/IcoHome'
import IcoList from './components/icons/IcoList'
import IcoPlus from './components/icons/IcoPlus'
import IcoSettings from './components/icons/IcoSettings'


import theme from './utils/theme'
import {useState,useRef} from 'react'
import List from './components/List'
import ListItem from './components/ListItem'
import Tooltip from './components/elements/Tooltip';
import RippleButton from './components/RippleButton';
import Menu from './components/Menu';
import ButtonMenu from './components/ButtonMenu';
import DropdownMenu from './components/DropdownMenu';



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
        <Container open={open} headline = {"Simple List "}>
          {/* <ButtonMenu open={open} setOpen={setOpen}/> */}
          {/* <Menu open={true} >
            <Menu.Item href="#"><IcoHome/>Home</Menu.Item>
            <Menu.Item href="#"><IcoList/>List</Menu.Item>
            <Menu.Item href="#"><IcoPlus/>Create</Menu.Item>
            <Menu.Item href="#"><IcoSettings/>Setting</Menu.Item>
          </Menu> */}
          <DropdownMenu label="Click">
             <DropdownMenu.Item>
               <DropdownMenu.LinkItem href="#">Message 1</DropdownMenu.LinkItem>
              </DropdownMenu.Item>
             <DropdownMenu.Item>
               <DropdownMenu.LinkItem href="#">Message 2</DropdownMenu.LinkItem>
              </DropdownMenu.Item>
             <DropdownMenu.Item>
               <DropdownMenu.LinkItem href="#">Message 3</DropdownMenu.LinkItem>
              </DropdownMenu.Item>
          </DropdownMenu>
        </Container>
      </ThemeProvider>
    </div>
  )
}


export default Quan;
