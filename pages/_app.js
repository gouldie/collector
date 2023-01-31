import NextApp from 'next/app'
import Head from 'next/head'
import Container from 'components/Container'
import SidebarWithHeader from 'components/SidebarWithHeader'
import Chakra from './Chakra'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Collector</title>
        </Head>

        <Chakra cookies={pageProps.cookies}>
          <SidebarWithHeader>
            <Container {...pageProps}>
              <Component />
            </Container>
          </SidebarWithHeader>
        </Chakra>
      </>
    )
  }
}
