import axios from 'axios'

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
      to: form.values.email,
      Instagram: form.values.Instagram,
      fullName: form.values.fullName
    }
    return axios.post('http://localhost:3001/send/mail', user)
      .then(res => console.log('what is res.data', res.data))
      .catch(error => console.log('what is error', error))
  }
}

// export const sentSuccessThankUser = (msg) => {
//   return (dispatch) => {
//     let url = 'https://api.mailgun.net/v3/' + 'structured-social.com'
//     return fetch(url, {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then((res) => {
//       if(res.status < 200 || res.status >= 300) {
//         let error = new Error(res.statusText)
//         error.res = res
//         throw error
//       }
//       return res.json({})
//     })
//     .then((msg) => {
//       return dispatch(toggleModal('ThankUserModal'))
//     })
//     .catch((error) => {
//       return dispatch(formSentError(error))
//     })
//   }
// }
