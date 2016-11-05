import { connect } from  'react-redux'
import ShowModalButton from './ShowModalButton'
import { toggleModal, closeModal, submitForm } from './modalActions'

export default connect(
  state => ({
    modals: state.modals.modal
  }),
  { toggleModal, closeModal, submitForm }
)(ShowModalButton);
