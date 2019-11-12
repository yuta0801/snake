import { useEffect, useCallback } from 'react'

const useKeyDown = (callback: (code: number) => void) => {
  const handleKeydown = useCallback((event: KeyboardEvent) => {
    callback(event.keyCode)
  }, [callback])

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  })
}

export default useKeyDown
