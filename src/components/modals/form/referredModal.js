import React from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  const requiredFields = [ "firstName", "lastName", "email", "Instagram", "referee" ]
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

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <div id="errorMessage"><strong>{error}</strong></div>}
    </div>
  </div>
)

const ReferredModal = ({ pristine, submitting, handleSubmit, submitReferredForm }) => (
    <Col sm={12} id="referral-form">
      <Form onSubmit={handleSubmit(submitReferredForm)} >
        <Field name="firstName" component={renderField} type="text" label="First Name"/>
        <Field name="lastName" component={renderField} type="text" label="Last Name"/>
        <Field name="email" component={renderField} type="email" label="Email address"/>
        <Field name="Instagram" component={renderField} type="text" label="Instagram Username"/>
        <Field name="referee" component="input" type="text" label="Person Who Referred You"/>
        <div>
          <Button id="submit" bsStyle="primary" type="submit" disabled={pristine || submitting}>Submit</Button>
        </div>
      </Form>
    </Col>
)

export default reduxForm({
  form: 'ReferredModalForm',
  validate,
  renderField
})(ReferredModal)
