import { Box } from 'bumbag'
import Card from 'components/Card'
import FlipMove from 'react-flip-move'

export default function CardList ({ cards }) {
  return (
    <Box style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gridGap: '1rem'
    }}>
      <FlipMove typeName={null} duration={300}>
        {
          cards.map((card, i) => <Card key={card.name} {...card} />)
        }
      </FlipMove>
    </Box>
  )
}
