import React, {} from 'react'
import Mentions from './mentions/Mentions'
import {Container, ContainerFluid, Row, Col} from './components/layouts/Grid'
export default function Dat() {
  const data=['Apple', 'Banana', 'Orange', 'Tomatoes', 'Mango']
  return (
    <div style={{'max-width':'100%'}}>
      <Container>
        <Row>
          <Col col={4}> 
            container-col 4
          </Col>
          <Col col={6}>
            container-col 6
          </Col>
          <Col col={2}>
            container-col 2
          </Col>
        </Row>
      </Container>
        
      <ContainerFluid>
        <Row>
            <Col col={4}> 
              container-fluid-col 4
            </Col>
            <Col col={6}>
              container-fluid-col 6
            </Col>
            <Col col={2}>
              container-fluid-col 2
            </Col>
          </Row>
      </ContainerFluid>
      {/* <Mentions data={data}/> */}
    </div>
  )
}


 

