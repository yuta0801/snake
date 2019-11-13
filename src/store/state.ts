import { Board, Player } from '../game/types'
import { INITIAL_BOARD, INITIAL_PLAYER } from '../game/constants'

export interface State {
  playing: boolean
  board: Board
  player: Player
}

const initialState: State = {
  playing: false,
  board: INITIAL_BOARD,
  player: INITIAL_PLAYER,
}

export default initialState
