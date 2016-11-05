import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Counter from './counter'

const CounterComponent = ({onHover, startCounter, counter: { hover , time} }) => (
  <div>
    <section id="instagramcounter">
      <div className="content">
        <Row className="show-grid text-center">
          <Col lg={10} lgOffset={1}>
            <h2>Social Reach:</h2>
            <hr className="small"/>
            <Row onMouseEnter={() => onHover()}>
              <div className="text-center">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-globe fa-stack-2x"></i>
                </span>
                <div className="counter h1" data-count="75000000">
                {hover ? (
                  <Counter startCounter={() => startCounter()} time={time} />
                ) : 0}+ Users</div>
                <p>We have worked with a wide breadth of businesses and company. There is no limit to our network and our circle of influence</p>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  </div>
)

export default CounterComponent
