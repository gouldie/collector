import baseSet from './sets/base-set'
import jungle from './sets/jungle'
import fossil from './sets/fossil'
import gymHeroes from './sets/gym-heroes'

export default [
  {
    title: 'Base Set Series',
    sets: [{ ...baseSet }, { ...jungle }, { ...fossil }]
  },
  {
    title: 'Gym Heroes Series',
    sets: [{ ...gymHeroes }]
  }
]
