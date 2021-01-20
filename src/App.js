import Quan from './Quan'
import Quanh from './Quanh'
import Dat from './Dat'
import {Router} from '@reach/router'
import {useEffect, useState} from 'react'
function App() {
 
  return (
    <Router>
      <Quanh path="/"/>
      <Quanh path="/quanh"/>
      <Quan path="/quan"/>
      <Dat path="/dat"/>
    </Router>
    
  )
}

export default App;
