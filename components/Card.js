import { forwardRef } from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import { S3_URL } from '@globals'

function Card({ setId, fileName, onClick, isCollected }, ref) {
  return (
    <Box
      ref={ref}
      onClick={onClick}
      cursor='pointer'
      borderRadius='5px'
      _hover={{ boxShadow: '0 0 5px #ddd' }}
      opacity={isCollected ? 1 : 0.3}
      // position='relative'
      // width='100px'
      // height='80px'
    >
      <Image
        src={`${S3_URL}/${setId}/${fileName}`}
        alt='Pokemon'
        width={105}
        height={143}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto'
        }}
        // fill
        // sizes='100vw'
        // style={{
        //   objectFit: 'cover'
        // }}
      />
    </Box>
  )
}

export default forwardRef(Card)
