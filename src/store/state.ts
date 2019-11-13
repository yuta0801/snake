import { Board, Point, Direction } from '../game/types'
import { INITIAL_BOARD, INITIAL_PLAYER } from '../game/constants'

export interface State {
  playing: boolean
  board: Board
  player: {
    point: Point
    direction: Direction
  }
}

const initialState: State = {
  playing: false,
  board: INITIAL_BOARD,
  player: INITIAL_PLAYER,
}

export default initialState
