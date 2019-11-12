import { CELL_TYPE } from './constants'
import { Board, Point } from './types'

export const move = (point: Point, direction: Point) => {
  return { x: point.x + direction.x, y: point.y + direction.y }
}

export const isEmpty = (board: Board, point: Point) => {
  return board[point.x] && board[point.x][point.y] === CELL_TYPE.EMPTY
}
