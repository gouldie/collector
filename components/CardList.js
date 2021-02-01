import { Box } from 'bumbag'
import Card from 'components/Card'

export default function CardList ({ cards, filter }) {
  const filteredCards = cards.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <Box style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gridGap: '1rem'
    }}>
      {
        filteredCards.map((card, i) => <Card key={i} {...card} />)
      }
    </Box>
  )
}
