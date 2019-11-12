import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../store/state'
import { BOARD_SIZE, CELL_SIZE, CELL_COLORS } from '../game/constants'

const Board = () => {
  const { board, point } = useSelector((state: State) => state)

  const boardSize = (BOARD_SIZE * CELL_SIZE) + 2

  return (
    <svg width={boardSize} height={boardSize}>
      <rect
        width={boardSize} height={boardSize}
        x={0} y={0} stroke="black" fill="none"
      />
      { board.map((col, x) => col.map((cell, y) => {
        const here = x === point.x && y === point.y
        return (
          <rect
            x={(x * CELL_SIZE) + 1} y={(y * CELL_SIZE) + 1}
            width={CELL_SIZE} height={CELL_SIZE}
            stroke="black" fill={CELL_COLORS[here ? 1 : cell]}
            key={`${x},${y}`}
          />
        )
      })) }
    </svg>
  )
}

export default Board
