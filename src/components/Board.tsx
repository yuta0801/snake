import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../store/state'
import { BOARD_SIZE, CELL_SIZE, CELL_COLORS } from '../game/constants'

const Board = () => {
  const { board, player } = useSelector((state: State) => state)

  const boardSize = BOARD_SIZE * CELL_SIZE

  return (
    <svg width={boardSize} height={boardSize}>
      { board.map((col, x) => col.map((cell, y) => {
        const here = x === player.point.x && y === player.point.y
        const color = CELL_COLORS[here ? 1 : cell === -1 ? 2 : cell]
        return (
          <rect
            x={x * CELL_SIZE} y={y * CELL_SIZE}
            width={CELL_SIZE} height={CELL_SIZE}
            stroke="black" fill={color}
            key={`${x},${y}`}
          />
        )
      })) }
    </svg>
  )
}

export default Board
