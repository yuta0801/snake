import { CELL_TYPE, DIRECTION } from './constants'
import { Board, Point, Direction } from './types'

export const nextDirection = (current: Direction, keyCode: number) => {
  const next = DIRECTION[keyCode]
  if (current.x + next.x === 0 && current.y + next.y === 0)
    return current
  return next
}

export const nextPoint = (point: Point, direction: Direction) => {
  return { x: point.x + direction.x, y: point.y + direction.y }
}

export const isEmpty = (board: Board, point: Point) => {
  return board[point.x] && board[point.x][point.y] === CELL_TYPE.EMPTY
}
