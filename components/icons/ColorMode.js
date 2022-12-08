import { applyTheme, Icon, useColorMode } from 'bumbag'
import { useColorMode as chakUseColorMode } from '@chakra-ui/react'

const CustomColorMode = applyTheme(Icon, {
  styles: {
    base: {
      cursor: 'pointer',
      fontSize: '1.3rem'
    }
  }
})

export default function ColorMode({ style }) {
  const { colorMode, setColorMode } = useColorMode()
  const { colorMode: chakCLM, setColorMode: chakSetCM } = chakUseColorMode()

  return (
    <CustomColorMode
      style={style}
      icon={`solid-${colorMode === 'dark' ? 'sun' : 'moon'}`}
      onClick={() => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark')
        chakSetCM(chakCLM === 'dark' ? 'light' : 'dark')
      }}
      aria-label={colorMode === 'dark' ? 'Light theme' : 'Dark theme'}
    />
  )
}
