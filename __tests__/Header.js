import { render, fireEvent, screen } from '@testing-library/react'
import Header from '../components/Header'
import { Provider as BumbagProvider } from 'bumbag'
import theme from '../data/theme'

describe.only('header', () => {
  test('theme toggle works', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true,
          addListener: jest.fn(),
          removeListener: jest.fn()
        }
      })
    })

    render(
      <BumbagProvider theme={theme}>
        <Header />
      </BumbagProvider>
    )

    const icon = screen.getByRole('img', { name: /theme/i })

    expect(screen.queryByLabelText(/light theme/i)).toBeNull()
    expect(screen.queryByLabelText(/dark theme/i)).not.toBeNull()

    fireEvent.click(icon)

    expect(screen.queryByLabelText(/dark theme/i)).toBeNull()
    expect(screen.queryByLabelText(/light theme/i)).not.toBeNull()
  })
})
