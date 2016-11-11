import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  const requiredFields = [ "firstName", "lastName", "email", "Instagram" ]
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

const InviteModal = ({ pristine, submitting, handleSubmit, submitInviteForm }) => (
    <Form id="invite-form" onSubmit={handleSubmit(submitInviteForm)}>
      <Field name="firstName" type="text" label="First Name" component={renderField} />
      <Field name="lastName" type="text" label="Last Name" component={renderField} />
      <Field name="email" type="email" label="Email address" component={renderField} />
      <Field name="Instagram" type="text" label="Instagram Username" component={renderField} />
      <div>
        <Button id="submit" bsStyle="primary" type="submit" disabled={pristine || submitting}>Submit</Button>
      </div>
    </Form>
  )

export default reduxForm({
  form: 'InviteModalForm',
  validate,
  renderField
})(InviteModal)
