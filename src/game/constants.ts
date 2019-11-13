export const TICK_INTERVAL = 100

export const BOARD_SIZE = 25

export const INITIAL_BOARD =
  [...Array(BOARD_SIZE)].map(_ => Array(BOARD_SIZE).fill(0))

export const CELL_SIZE = 20
export enum CELL_TYPE {
  EMPTY,
  FULL,
}
export const CELL_COLORS = ['white', 'black']

export const KEYS = {
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
}

export const DIRECTION = {
  [KEYS.ARROW_LEFT]: { x: -1, y: 0 },
  [KEYS.ARROW_UP]: { x: 0, y: -1 },
  [KEYS.ARROW_RIGHT]: { x: 1, y: 0 },
  [KEYS.ARROW_DOWN]: { x: 0, y: 1 },
}
