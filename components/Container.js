import { Box, applyTheme } from 'bumbag'

const ContainerBox = applyTheme(Box, {
  styles: {
    base: {
      flex: 1,
      overflowY: 'auto',
      padding: '1rem'
    }
  }
})

export default function Container ({ children }) {
  return (
    <ContainerBox>
      {children}
    </ContainerBox>
  )
}
