import React, {} from 'react'
import Loading1 from './components/loader/Loading1'
import Loading2 from './components/loader/Loading2'
import Loading3 from './components/loader/Loading3'
import Loading4 from './components/loader/Loading4'
export default function Dat() {
  return (
    <>
      <Loading1>
        <Loading1.Circle ColorBorder="red"/>
        <Loading1.Circle ColorBorder="yellow" ColorAnimation="orange"/>
        <Loading1.Circle ColorBorder="blue"/>
      </Loading1>
      <Loading2>
        <Loading2.Dot/>
        <Loading2.Dot/>
        <Loading2.Dot/>
      </Loading2>
      <Loading3/>
      <div style={{'margin-top':'30px'}}>
        <Loading4/>
      </div>
    </>
  )
}


 

