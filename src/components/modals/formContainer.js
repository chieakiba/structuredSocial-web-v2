import { connect } from 'react-redux'
import InviteModal  from './form/inviteModal'
import { submitForm } from './modalActions'

export default connect(null, {submitForm})(InviteModal)
