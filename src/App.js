import Quan from './Quan'
import Quanh from './Quanh'
import Dat from './Dat'
import Form from './apps/Form'
import Main from './apps/Main'
import {Router} from '@reach/router'
function App() {
  return (
    <Router>
      <Quanh path="/"/>
      <Quanh path="/quanh"/>
      <Quan path="/quan"/>
      <Dat path="/dat"/>
      <Main path="/app/form"/>
      <Form path="/app/form/new"/>
    </Router>
  )
}

export default App;
