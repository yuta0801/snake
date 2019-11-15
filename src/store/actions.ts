import { createAction } from 'redux-actions'
import { State } from './state'
import * as Types from './types'

export const uiKeyDown = createAction(Types.UI_KEY_DOWN)

export const sysGameStart = createAction(Types.SYS_GAME_START)
export const sysGameOver = createAction(Types.SYS_GAME_OVER)
export const sysGameMove = createAction(Types.SYS_GAME_MOVE)
export const sysGameEat = createAction(Types.SYS_GAME_EAT)

export const setPlaying = createAction(Types.SET_PLAYING, (isPlaying: boolean) => isPlaying)
export const setBoard = createAction(Types.SET_BOARD, (board: State['board']) => board)
export const setPlayer = createAction(Types.SET_PLAYER, (player: State['player']) => player)
export const setPlayerPoint = createAction(Types.SET_PLAYER_POINT, (point: State['player']['point']) => point)
export const setPlayerDirection = createAction(Types.SET_PLAYER_DIRECTION, (direction: State['player']['direction']) => direction)
export const setPlayerLength = createAction(Types.SET_PLAYER_LENGTH, (length: State['player']['length']) => length)
