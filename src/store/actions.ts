import { createAction } from 'redux-actions'
import { State } from './state'
import * as Types from './types'

export const uiKeyDown = createAction(Types.UI_KEY_DOWN)

export const sysMove = createAction(Types.SYS_MOVE)
export const sysGameStart = createAction(Types.SYS_GAME_START)
export const sysGameOver = createAction(Types.SYS_GAME_OVER)

export const setPlaying = createAction(Types.SET_PLAYING, (isPlaying: boolean) => isPlaying)
export const setBoard = createAction(Types.SET_BOARD, (board: State['board']) => board)
export const setPlayer = createAction(Types.SET_PLAYER, (player: State['player']) => player)
