import * as types from './CounterActions'

const INITIAL_STATE = {
  hover: false,
  time: 0,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ON_HOVER:
      return {
        ...state,
        hover: true
      }
    case types.START_COUNTER:
      return {
        ...state,
        time: state.time + 1
      }
    default:
      return state;
  }
}
