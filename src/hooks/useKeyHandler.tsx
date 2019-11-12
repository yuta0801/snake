import { useDispatch } from 'react-redux'
import useKeyDown from './useKeyDown'
import { uiKeyDown } from '../store/actions'

const useKeyHandler = () => {
  const dispatch = useDispatch()
  useKeyDown(key => dispatch(uiKeyDown(key)))
}

export default useKeyHandler
