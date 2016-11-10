import axios from 'axios'
import { toastr } from 'react-redux-toastr'

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const FORM_SENT = 'FORM_SENT'

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const toggleModal = modal => ({
  type: TOGGLE_MODAL,
  modal
});

export const submitInviteForm = () => {
  return (dispatch, getState) => {
    let form = getState().form.InviteModalForm;
    let user = {
      email: form.values.email,
      Instagram: form.values.Instagram,
      firstName: form.values.firstName,
      lastName: form.values.lastName
    }
    return axios.post('http://localhost:3001/send/invitemail', user)
      .then(res => {
        toastr.success('success', `Welcome ${user.firstName}`)
        dispatch(closeModal())
        console.log('what is res.data', res.data)
      })
      .catch(error => {
        toastr.error('error', error)
        console.log('what is error', error)
      })
  }
}

export const submitReferredForm = () => {
  return (dispatch, getState) => {
    let form = getState().form.ReferredModalForm;
    let user = {
      email: form.values.email,
      Instagram: form.values.Instagram,
      firstName: form.values.firstName,
      lastName: form.values.lastName,
      referee: form.values.referee
    }
    return axios.post('http://localhost:3001/send/referredmail', user)
      .then(res => {
        toastr.success('success', `Welcome ${user.firstName}`)
        dispatch(closeModal())
        console.log('what is res.data', res.data)
      })
      .catch(error => {
        toastr.error('error', error)
        console.log('what is error', error)
      })
  }
}
