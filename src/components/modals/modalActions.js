import axios from 'axios'
import { toastr } from 'react-redux-toastr'

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const toggleModal = modal => ({
  type: TOGGLE_MODAL,
  modal
});

export const submitForm = () => {
  return (dispatch, getState) => {
    const inviteForm = getState().form.InviteModalForm;
    const invitedUser = {
      email: inviteForm.values.email,
      Instagram: inviteForm.values.Instagram,
      firstName: inviteForm.values.firstName,
      lastName: inviteForm.values.lastName
    }
    const referredForm = getState().form.ReferredModalForm;
    const referredUser = {
      email: referredForm.values.email,
      Instagram: referredForm.values.Instagram,
      firstName: referredForm.values.firstName,
      lastName: referredForm.values.lastName,
      referee: referredForm.values.referee
    }
    return axios.post('http://localhost:3001/send/mail', invitedUser, referredUser)
      .then(res => {
        toastr.success('success', `Welcome ${invitedUser.firstName}`)
        toastr.success('success', `Welcome ${referredUser.firstName}`)
        dispatch(closeModal())
        console.log('what is res.data', res.data)
      })
      .catch(error => {
        toastr.error('error', error)
        console.log('what is error', error)
      })
  }
}
