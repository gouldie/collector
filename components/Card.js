import { forwardRef } from 'react'
import { Box, Image } from '@chakra-ui/react'
import { S3_URL } from '@globals'

function Card({ set, name, image, onClick, isCollected }, ref) {
  return (
    <Box
      ref={ref}
      onClick={() => onClick(image)}
      cursor='pointer'
      borderRadius='5px'
      _hover={{ boxShadow: '0 0 5px #ddd' }}
      opacity={isCollected ? 1 : 0.5}
    >
      <Image
        src={`${S3_URL}/${set}/${image}`}
        alt='Pokemon'
        style={{ width: '100%', display: 'block' }}
      />
    </Box>
  )
}

export default forwardRef(Card)
