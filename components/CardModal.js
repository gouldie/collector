import { Image, Modal, ModalContent, ModalOverlay, Button } from '@chakra-ui/react'
import { S3_URL } from '@globals'
import getCardFileName from 'utils/getCardFileName'

function CardModal({
  isOpen,
  onClose,
  onButtonClick,
  isCollected,
  setId,
  setImageId,
  cardNo,
  cardName
}) {
  if (!cardNo) return null

  const fileName = getCardFileName(setImageId, cardNo, cardName)

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent width='fit-content' background='none'>
        <Image src={`${S3_URL}/${setId}/${fileName}`} objectFit='contain' maxWidth='300px' />

        <Button colorScheme={isCollected ? 'green' : 'red'} onClick={onButtonClick} mt='10px'>
          {isCollected ? 'Collected' : 'Not Collected'}
        </Button>
      </ModalContent>
    </Modal>
  )
}

export default CardModal
