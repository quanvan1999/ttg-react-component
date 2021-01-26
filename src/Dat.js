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
          <Col col={3}>
            Hello Kitty
          </Col>
          <Col col={2}>
            Hello
          </Col>
          <Col col={1}>
            Hello Micky
          </Col>
          <Col col={4}>
            Hi      
          </Col>

          <Col col={7}>
            Hi guys
          </Col>
          <Col col={3}>
            Hello
          </Col>
          <Col col={2}>
            World
          </Col>
        </Row>

        <Row>
          <Col col={5}>
            Hello world
          </Col>
          <Col col={6}>
            Hello world 1
          </Col>
          <Col col={1}>
            Hello
          </Col>
        </Row>
      </Container>

      
      <ContainerFluid>
        <Row>
            <Col col={2}>
              Hello world
            </Col>
            <Col col={7}>
              Hello world 1
            </Col>
            <Col col={3}>
              Hello
            </Col>
        </Row>
      </ContainerFluid>
    </>
  )
}


 

