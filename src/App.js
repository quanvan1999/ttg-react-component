import Quan from './Quan'
import Quanh from './Quanh'
import {Router} from '@reach/router'
function App() {
  return (
    <Router>
      <Quanh path="/"/>
      <Quanh path="/quanh"/>
      <Quan path="/quan"/>
    </Router>
    
  )
}

export default App;
