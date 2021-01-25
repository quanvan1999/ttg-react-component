import React, {} from 'react'
import {Container, ContainerFluid, Row, Col} from './layouts/Grid'

export default function Dat() {

  return (
    <>
      <Container>
        <Row>
          <Col col={2}>
            Helllo World!
          </Col>
          <Col col={5}>
            Hello Kitty
          </Col>
          <Col col={5}>
            Hello Micky
          </Col>
          <Col col={7}>
            Hi
          </Col>
          <Col col={12}>
            Hi
          </Col>
        </Row>
      </Container>
      <ContainerFluid></ContainerFluid>
    </>
  )
}


 

