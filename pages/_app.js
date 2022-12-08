import NextApp from 'next/app'
import Head from 'next/head'
import { Provider as BumbagProvider } from 'bumbag'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Container from 'components/Container'
import SidebarWithHeader from 'components/SidebarWithHeader'
import theme from 'data/theme'
import { Chakra } from './Chakra'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Collector</title>
        </Head>
        <BumbagProvider isSSR theme={theme}>
          <Chakra cookies={pageProps.cookies}>
            {/* <Header>
              <Sidebar> */}
            <SidebarWithHeader>
              <Container {...pageProps}>
                <Component />
              </Container>
            </SidebarWithHeader>
            {/* </Sidebar>
            </Header> */}
          </Chakra>
        </BumbagProvider>
      </>
    )
  }
}
