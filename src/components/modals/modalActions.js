import axios from 'axios'
import {toastr} from 'react-redux-toastr'

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

export const submitForm = () => {
  return (dispatch, getState) => {
    const form = getState().form.InviteModalForm;
    const user = {
      email: form.values.email,
      Instagram: form.values.Instagram,
      fullName: form.values.fullName
    }
    return axios.post('http://localhost:3001/send/mail', user)
      .then(res => {
        toastr.success('success', `Welcome ${user.fullName}`)
        dispatch(closeModal())
        console.log('what is res.data', res.data)
      })
      .catch(error => {
        toastr.error('error', error)
        console.log('what is error', error)
      })
  }
}
