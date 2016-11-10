import { connect } from 'react-redux'
import ReferredModal  from './form/inviteModal'
import { submitReferredForm } from './modalActions'

export default connect(null, {submitReferredForm})(ReferredModal)
