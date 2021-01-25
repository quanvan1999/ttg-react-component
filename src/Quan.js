/* global emojione */
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
import RippleButton from './components/RippleButton';
import AutoComplete,{Completion} from './components/Mentions/AutoComplete';
import MultiMentions from './components/Mentions/MultiMentions';




function Quan() {
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  const [rangeValue, setRangeValue] = useState(0)

  const onChangeSlider = e => {
    setRangeValue(parseInt(e.target.value, 10))
  }
  
  const [select, setSelect] = useState()
  const data = [
    {
      id: "walter",
      display: "Walter White"
    },
    {
      id: "jesse",
      display: "Jesse Pinkman"
    },
    {
      id: "gus",
      display: 'Gustavo "Gus" Fring'
    },
    {
      id: "saul",
      display: "Saul Goodman"
    },
    {
      id: "hank",
      display: "Hank Schrader"
    },
    {
      id: "skyler",
      display: "Skyler White"
    },
    {
      id: "mike",
      display: "Mike Ehrmantraut"
    }
  ];
  const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/;

  return (
    <div>
      <ThemeProvider theme = {theme.light}>
        <Container headline = {"Simple List "}>
          <MultiMentions width={700} data={data}/>
        </Container>
      </ThemeProvider>
    </div>
  )
}


export default Quan;
