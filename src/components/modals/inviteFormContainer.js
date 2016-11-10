import { connect } from 'react-redux'
import InviteModal  from './form/inviteModal'
import { submitInviteForm } from './modalActions'

export default connect(null, {submitInviteForm})(InviteModal)
