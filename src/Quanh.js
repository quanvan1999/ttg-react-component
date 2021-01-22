import styled, {ThemeProvider} from 'styled-components'
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
  Snackbar,
  FAB,
  Tooltip
} from './components/elements'
import theme from './utils/theme'
import {useState, useEffect} from 'react'
import Box from './components/Box'
import IcoMail from './components/icons/IcoMail'
import IcoSettings from './components/icons/IcoSettings'
import IcoX from './components/icons/IcoX'
import IcoArrowDownCircle from './components/icons/IcoArrowDownCircle'
import IcoArrowUpCircle from './components/icons/IcoArrowUpCircle'
import Combox from './components/elements/Combox'
const FontProvider = styled.div`
  font-family: ${props => props.font}, "Heveltica", "Segoe UI";
`;
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
  const [textValue, setTextValue] = useState("")
  const [modalState, setModalState] = useState(false)
  const [modalState2, setModalState2] = useState(false)
  const [snackbarState, setSnackbarState] = useState(false)
  const [font, setFont] = useState("")
  return (
    <div>
      <ThemeProvider theme={theme[myTheme] || theme.light}>
        <FontProvider font={font}>
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
                <Button value="dark">Dark</Button>
                <Button value="custom">Custom</Button>
              </ButtonGroup>
            </Container>

            <Container headline="Font" >
              <ButtonGroup fullWidth onSelect={x => setFont(x)}>
                <Button value="Noto Sans SC" default>Noto Sans SC</Button>
                <Button value="Roboto">Roboto</Button>
                <Button value="Mulish">Mulish</Button>
                <Button value="Noto Sans JP">Noto Sans JP</Button>
                <Button value="Nunito">Nunito</Button>
                <Button value="Quicksand">Quicksand</Button>
                <Button value="Inter">Inter</Button>
              </ButtonGroup>
            </Container>

            <br/>
            <Container headline={"Elements"} fullWidth>
              <Box headline="Tooltip">
                <Tooltip content="Useful animation about this button">
                  <Button demo color="danger" type="contained">Hover to see tooltip at the bottom</Button>
                </Tooltip>
                <Tooltip content="Useful animation about this button" position="top">
                  <Button demo color="success" type="contained">Hover to see tooltip at the top</Button>
                </Tooltip>
              </Box>
              
              <Box headline="Snackbar" block>
                <Snackbar visible={snackbarState} onClose={() => setSnackbarState(false)} timeOut={2000}>
                  <Alert color="info" action={<IcoX onClick={() => setSnackbarState(!snackbarState)}/>}>Informative message</Alert>
                </Snackbar>
                <Button demo onSelect={() => setSnackbarState(!snackbarState)}>Toggle Snackbar</Button>
              </Box>
              <Box headline="Alert">
                <Alert demo color="success" action={<strong>UNDO</strong>}>
                  <Alert.Title>Success</Alert.Title>
                  This is a success message with a title!
                </Alert>
                <Alert demo color="danger" type="contained" action={<IcoX/>}>This is a danger message!</Alert>
              </Box>
              <Box headline="Combox">
                <Box.Item>
                  <p>Select One</p>
                  <Combox demo>
                  {ComboxData.map((data) => 
                    <Combox.Option id={data.id} searchText={[data.job]} value={data.name} key={data.id}>{data.name}</Combox.Option>
                  )}
                  </Combox>
                </Box.Item>
                <Box.Item>
                  <p>Select Multiple</p>
                  <Combox demo multiple>
                  {ComboxData.map((data) => 
                    <Combox.Option id={data.id} searchText={[data.job]} value={data.name} key={data.id}>{data.name}</Combox.Option>
                  )}
                  </Combox>
                </Box.Item>
                <Box.Item>
                  <p>Select Multiple with Search</p>
                  <Combox demo multiple searchable>
                  {ComboxData.map((data) => 
                    <Combox.Option id={data.id} searchText={[data.job]} value={data.name} key={data.id}>{data.name}</Combox.Option>
                  )}
                  </Combox>
                </Box.Item>
              </Box>
              <Box headline="Tab" block>
                <div style={{height: "80px"}}>
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
              <Box headline="Avatar">
                  <div style={{width: "100px", height: "100px", padding: "8px"}}>
                    <Avatar alt="Quan Van" fluid={true} size="large"></Avatar>
                  </div>
                  <Avatar demo alt="Quan Van" fluid={false} size="small"></Avatar>
                  <Avatar demo alt="Quan Van" fluid={false} size="medium"></Avatar>
                  <Avatar demo alt="Quan Van" fluid={false} size="large"></Avatar>
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
                  <a href="google.com">Home</a>
                  <a href="google.com">Trending</a>
                  <a href="google.com">Funny</a>
                </Breadcrumb>
              </Box>
              <Box headline="Badge" block>
                <Badge demo icon={<IcoMail/>} value={1} max={10} dot/>
                <Badge demo icon={<IcoMail/>} value={99} max={999}/>
                <Badge demo icon={<IcoMail/>} value={50} max={10}/>
                <Badge demo icon={<IcoMail/>} value={0} max={10} showZero/>
                <Badge demo icon={<IcoMail/>} value={0} max={10}/>
              </Box>
              <Box headline="Modal" block>
                <Modal visible={modalState} onClickOutside={() => setModalState(false)} title="Great Title">
                  {text}
                </Modal>
                <Button demo onSelect={() => setModalState(true)}>Open Modal With Title</Button>
                <Modal visible={modalState2} onClickOutside={() => setModalState2(false)}>
                  {text}
                </Modal>
                <Button color="secondary" demo onSelect={() => setModalState2(true)}>Open Modal With No Title</Button>
              </Box>
              <Box headline="Link">
                <Box.Item>Very beautiful <Link href="https://google.com">link</Link></Box.Item>
                <Box.Item>Visited or not <Link href="#">link</Link></Box.Item>
                <Box.Item>It can have <Link href="#" underline>underline</Link></Box.Item>
              </Box>
              <Box headline="Text Input">
                <Box.Item>
                  <p>Auto Width Input</p>
                  <SimpleInput displayMode={mode} defaultValue="my default text is here" onChange={(v) => setTextValue(v)} value={textValue}/>
                </Box.Item>
                <Box.Item>
                  <p>Full Width Input</p>
                  <SimpleInput fullWidth displayMode={mode} defaultValue="my default text is here" onChange={(v) => setTextValue(v)} value={textValue}/>
                </Box.Item>
                
              </Box>
              <Box headline="Button" block>
                <Button color="success" size="small" displayMode={mode} demo onSelect={() => console.log("Wow")}>Success small</Button>
                <Button color="warning" size="medium" displayMode={mode} demo >Warning medium</Button>
                <Button color="danger" size="large" displayMode={mode} demo >Danger large</Button>
                <Button color="primary"size="medium" type="contained" displayMode={mode} demo >Primary</Button>
                <Button color="secondary"size="small" displayMode={mode} demo >Secondary</Button>
                <Button displayMode={mode} demo type="outline" >Outline</Button>
                <Button size="medium" displayMode={mode} demo type="text" >Text</Button>
                <Button size="medium" displayMode={mode} demo type="contained" ><IcoSettings left/> Settings</Button>
                <Button size="medium" displayMode={mode} demo type="contained" > Settings</Button>
              </Box>
              <Box headline="Calendar">
                  <Calendar demo/>
              </Box>
              <Box headline="Toggle">
                <Box.Item>
                  <p>Toggle</p>
                  <Toggle displayMode={mode} onSelect={v => console.log(v)}>Awesome</Toggle>
                  <p>Default true</p>
                  <Toggle displayMode={mode} onSelect={v => console.log(v)} default>Awesome</Toggle>
                </Box.Item>
                <Box.Item>
                  <p>Toggle Group</p>
                  <ToggleGroup displayMode={mode} onSelect={v => console.log(v)}>
                    <Toggle value={1} default>One</Toggle>
                    <Toggle value={2}>Two</Toggle>
                  </ToggleGroup>
                </Box.Item>
                <Box.Item>
                  <p>Toggle Group Horizontal</p>
                  <ToggleGroup horizontal displayMode={mode}>
                    <Toggle value={1}>One</Toggle>
                    <Toggle value={2}>Two</Toggle>
                  </ToggleGroup>
                </Box.Item>
              </Box>
              <Box headline="Checkbox">
                <Box.Item>
                  <p>Checkbox</p>
                  <Checkbox displayMode={mode} onSelect={v => console.log(v)} default>Awesome</Checkbox>
                </Box.Item>
                <Box.Item>
                  <p>Checkbox Group</p>
                  <CheckboxGroup displayMode={mode} onSelect={x => console.log(x)}>
                    <Checkbox value={1} default>One</Checkbox>
                    <Checkbox value={2}>Two</Checkbox>
                  </CheckboxGroup>
                </Box.Item>
                <Box.Item>
                  <p>Checkbox Group Horizontal</p>
                  <CheckboxGroup horizontal displayMode={mode}>
                    <Checkbox value={1}>One</Checkbox>
                    <Checkbox value={2}>Two</Checkbox>
                  </CheckboxGroup>
                </Box.Item>
              </Box>
              <Box headline="Radio Group">
                <Box.Item>
                  <p>Radio Group</p>
                  <RadioGroup displayMode={mode}>
                    <Radio value={1} default>One</Radio>
                    <Radio value={2}>Two</Radio>
                    <Radio value={3}>Three</Radio>
                  </RadioGroup>
                </Box.Item>
                <Box.Item>
                  <p>Radio Group Horizontal</p>
                  <RadioGroup horizontal displayMode={mode}>
                    <Radio value={1}>One</Radio>
                    <Radio value={2}>Two</Radio>
                    <Radio value={3}>Three</Radio>
                  </RadioGroup>
                </Box.Item>
              </Box>
              <Box headline="Button Group">
                <ButtonGroup displayMode={mode}>
                  <Button value={1} default>One</Button>
                  <Button value={2}>Two</Button>
                  <Button value={3}>Three</Button>
                </ButtonGroup>
              </Box>              
              <Box headline="Slide">
                <Slider displayMode={mode} fullWidth defaultValue={50}/>
              </Box>
              <FAB size="large" onClick={() => document.documentElement.scrollTop = 0}>
                <IcoArrowUpCircle/>
              </FAB>
              <FAB size="large" onClick={() => document.documentElement.scrollTop = document.body.scrollHeight} position>
                <IcoArrowDownCircle/>
              </FAB>
            </Container>
          </Container>
        </FontProvider>
      </ThemeProvider>
    </div>
  )
}

export default Quanh;
