import baseSet from './sets/base-set'
import jungle from './sets/jungle'
import fossil from './sets/fossil'

export default [
  {
    title: 'Base Set Series',
    sets: [
      {
        id: 'base-set',
        ...baseSet
      },
      {
        id: 'jungle',
        ...jungle
      },
      {
        id: 'fossil',
        ...fossil
      }
    ]
  }
]
