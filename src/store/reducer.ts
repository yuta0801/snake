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

const player = handleActions({
  [Types.SET_PLAYER]: (_, action: Action<State['player']>) => {
    return action.payload
  },
  [Types.SET_PLAYER_LENGTH]: (state, action: any) => {
    return { ...state, length: action.payload }
  },
  [Types.SET_PLAYER_DIRECTION]: (state, action: any) => {
    return { ...state, direction: action.payload }
  },
  [Types.SET_PLAYER_POINT]: (state, action: any) => {
    return { ...state, point: action.payload }
  },
}, initialState.player)

const reducer = combineReducers({
  playing,
  board,
  player,
})

export default reducer
