import { applyTheme, Icon, useColorMode } from 'bumbag'

const CustomColorMode = applyTheme(Icon, {
  styles: {
    base: {
      cursor: 'pointer',
      fontSize: '1.3rem'
    }
  }
})

export default function ColorMode () {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <CustomColorMode
      icon={`solid-${colorMode === 'dark' ? 'sun' : 'moon'}`}
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
    />
  )
}
