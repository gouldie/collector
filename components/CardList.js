import { useState } from 'react'
import FlipMove from 'react-flip-move'
import {
  Box,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import Card from 'components/Card'
import sortBy from 'utils/sort'
import useCollected from 'hooks/useCollected'
import { S3_URL } from '@globals'

export default function CardList({ set, cards, filter, sort }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selected, setSelected] = useState()
  const { collected, collectCard } = useCollected()

  const cardList = Object.entries(cards).map(([key, value]) => ({ no: Number(key), ...value }))
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
        {sortedCards.map((card, i) => (
          <Card
            key={card.image}
            set={set}
            {...card}
            isCollected={!!collected[set][card.no]}
            onClick={() => {
              onOpen(true)
              setSelected(card)
            }}
          />
        ))}
      </FlipMove>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent width='fit-content' background='none'>
          <Image src={`${S3_URL}/${set}/${selected?.image}`} objectFit='contain' maxWidth='300px' />

          <Button
            colorScheme={collected[set][selected?.no] ? 'green' : 'red'}
            onClick={() => collectCard({ set, no: selected.no })}
            mt='10px'
          >
            {collected[set][selected?.no] ? 'Collected' : 'Not Collected'}
          </Button>
        </ModalContent>
      </Modal>
    </Box>
  )
}
