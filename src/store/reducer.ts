import { combineReducers } from 'redux'
import { handleActions, Action } from 'redux-actions'
import initialState, { State } from './state'
import * as Types from './types'

const playing = handleActions({
  [Types.SET_PLAYING]: (_, action: Action<State['playing']>) => {
    return action.payload
  },
}, initialState.playing)

const board = handleActions({
  [Types.SET_BOARD]: (_, action: Action<State['board']>) => {
    return action.payload
  },
}, initialState.board)

const point = handleActions({
  [Types.SET_POINT]: (_, action: Action<State['point']>) => {
    return action.payload
  },
}, initialState.point)

const reducer = combineReducers({
  playing,
  board,
  point,
})

export default reducer
