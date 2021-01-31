import NextApp from 'next/app'
import Head from 'next/head'
import { Provider as BumbagProvider } from 'bumbag'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Container from 'components/Container'
import theme from 'data/theme'

export default class App extends NextApp {
  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Collector</title>
        </Head>
        <BumbagProvider isSSR theme={theme}>
          <Header>
            <Sidebar>
              <Container {...pageProps}>
                <Component />
              </Container>
            </Sidebar>
          </Header>
        </BumbagProvider>
      </>
    )
  }
}
