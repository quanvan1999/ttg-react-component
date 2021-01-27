import React, {} from 'react'
import {Container, ContainerFluid, Row, Col} from './layouts/Grid'
export default function Dat() {
  // offSet,middle,auto, 
  //JustifiContent : center, left, flex-end....
  // sm, md, xs, lg, xl, xxl
  return (
    <>
      <Container>
        <Row auto>
          <Col col={3} offSet={4}>
            offset-4
          </Col>
          <Col col={5}>
            col-5
          </Col>

          <Col col={2}>
            col-2
          </Col>
          <Col col={3}>
            col-3
          </Col>
          <Col col={3} offSet={2}>
            offset-2
          </Col>

          <Col col={5}>
            col-5
          </Col>
        </Row>

        <Row>
          <Col col={8} middle sm={4}>
            col-middle
          </Col>
        </Row>

        <Row JustifyContent="center">
          <Col col={3}>
            Justify center
          </Col>
          <Col col={3}>
            Justify center
          </Col>
        </Row>

      </Container>
      <br/>
      <ContainerFluid>
        <Row>
          <Col col={3} offSet={4}>
            offset-4
          </Col>
          <Col col={5}>
            col-5
          </Col>
          
          <Col col={2}>
            col-2
          </Col>
          <Col col={2}>
            col-2
          </Col>
          <Col col={3} offSet={2}>
            offset-2
          </Col>

          <Col col={5} auto>
            text-auto
          </Col>
        </Row>

        <Row>
          <Col col={8} middle>
            middle
          </Col>
        </Row>

        <Row>
          <Col auto>
            text-auto middle
          </Col>
        </Row>
      </ContainerFluid>
      <br/>
      <Container>
        <Row>
          <Col>
            default
          </Col>
          <Col>
            default 1
          </Col>
          <Col>
            default 2
          </Col>
        </Row>
      </Container>
    </>
  )
}


 

