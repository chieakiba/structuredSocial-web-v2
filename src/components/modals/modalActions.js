// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch'
// import {API_KEY, Domain, From_Who} from './../../../api'

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const FORM_SENT = 'FORM_SENT' // eslint-disable-line

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const toggleModal = modal => ({
  type: TOGGLE_MODAL,
  modal
});

const formSent = user => {
  return () => {
    console.log('user', user)
    const url = '/send'
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then(() => {
      return (user)
    })
    .catch((error) => {
      return (error)
    })
  }
}

export const submitForm = () => {
  return (dispatch, getState) => {
    const form = getState().form.InviteModalForm;
    console.log('what is in the form', form)
    const user = {
      to: form.values.email,
      Instagram: form.values.Instagram,
      fullName: form.values.fullName
    }
    dispatch(formSent(user))
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
