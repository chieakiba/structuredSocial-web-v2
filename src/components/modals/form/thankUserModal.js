import React from 'react'
import { Col, h1, Button } from 'react-bootstrap'

const ThankUserModal = closeModal => (
  <Col sm={12}>
    <h1>Thank you. Our team will get in touch with shortly.</h1>
    <Button id="submit" bsStyle="primary" onClick={closeModal}>Submit</Button>
  </Col>
)

export default ThankUserModal
