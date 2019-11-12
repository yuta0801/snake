import React from 'react'
import { useSelector } from 'react-redux'
import useKeyHandler from './hooks/useKeyHandler'
import { State } from './store/state'
import Board from './components/Board'

const App = () => {
  useKeyHandler()

  const { playing } = useSelector((state: State) => state)

  return (
    playing ? <Board /> : <p>Type any key to start game</p>
  )
}

export default App
