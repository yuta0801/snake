import { Board, Point, Direction } from '../game/types'
import { INITIAL_BOARD } from '../game/constants'

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
  player: {
    point: { x: 12, y: 12 },
    direction: { x: 1, y: 0 }
  },
}

export default initialState
