import Image from 'next/image'
import { Modal, ModalContent, ModalOverlay, Button } from '@chakra-ui/react'
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
      <ModalContent width='fit-content' background='none' maxWidth='60%'>
        <Image
          src={`${S3_URL}/${setId}/${fileName}`}
          alt={`${cardName} pokemon card`}
          width={300}
          height={412}
          sizes='300px'
          style={{
            width: '100%',
            height: 'auto'
          }}
        />

        <Button colorScheme={isCollected ? 'green' : 'red'} onClick={onButtonClick} mt='10px'>
          {isCollected ? 'Collected' : 'Not Collected'}
        </Button>
      </ModalContent>
    </Modal>
  )
}

export default CardModal
