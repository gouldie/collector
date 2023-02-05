/* 
  {
    'base-set': {
      1: false,
      2: true,
      3: false
    }
  }
*/

import useLocalStorage from 'hooks/useLocalStorage'

const defaultValue = {}

function useCollected() {
  const [collected, setCollected] = useLocalStorage('collected', defaultValue)

  const collectCard = ({ set, no } = {}) => {
    setCollected(currentCollected => {
      const newCollected = { ...currentCollected }

      newCollected[set][no] = !newCollected[set][no]

      return newCollected
    })
  }

  return {
    collected,
    collectCard
  }
}

export default useCollected
