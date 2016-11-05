import { connect } from  'react-redux'
import { onHover, startCounter } from './CounterActions'
import CounterComponent from '../CounterComponent'

export default connect(
  state => ({
    counter: state.counter
  }),
  { onHover, startCounter }
)(CounterComponent);
