import React from 'react'
import { Col, FormControl, Button } from 'react-bootstrap'

const ReferredModal = formSent => (
  <Col sm={12} id="referral-form">
    <FormControl id="user-form" name="fullName" type="text" placeholder="Name"/>
    <FormControl id="user-form" name="email" type="email" placeholder="Email address"/>
    <FormControl id="user-form" name="Instagram" type="text" placeholder="Instagram Username"/>
    <FormControl id="user-form" name="referee" type="text" placeholder="Person who referred you"/>
    <Button id="submit" bsStyle="primary" onClick={() => formSent()}>Submit</Button>
  </Col>
)

export default ReferredModal
