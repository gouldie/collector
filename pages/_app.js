import NextApp from 'next/app'
import { Provider as BumbagProvider } from 'bumbag'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const theme = {
  Icon: {
    iconSets: [
      {
        icons: [faSearch],
        prefix: 'solid-',
        type: 'font-awesome'
      }
    ]
  },
  SideNav: {
    Level: {
      Title: {
        styles: {
          base: {
            padding: '0 1.25rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'gray400'
          }
        }
      }
    },
    Item: {
      styles: {
        base: {
          padding: '0 1.25rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          minHeight: '1.97rem'
        }
      }
    }
  }
}

export default class App extends NextApp {
  render () {
    const { Component, pageProps } = this.props

    return (
      <BumbagProvider isSSR theme={theme}>
        <Header>
          <Sidebar>
            <Component {...pageProps} />
          </Sidebar>
        </Header>
      </BumbagProvider>
    )
  }
}
