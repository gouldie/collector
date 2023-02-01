import Head from 'next/head'
import Container from 'components/Container'
import SidebarWithHeader from 'components/SidebarWithHeader'
import Chakra from './Chakra'
import { useMediaQuery } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  const [isDesktop] = useMediaQuery('(min-width: 1000px)')

  return (
    <>
      <Head>
        <title>Collector</title>
      </Head>

      <Chakra cookies={pageProps.cookies}>
        <SidebarWithHeader>
          <Container {...pageProps}>
            <Component isDesktop={isDesktop} />
          </Container>
        </SidebarWithHeader>
      </Chakra>
    </>
  )
}
