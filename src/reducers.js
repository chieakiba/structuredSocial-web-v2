import { combineReducers } from 'redux'
import modalReducers from './components/modals/modalReducers'
import CounterReducers from './components/counter/redux/CounterReducers'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  modals: modalReducers,
  counter: CounterReducers,
  form: formReducer
})
