import { PageWithHeader, TopNav, Icon, useColorMode, applyTheme } from 'bumbag'

const HeaderIcon = applyTheme(Icon, {
  styles: {
    base: {
      cursor: 'pointer',
      fontSize: '1.3rem'
    }
  }
})

export default function Header ({ children }) {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <PageWithHeader header={
      <TopNav>
        <TopNav.Section marginLeft='major-1'>
          <TopNav.Item href='/'>Collector</TopNav.Item>
        </TopNav.Section>
        <TopNav.Section marginRight='major-4'>
        <TopNav.Item>
          <HeaderIcon
            icon={`solid-${colorMode === 'light' ? 'moon' : 'sun'}`}
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
          />
        </TopNav.Item>

        </TopNav.Section>
      </TopNav>
    }>
      {children}
    </PageWithHeader>
  )
}
