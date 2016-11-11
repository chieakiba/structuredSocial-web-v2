import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const Services = () => {
  return (
    <Grid>
      <section id="services">
        <Col className="content">
          <Row className="show-grid text-center">
            <Col lg={10} lgOffset={1} xs={10}>
              <h2>How do we grow your social presence?</h2>
              <hr className="small"/>
              <Row className="show-grid">
                <Col md={4} sm={6} xs={12}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-users fa-stack-2x"></i>
                  </span>
                  <h4>
                    <strong>Identify your target audience</strong>
                  </h4>
                  <p>We will research the industry and target audience for your account</p>
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-comments-o fa-stack-2x"></i>
                  </span>
                  <h4>
                    <strong>Engage with identified audience</strong>
                  </h4>
                  <p>Using our vast network, we will engage with the target audience for you</p>
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-line-chart fa-stack-2x"></i>
                  </span>
                  <h4>
                    <strong>See exponential growth</strong>
                  </h4>
                  <p>Within a month, you will see your account grow exponentially</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </section>
    </Grid>
  );
}

export default Services
