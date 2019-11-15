import React from 'react'
import Konva from 'konva'
import { Stage, Layer, Rect } from 'react-konva'
import { useSelector } from 'react-redux'
import { State } from '../store/state'
import { BOARD_SIZE, CELL_SIZE, CELL_COLORS } from '../game/constants'

Konva.pixelRatio = 2

const Board = () => {
  const { board } = useSelector((state: State) => state)

  const boardSize = BOARD_SIZE * CELL_SIZE

  return (
    <Stage width={boardSize} height={boardSize}>
      <Layer>
        { board.map((col, x) => col.map((cell, y) => {
          const color = CELL_COLORS[cell.type]
          return (
            <Rect
              x={x * CELL_SIZE} y={y * CELL_SIZE}
              width={CELL_SIZE} height={CELL_SIZE}
              stroke="black" fill={color}
              key={`${x},${y}`}
            />
          )
        })) }
      </Layer>
    </Stage>
  )
}

export default Board
