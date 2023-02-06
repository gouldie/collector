import { forwardRef } from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import { S3_URL } from '@globals'

function Card({ name, setId, fileName, onClick, isCollected }, ref) {
  return (
    <Box
      ref={ref}
      onClick={onClick}
      cursor='pointer'
      borderRadius='5px'
      _hover={{ boxShadow: '0 0 5px #ddd' }}
      opacity={isCollected ? 1 : 0.3}
    >
      <Image
        src={`${S3_URL}/${setId}/${fileName}`}
        alt={`${name} pokemon card`}
        width={105}
        height={143}
        sizes='105px'
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </Box>
  )
}

export default forwardRef(Card)
