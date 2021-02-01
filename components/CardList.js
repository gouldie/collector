import { Box } from 'bumbag'
import Card from 'components/Card'

export default function CardList ({ cards }) {
  return (
    <Box style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gridGap: '1rem'
    }}>
      {
        cards.map((card, i) => <Card key={i} {...card} />)
      }
    </Box>
  )
}
