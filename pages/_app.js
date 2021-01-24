import NextApp from 'next/app'
import { Provider as BumbagProvider } from 'bumbag'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { faSearch, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const theme = () => {
  return {
    Icon: {
      iconSets: [
        {
          icons: [faSearch, faMoon, faSun],
          prefix: 'solid-',
          type: 'font-awesome'
        }
      ]
    },
    SideNav: {
      modes: {
        dark: {
          styles: {
            base: {
              borderRight: '1px solid var(--bb-palette-gray700)'
            }
          }
        },
        light: {
          styles: {
            base: {
              borderRight: '1px solid var(--bb-palette-white800)'
            }
          }
        }
      },
      styles: {
        base: {
          maxWidth: '250px'
        }
      },
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
}

export default class App extends NextApp {
  render () {
    const { Component, pageProps } = this.props

    return (
      <BumbagProvider isSSR theme={theme}>
        <Header>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Component {...pageProps} />
        </div>
        </Header>
      </BumbagProvider>
    )
  }
}
