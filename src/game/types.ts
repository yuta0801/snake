export type Board = number[][]

export type Direction = { x: 0 | 1 | -1, y: 0 | 1 | -1 }

export type Point = { x: number, y: number }

export type Cell = number
// -1: food, 0: empty, 1 <=: snake

export type Player = {
  point: Point
  direction: Direction
  length: number
}
