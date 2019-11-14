import { DIRECTION, CELL_EMPTY } from './constants'
import { Board, Point, Direction, Cell, Player } from './types'

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
  return board[point.x] && board[point.x][point.y].type !== 'WALL'
}

export const onNext = (board: Board, point: Point) => {
  return board[point.x][point.y]
}

export const nextBoard = (board: Board, point: Point, cell: Cell) => {
  return [
    ...board.slice(0, point.x),
    [
      ...board[point.x].slice(0, point.y),
      cell,
      ...board[point.x].slice(point.y + 1, board[point.x].length),
    ],
    ...board.slice(point.x + 1, board.length),
  ]
}

export const randomPoint = (board: Board): Point => {
  const random = (max: number) => Math.floor(Math.random() * Math.floor(max))
  const x = random(board.length), y = random(board[0].length)
  return board[x][y].type === 'EMPTY' ? { x, y } : randomPoint(board)
}

export const eatFood = (board: Board, player: Player) => {
  const cell = onNext(board, player.point)
  if (cell.type !== 'FOOD') return [board, player.length] as const
  const next = nextBoard(board, player.point, CELL_EMPTY)
  return [next, cell ? player.length + 1 : player.length] as const
}
