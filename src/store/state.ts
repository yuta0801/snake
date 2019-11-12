import { Board, Point } from '../game/types'
import { BOARD_SIZE } from '../game/constants'

export interface State {
  playing: boolean
  board: Board
  point: Point
}

const initialState: State = {
  playing: false,
  board: [...Array(BOARD_SIZE)].map(_ => Array(BOARD_SIZE).fill(0)),
  point: { x: 0, y: 0 },
}

export default initialState
