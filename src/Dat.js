import React, {} from 'react'
import Loading1 from './components/loader/Loading1'
import Loading2 from './components/loader/Loading2'
import Loading3 from './components/loader/Loading3'
import Loading4 from './components/loader/Loading4'
export default function Dat() {
  return (
    <>
<<<<<<< HEAD
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
          <Col>A</Col>
          <Col>B</Col>
          <Col>C</Col>
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
=======
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
>>>>>>> 5a5298403d4455b9f6768c63ab09a1779f9a18a1
    </>
  )
}


 

