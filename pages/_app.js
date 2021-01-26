import NextApp from 'next/app'
import { Provider as BumbagProvider } from 'bumbag'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import theme from '../data/theme'

export default class App extends NextApp {
  render () {
    const { Component, pageProps } = this.props

    return (
      <BumbagProvider isSSR theme={theme}>
        <Header>
          <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
            <Sidebar />
            <Container {...pageProps}>
              <Component />
            </Container>
          </div>
        </Header>
      </BumbagProvider>
    )
  }
}
