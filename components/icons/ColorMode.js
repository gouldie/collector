import { IconButton, useColorMode } from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ColorMode({ style }) {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <IconButton
      cursor='pointer'
      variant='ghost'
      fontSize='1.3rem'
      style={style}
      icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
      onClick={() => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark')
      }}
      aria-label={colorMode === 'dark' ? 'Light theme' : 'Dark theme'}
    />
  )
}
