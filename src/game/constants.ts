export const TICK_INTERVAL = 100

export const FIELD_SIZE = 25

export const BOARD_SIZE = FIELD_SIZE + 2

export const INITIAL_BOARD = [
  Array(BOARD_SIZE).fill(1),
  ...[...Array(FIELD_SIZE)]
    .map(() => [1, ...Array(FIELD_SIZE).fill(0), 1]),
  Array(BOARD_SIZE).fill(1),
]

export const INITIAL_PLAYER = {
  point: { x: 12, y: 12 },
  direction: { x: 0, y: 0 },
} as const

export const CELL_SIZE = 20
export const CELL_COLORS = ['white', 'black', 'orange']

export const KEYS = {
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
}

export const ARROW_KEYS = [
  KEYS.ARROW_LEFT, KEYS.ARROW_UP,
  KEYS.ARROW_RIGHT, KEYS.ARROW_DOWN,
]

export const DIRECTION = {
  [KEYS.ARROW_LEFT]: { x: -1, y: 0 },
  [KEYS.ARROW_UP]: { x: 0, y: -1 },
  [KEYS.ARROW_RIGHT]: { x: 1, y: 0 },
  [KEYS.ARROW_DOWN]: { x: 0, y: 1 },
}
