import Quan from './Quan'
import Quanh from './Quanh'
import Dat from './Dat'
import Signoff from './apps/Signoff'
import {Router} from '@reach/router'
import Examples from './components/QuanhDevMention/demo/Examples'
function App() {
  
  
  return (
    <Router>
      <Quanh path="/"/>
      <Quanh path="/quanh"/>
      <Quan path="/quan"/>
      <Dat path="/dat"/>
      <Signoff path="/app/signoff"/>
      <Examples path="/mention"/>
    </Router>
  )
}

export default App;
