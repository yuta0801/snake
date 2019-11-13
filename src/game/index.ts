import { DIRECTION } from './constants'
import { Board, Point, Direction, Cell } from './types'

export const nextDirection = (current: Direction, keyCode: number) => {
  const next = DIRECTION[keyCode]
  if (current.x + next.x === 0 && current.y + next.y === 0)
    return current
  return next
}

export const nextPoint = (point: Point, direction: Direction) => {
  return { x: point.x + direction.x, y: point.y + direction.y }
}

export const canNext = (board: Board, point: Point) => {
  return board[point.x] && board[point.x][point.y] < 1
}

export const nextBoard = (board: Board, point: Point, cell: Cell) => {
  return [
    ...board.slice(0, point.y),
    [
      ...board[point.y].slice(0, point.x),
      cell,
      ...board[point.y].slice(point.x + 1, board[point.y].length),
    ],
    ...board.slice(point.y + 1, board.length),
  ]
}

export const randomPoint = (board: Board): Point => {
  const random = (max: number) => Math.floor(Math.random() * Math.floor(max))
  const x = random(board.length), y = random(board[0].length)
  return !board[x][y] ? { x, y } : randomPoint(board)
}
