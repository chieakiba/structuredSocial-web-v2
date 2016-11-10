import React from 'react'
import { Button } from 'react-bootstrap'
import ModalComponent from './ModalComponent'

const checkModal = obj => {
  const modalKeys = Object.keys(obj);
  const modalToShow = modalKeys.filter(key => obj[key].show);
  return obj[modalToShow]
}

const ShowModalButton = ({ modals, toggleModal, closeModal, onSubmit, submitForm }) => {
  const theModal = checkModal(modals)
  return (
    <div id="forms">
      <Button id="invite-button" name="inviteButton" bsSize="large" onClick={() => toggleModal('InviteModal')}>Request an invite</Button>
      <Button id="referral-button" name="referralButton" bsSize="large" onClick={() => toggleModal('ReferredModal')}>I have a referral</Button>
      <ModalComponent name={theModal ? theModal.modal : false} show={theModal ? theModal.show : false} title={theModal ? theModal.title : false} closeModal={() => closeModal()} submitForm={submitForm} />
    </div>
  )
}

export default ShowModalButton
