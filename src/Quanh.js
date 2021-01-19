import {ThemeProvider} from 'styled-components'
import Container from './components/Container'
import {
  Button, 
  ButtonGroup, 
  Checkbox, 
  CheckboxGroup, 
  Radio, 
  RadioGroup, 
  Slider, 
  SimpleInput, 
  Toggle, 
  ToggleGroup, 
  Link, 
  Modal, 
  Badge, 
  Breadcrumb, 
  Avatar, 
  AvatarGroup, 
  TabPane, 
  Tab,
  Alert,
  Calendar,
  Snackbar
} from './components/elements'
import theme from './utils/theme'
import {useState, useEffect} from 'react'
import Box from './components/Box'
import Code from './components/Code'
import IcoMail from './components/icons/IcoMail'
import IcoAlertTriangle from './components/icons/IcoAlertTriangle'
import IcoSettings from './components/icons/IcoSettings'
import IcoX from './components/icons/IcoX'
import Combox from './components/elements/Combox'
function Quanh() {
  useEffect(() => {
    document.title = "Theme: " + theme[myTheme].name
  })
  const ComboxData = [
    {id: 1, name: "La Quoc Anh", job: "Staff"},
    {id: 2, name: "Van Thuan Quan", job: "Intern"},
    {id: 3, name: "Nguyen Quoc Dat", job: "Intern"},
    {id: 4, name: "Nguyen Hoang Tan", job: "Lead"}
  ]
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mattis arcu semper elementum. Nullam accumsan erat vitae quam sagittis placerat. In sodales mi eros, id commodo nulla fermentum in. Cras vehicula, sapien id fringilla lobortis, erat nisl rhoncus ante, et maximus libero tellus commodo ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus justo nunc, sed molestie tortor dictum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris maximus est quis ligula ullamcorper semper. Integer tempus orci dui, a lacinia lorem tempus ut. Donec sapien leo, sodales eu odio molestie, cursus lacinia quam. Aenean rhoncus rhoncus erat, nec volutpat nulla ullamcorper sit amet. Maecenas finibus, ante in suscipit rhoncus, massa lorem posuere est, vel faucibus turpis neque sit amet augue. Nulla sit amet mauris sit amet augue pharetra luctus vitae nec turpis. Duis sollicitudin commodo nisi quis mollis."
  const [mode, setMode] = useState("edit")
  const [myTheme, setTheme] = useState("light")
  const [checkboxGroupValue, setCheckboxGroupValue] = useState([])
  const [radioGroupValue, setRadioGroupValue] = useState("")
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [buttonGroupValue, setButtonGroupValue] = useState("")
  const [sliderValue, setSliderValue] = useState(0)
  const [toggleValue, setToggleValue] = useState("")
  const [toggleGroupValue, setToggleGroupValue] = useState([])
  const [textValue, setTextValue] = useState("")
  const [modalState, setModalState] = useState(false)
  const [modalState2, setModalState2] = useState(false)
  const [dateValue, setDateValue] = useState("")
  const [comboxResult, setComboxResult] = useState("")
  const [snackbarState, setSnackbarState] = useState(false)
  return (
    <div>
      <ThemeProvider theme={theme[myTheme] || theme.light}>
        <Container headline={theme[myTheme].name} fullWidth>
          <Container headline="Display Mode" >
            <ButtonGroup fullWidth onSelect={x => setMode(x)}>
              <Button value="edit" default >Edit</Button>
              <Button value="view">View</Button>
              <Button value="disabled">Disabled</Button>
            </ButtonGroup>
          </Container>

          <Container headline="Theme" >
            <ButtonGroup fullWidth onSelect={x => setTheme(x)}>
              <Button value="light">Light</Button>
              <Button value="dark" default>Dark</Button>
            </ButtonGroup>
          </Container>

          <br/>
          <Container headline={"Elements"} fullWidth>
            <Box headline="Snackbar" block>
              <Snackbar visible={snackbarState} onClose={() => setSnackbarState(false)} timeOut={200000}>
                <Alert color="info" action={<IcoX onClick={() => setSnackbarState(!snackbarState)}/>}>Warning message</Alert>
              </Snackbar>
              <Button onClick={() => setSnackbarState(!snackbarState)}>Toggle Snackbar</Button>
            </Box>
            <Box headline="Alert" block>
              <Alert demo color="success" action={<strong>UNDO</strong>}>
                <Alert.Title>Success</Alert.Title>
                This is a success message!
              </Alert>
              <Alert demo color="danger" type="outline" action={<IcoX/>}>This is a danger message!</Alert>
            </Box>
            <Box headline="Combox">
              <Combox onSelect={(v) => setComboxResult(v)} multiple>
              {ComboxData.map((data, index) => 
                <Combox.Option id={data.id} searchText={[data.job]} value={data.name} key={index}>{data.name}</Combox.Option>
              )}
              </Combox>
              <Code>{JSON.stringify(comboxResult)}</Code>
            </Box>
            <Box headline="Tab" block>
              <div style={{height: "160px"}}>
                <Tab name="group tab" fullHeight>
                  <TabPane name="Active" value="1" key="1">
                    <Button>Active Tab 160px</Button>
                  </TabPane>
                  <TabPane name="Default Tab" value="2" key="2" selected>
                    This is default
                  </TabPane>
                  <TabPane name="Just Another Tab" value="3" key="3">
                    Just Another Tab
                  </TabPane>
                  <TabPane name="Last Tab" value="4" key="4">
                    Last Tab
                  </TabPane>
                  <TabPane name="Disabled Tab" value="5" key="5" disabled>
                    You Can't See This! Can You?
                  </TabPane>
                </Tab>
              </div>
            </Box>
            <Box headline="Avatar" block>
                <Avatar demo alt="Quan Van" fluid={false} size="small"></Avatar>
                <Avatar demo alt="Quan Van" fluid={false} size="medium"></Avatar>
                <Avatar demo alt="Quan Van" fluid={false} size="large"></Avatar>
                <div style={{width: "100px", height: "100px", padding: "8px"}}>
                  <Avatar alt="Quan Van" fluid={true} size="large"></Avatar>
                </div>
                <AvatarGroup demo  max={9} size="small">
                  <Avatar alt="A"></Avatar>
                  <Avatar alt="B"></Avatar>
                  <Avatar alt="C"></Avatar>
                </AvatarGroup>
                <AvatarGroup demo  max={9} size="medium">
                  <Avatar alt="A"></Avatar>
                  <Avatar alt="B"></Avatar>
                  <Avatar alt="C"></Avatar>
                </AvatarGroup>
                <AvatarGroup demo  max={9} size="large">
                  <Avatar alt="A"></Avatar>
                  <Avatar alt="B"></Avatar>
                  <Avatar alt="C"></Avatar>
                </AvatarGroup>
                <AvatarGroup demo max={4} size="large">
                  <Avatar alt="A"></Avatar>
                  <Avatar alt="B"></Avatar>
                  <Avatar alt="C"></Avatar>
                  <Avatar alt="D"></Avatar>
                  <Avatar alt="E"></Avatar>
                </AvatarGroup>
                
            </Box>
            <Box headline="Breadcrumb" block>
              <Breadcrumb>
                <a href="#">Home</a>
                <a href="#">Trending</a>
                <a href="#">Funny</a>
              </Breadcrumb>
            </Box>
            <Box headline="Badge" block>
              <Badge demo icon={<IcoMail/>} value={1} max={10} dot/>
              <Badge demo icon={<IcoMail/>} value={99} max={999}/>
              <Badge demo icon={<IcoMail/>} value={50} max={10}/>
              <Badge demo icon={<IcoMail/>} value={0} max={10} showZero/>
            </Box>
            <Box headline="Modal" block>
              <Modal visible={modalState} onClickOutside={() => setModalState(false)} title="Great Title">
                {text}
              </Modal>
              <Button demo onClick={() => setModalState(true)}>Open Modal With Title</Button>
              <Modal visible={modalState2} onClickOutside={() => setModalState2(false)}>
                {text}
              </Modal>
              <Button color="secondary" demo onClick={() => setModalState2(true)}>Open Modal With No Title</Button>
            </Box>
            <Box headline="Link" block>
              Very beautiful <Link href="https://google.com">link</Link>
              <br/>
              Visited or not <Link href="#">link</Link>
              <br/>
              It can have <Link href="#" underline>underline</Link>
            </Box>
            <Box headline="Text Input">
              <SimpleInput displayMode={mode} defaultValue="my default text is here" demo onChange={(v) => setTextValue(v)} value={textValue}/>
              <Code>{JSON.stringify(textValue)}</Code>
            </Box>
            <Box headline="Button" block>
              <Button color="success" size="small" displayMode={mode} demo onSelect={() => console.log("Wow")}>Success small</Button>
              <Button color="warning" size="medium" displayMode={mode} demo >Warning medium</Button>
              <Button color="danger" size="large" displayMode={mode} demo >Danger large</Button>
              <Button color="primary"size="medium" type="contained" displayMode={mode} demo >Primary</Button>
              <Button color="secondary"size="small" displayMode={mode} demo >Secondary</Button>
              <Button displayMode={mode} demo type="outline" >Outline</Button>
              <Button size="medium" displayMode={mode} demo type="text" >Text</Button>
              <Button size="medium" displayMode={mode} demo type="contained" ><IcoSettings/></Button>
            </Box>
            <Box headline="Calendar">
              <div>
                <Calendar demo onSelect={date => setDateValue(date)}/>
              </div>
              <Code>{dateValue.toString()}</Code>
            </Box>
            <Box headline="Toggle">
              <Toggle displayMode={mode} onSelect={v => setToggleValue(v)}>Awesome</Toggle>
              <Code>{JSON.stringify(toggleValue)}</Code>
            </Box>

            <Box headline="Toggle Group">
              <ToggleGroup displayMode={mode} onSelect={v => setToggleGroupValue(v)}>
                <Toggle value={1}>One</Toggle>
                <Toggle value={2}>Two</Toggle>
              </ToggleGroup>
              <Code>{JSON.stringify(toggleGroupValue)}</Code>
            </Box>

            <Box headline="Checkbox">
              <Checkbox displayMode={mode} onSelect={(value) => setCheckboxValue(value)}>Awesome</Checkbox>
              <Code>{JSON.stringify(checkboxValue)}</Code>
            </Box>

            <Box headline="Checkbox Group">
              <CheckboxGroup displayMode={mode} onSelect={(value) => setCheckboxGroupValue(value)}>
                <Checkbox value={1}>One</Checkbox>
                <Checkbox value={2}>Two</Checkbox>
              </CheckboxGroup>
              <Code>{JSON.stringify(checkboxGroupValue)}</Code>
            </Box>

            <Box headline="Radio Group">
              <RadioGroup displayMode={mode} onSelect={(value) => setRadioGroupValue(value)}>
                <Radio value={1}>One</Radio>
                <Radio value={2}>Two</Radio>
                <Radio value={3}>Three</Radio>
              </RadioGroup>
              <Code>{JSON.stringify(radioGroupValue)}</Code>
            </Box>

            <Box headline="Button Group">
              <ButtonGroup displayMode={mode} onSelect={(value) => setButtonGroupValue(value)}>
                <Button value={1}>One</Button>
                <Button value={2}>Two</Button>
                <Button value={3}>Three</Button>
              </ButtonGroup>
              <Code>{JSON.stringify(buttonGroupValue)}</Code>
            </Box>              
            <Box headline="Slide">
              <Slider onSlide={(v) => setSliderValue(v)} displayMode={mode} fullWidth defaultValue={50}/>
              <Code>{JSON.stringify(sliderValue)}</Code>
            </Box>

          </Container>
        </Container>
        
      </ThemeProvider>
    </div>
  )
}

export default Quanh;
