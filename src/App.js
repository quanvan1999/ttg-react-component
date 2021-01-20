import Quan from './Quan'
import Quanh from './Quanh'
import Dat from './Dat'
import {Router} from '@reach/router'
import {useEffect, useState} from 'react'
function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json))
  },[])

  
  return (
    <Router>
      <Quanh path="/"/>
      <Quanh path="/quanh"/>
      <Quan path="/quan"/>
      <Dat path="/dat" data={data}/>
    </Router>
    
  )
}

export default App;
