import { PageWithHeader, TopNav, Image, Button } from 'bumbag'

export default function Header ({ children }) {
  return (
    <PageWithHeader header={
      <TopNav>
        <TopNav.Section>
          <TopNav.Item href='https://bumbag.style' fontWeight='semibold'>
            <Image src='https://bumbag.style/logo-dark.png' height='44px' />
          </TopNav.Item>
          <TopNav.Item href='#'>Get started</TopNav.Item>
          <TopNav.Item href='#'>Components</TopNav.Item>
        </TopNav.Section>
        <TopNav.Section marginRight='major-2'>
          <TopNav.Item>
            <Button variant='ghost' palette='primary'>Sign up</Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette='primary'>Login</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    }>
      {children}
    </PageWithHeader>
  )
}
