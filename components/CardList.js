import FlipMove from 'react-flip-move'
import Card from 'components/Card'
import { Box, Image, Modal, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

export default function CardList({ cards }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [src, setSrc] = useState()

  const setModalSrc = src => {
    setSrc(src)
    onOpen(true)
  }

  return (
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gridGap: '1rem'
      }}
    >
      <FlipMove typeName={null} duration={300}>
        {cards.map((card, i) => (
          <Card key={card.name} {...card} onClick={setModalSrc} />
        ))}
      </FlipMove>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent width='fit-content'>
          <Image src={src} objectFit='contain' maxWidth='300px' />
        </ModalContent>
      </Modal>
    </Box>
  )
}
