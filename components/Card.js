import { Box, Image } from 'bumbag'

export default function Card ({ name, image }) {
  return (
    <Box>
      <Image src={image} alt='Pokemon' style={{ width: '100%' }} />
    </Box>
  )
}
