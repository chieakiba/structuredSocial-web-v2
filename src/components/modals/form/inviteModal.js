import React from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  const requiredFields = [ "fullName", "email", "Instagram" ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const InviteModal = ({ pristine, submitting, handleSubmit, submitForm, fullName, email, Instagram }) => (
    <Col sm={12} id="invite-form">
      <Form onSubmit={handleSubmit(submitForm)}>
        <label>First and Last Name</label>
        <div>
          <Field name="fullName" component="input" type="text" placeholder="Name"/>
        </div>
        <label>Email Address</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email address"/>
        </div>
        <label>Instagram Username</label>
          <div>
            <Field name="Instagram" component="input" type="text" placeholder="Instagram Username"/>
          </div>
        <Button id="submit" bsStyle="primary" type="submit" disabled={pristine || submitting}>Submit</Button>
      </Form>
    </Col>
  )


export default reduxForm({
  form: 'InviteModalForm',
  validate
})(InviteModal)
