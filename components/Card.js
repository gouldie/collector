import { forwardRef } from 'react'
import { Box, Image } from '@chakra-ui/react'

function Card({ name, image, onClick }, ref) {
  return (
    <Box
      ref={ref}
      onClick={() => onClick(image)}
      cursor='pointer'
      borderRadius='5px'
      _hover={{ boxShadow: '0 0 5px #ddd' }}
    >
      <Image src={image} alt='Pokemon' style={{ width: '100%', display: 'block' }} />
    </Box>
  )
}

export default forwardRef(Card)
