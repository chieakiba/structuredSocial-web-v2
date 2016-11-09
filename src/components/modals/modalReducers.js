import React from 'react'
import { combineReducers } from 'redux'
import * as types from './modalActions'
import InviteModal from './formContainer'
import ReferredModal from './form/referredModal'
import ThankUserModal from './form/thankUserModal'

const INITIAL_STATE = {
  ReferredModal: {
    title: 'Join the club',
    modal: <ReferredModal />,
    show: false,
  },
  InviteModal: {
    title: 'Join the club',
    modal: <InviteModal />,
    show: false,
  }
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.TOGGLE_MODAL:
      return {
        ...state,
        [action.modal]: {
          ...state[action.modal],
          show: true
        }
      }
    case types.CLOSE_MODAL:
      return INITIAL_STATE;
    default:
      return state;
  }
}

const sendModalFormReducer = (state = {isFetched: false}, action) => {
  switch(action.type) {
    case `${types.FORM_SENT}_PENDING`:
      return {}
    case `${types.FORM_SENT}_FULFILLED`:
      return {
        err: null,
        isFetched: true,
        send: action.payload
      }
    case `${types.FORM_SENT}_REJECTED`:
      return {
        err: action.payload,
        isFetched: true,
        send: null
      }
    default:
      return state;
  }
}

export default combineReducers({ modal: modalReducer, formSent: sendModalFormReducer})
