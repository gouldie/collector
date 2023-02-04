import { Box } from '@chakra-ui/react'

export default function Container({ children }) {
  return (
    <Box maxWidth='1000px' m='0 auto' sx={{ p: ['0.5rem', '1.4rem'] }}>
      {children}
    </Box>
  )
}
