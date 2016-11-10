import { connect } from 'react-redux'
import ReferredModal  from './form/referredModal'
import { submitReferredForm } from './modalActions'

export default connect(null, {submitReferredForm})(ReferredModal)
