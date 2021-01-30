import seriesData from '../data/series'

export default seriesData.reduce((accumulator, currentValue) => {
  if (currentValue.sets) {
    currentValue.sets.forEach(set => {
      accumulator.push(set.id)
    })
  }

  return accumulator
}, [])
