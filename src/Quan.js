import {ThemeProvider} from 'styled-components'
import { React } from "react";
import Container from './components/Container'
import {Button, ButtonGroup, Checkbox, Radio, RadioGroup, SimpleInput, Alert, Snackbar, FAB} from './components/elements'
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
        <Tooltip position="left" content="lorem dolor sit dasd dasd adamet" >
          <Button demo>abc</Button>
        </Tooltip>
        <Tooltip position="top" content="lorem dodsad da da aa dadlor sit dasd dasd adamet" >
          <Button demo>abc</Button>
        </Tooltip>
        <Tooltip position="right" content="lorem dodsad da da aa dadlor sit dasd dasd adamet" >
          <Button demo>abc</Button>
        </Tooltip>
        <Tooltip position="bottom" content="lorem dodsad da da aa dadlor sit dasd dasd adamet" >
          <Button demo>abc</Button>
        </Tooltip>
        <Tooltip position="left" content="lorem dolor sit dasd dasd adamet" >
          <Button demo>abc</Button>
        </Tooltip>
        <Tooltip position="top" content="lorem  adamet" >
          <Button demo>abc</Button>
        </Tooltip>
        <Tooltip position="right" content="lorem dodsad da da aa dadlor sit dasd dasd adamet" >
          <Button demo>abc</Button>
        </Tooltip>
        <Tooltip position="bottom" content="lorem dodsad da da aa dadlor sit dasd dasd adamet" >
          <Button demo>abc</Button>
        </Tooltip>
         </Container>
      </ThemeProvider>
    </div>
  )
}



export default Quan;
