import { PageWithHeader, TopNav, useBreakpoint } from 'bumbag'
import HamburgerIcon from '../components/icons/Hamburger'
import ColorModeIcon from '../components/icons/ColorMode'
import ClientOnly from '../utils/clientOnly'

export default function Header ({ children }) {
  const isDesktop = useBreakpoint('min-widescreen')

  return (
    <PageWithHeader sticky header={
      <TopNav>
        <TopNav.Section marginLeft='major-1'>
          <TopNav.Item href='/'>Collector</TopNav.Item>
        </TopNav.Section>
        <TopNav.Section marginRight='major-4'>
        <ClientOnly>
          <TopNav.Item>
            {isDesktop && <ColorModeIcon />}
            {!isDesktop && <HamburgerIcon />}
          </TopNav.Item>
        </ClientOnly>
        </TopNav.Section>
      </TopNav>
    }>
      {children}
    </PageWithHeader>
  )
}
