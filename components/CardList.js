import { useState } from 'react'
import FlipMove from 'react-flip-move'
import { Box, useDisclosure } from '@chakra-ui/react'
import Card from 'components/Card'
import sortBy from 'utils/sort'
import useCollected from 'hooks/useCollected'
import getCardFileName from 'utils/getCardFileName'
import CardModal from 'components/CardModal'

export default function CardList({ setData, filter, sort }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selected, setSelected] = useState()
  const { collected, collectCard } = useCollected()

  const cardList = Object.entries(setData.cards).map(([key, value]) => ({
    no: Number(key),
    ...value
  }))
  const filteredCards = cardList.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
  const sortedCards = filteredCards.sort(sortBy[sort])

  return (
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gridGap: '1rem',
        position: 'relative' // stop react-flip-move giving warning about static parent
      }}
    >
      <FlipMove typeName={null} duration={300}>
        {sortedCards.map((card, i) => {
          const fileName = getCardFileName(setData.imageId, card.no, card.name)

          return (
            <Card
              key={card.no}
              {...card}
              setId={setData.id}
              fileName={fileName}
              isCollected={!!collected[setData.id]?.[card.no]}
              onClick={() => {
                onOpen(true)
                setSelected(card)
              }}
            />
          )
        })}
      </FlipMove>

      <CardModal
        isOpen={isOpen}
        onClose={onClose}
        onButtonClick={() => collectCard({ setId: setData.id, no: selected?.no })}
        isCollected={collected[setData.id]?.[selected?.no]}
        setId={setData.id}
        setImageId={setData.imageId}
        cardNo={selected?.no}
        cardName={selected?.name}
      />
    </Box>
  )
}
