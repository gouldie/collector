import { render, fireEvent, screen } from '@testing-library/react'
import Header from '../components/Header'
import { setMediaMatches } from '../testUtils'

describe('header icons', () => {
  test('theme toggle works', () => {
    setMediaMatches(true)

    render(<Header />)

    const icon = screen.getByRole('img', { name: /theme/i })

    expect(screen.queryByLabelText(/light theme/i)).toBeNull()
    expect(screen.queryByLabelText(/dark theme/i)).not.toBeNull()

    fireEvent.click(icon)

    expect(screen.queryByLabelText(/dark theme/i)).toBeNull()
    expect(screen.queryByLabelText(/light theme/i)).not.toBeNull()
  })
})

describe('header is responsive', () => {
  test('correct icons display on mobile', () => {
    setMediaMatches(false)

    render(<Header />)

    const themeIcon = screen.queryByRole('img', { name: /theme/i, hidden: true })
    const menuIcon = screen.queryByRole('img', { name: /menu/i, hidden: true })

    expect(themeIcon).toBeNull()
    expect(menuIcon).not.toBeNull()
  })

  test('correct icons display on desktop', () => {
    setMediaMatches(true)

    render(<Header />)

    const themeIcon = screen.queryByRole('img', { name: /theme/i, hidden: true })
    const menuIcon = screen.queryByRole('img', { name: /menu/i, hidden: true })

    expect(themeIcon).not.toBeNull()
    expect(menuIcon).toBeNull()
  })
})
