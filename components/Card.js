import { forwardRef } from 'react'
import { Box, Image } from 'bumbag'

function Card ({ name, image }, ref) {
  return (
    <Box ref={ref}>
      <Image src={image} alt='Pokemon' style={{ width: '100%' }} />
    </Box>
  )
}

export default forwardRef(Card)
