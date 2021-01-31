import { Box, applyTheme } from 'bumbag'

const ContainerBox = applyTheme(Box, {
  styles: {
    base: {
      padding: '1.4rem'
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
