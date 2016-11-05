import * as types from '../constants/actionTypes'
import { List, Map } from 'immutable';

const CounterInitialState = Map({ value: 1 })

const counter = (state = CounterInitialState, action) => {
  switch (action.type) {
    case types.INC_COUNT_VALUE:
      return state.update('value', value => value + action.payload)
    case types.DEC_COUNT_VALUE:
      return state.update('value', value => value - action.payload)
    default:
      return state
  }
}


export default counter;