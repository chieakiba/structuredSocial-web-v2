import { connect } from 'react-redux'
import InviteModal  from './form/inviteModal'
import ReferredModal  from './form/referredModal'
import { submitForm } from './modalActions'

export default connect(null, {submitForm})(InviteModal, ReferredModal)
