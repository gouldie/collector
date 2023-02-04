import { Box } from '@chakra-ui/react'

export default function Container({ children }) {
  return (
    <Box p='1.4rem' maxWidth='1000px' m='0 auto'>
      {children}
    </Box>
  )
}
