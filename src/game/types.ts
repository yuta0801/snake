export type Cell =
  | { type: 'EMPTY' }
  | { type: 'WALL' }
  | { type: 'FOOD' }
  | { type: 'SNAKE', length?: number }

export type Board = Cell[][]

export type Direction = { x: 0 | 1 | -1, y: 0 | 1 | -1 }

export type Point = { x: number, y: number }

export type Player = {
  point: Point
  direction: Direction
  length: number
}
