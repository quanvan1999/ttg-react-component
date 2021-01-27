import React, {} from 'react'
import {Container, ContainerFluid, Row, Col} from './layouts/Grid'
export default function Dat() {
  // offSet,middle,auto
  
  return (
    <>
      <Container>
        <Row>
          <Col col={3} offSet={4}>
            Hello 1
          </Col>
          <Col col={5}>
            Hello 2
          </Col>

          <Col col={2}>
            Hello 4
          </Col>
          <Col col={2}>
            Hello 4
          </Col>
          <Col col={3} offSet={2}>
            Hello 5
          </Col>

          <Col col={5} auto>
            Hello 6
          </Col>
        </Row>

        <Row>
          <Col col={8} middle sm={4}>
            Hello world
          </Col>
        </Row>
      </Container>
      <br/>
      <ContainerFluid>
        <Row>
          <Col col={3} offSet={4}>
            Hello 1
          </Col>
          <Col col={5}>
            Hello 2
          </Col>
          
          <Col col={2}>
            Hello 4
          </Col>
          <Col col={2}>
            Hello 4
          </Col>
          <Col col={3} offSet={2}>
            Hello 5
          </Col>

          <Col col={5} auto>
            Hello 6
          </Col>
        </Row>

        <Row>
          <Col col={8} middle sm={4}>
            Hello world
          </Col>
        </Row>
      </ContainerFluid>
    </>
  )
}


 

