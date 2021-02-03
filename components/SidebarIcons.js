import { Box, applyTheme } from 'bumbag'
import ColorModeIcon from 'components/icons/ColorMode'

const CustomBox = applyTheme(Box, {
  styles: {
    base: {
      padding: '1rem 1.2rem 1rem',
      marginBottom: '1rem'
    }
  },
  modes: {
    dark: {
      styles: {
        base: {
          borderBottom: '1px solid var(--bb-palette-gray700)'
        }
      }
    },
    light: {
      styles: {
        base: {
          borderBottom: '1px solid var(--bb-palette-white800)'
        }
      }
    }
  }
})

export default function SidebarIcons () {
  return (
    <CustomBox>
      <ColorModeIcon style={{ position: 'relative', top: '4px' }} />
    </CustomBox>
  )
}
