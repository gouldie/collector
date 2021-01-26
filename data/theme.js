import { css } from 'bumbag'
import { faSearch, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default {
  global: {
    styles: {
      base: css`
        .bb-PageWithSidebarSidebar {
          border-right: none;
        }
      `
    }
  },
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
        minHeight: '100%',
        // maxWidth: '250px',
        // overflowY: 'auto',
        '::-webkit-scrollbar': {
          display: 'none'
        }
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
