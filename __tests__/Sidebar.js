// import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn()
}))

const mockRouter = {
  query: {},
  push: jest.fn()
}

useRouter.mockReturnValue(mockRouter)

describe('searchbar', () => {
  test('searchbar correctly filters', () => {
    render(<Sidebar />)

    // Bumbag renders two identical inputs, so we take the first
    const input = screen.getAllByRole('searchbox', { hidden: true })[0]

    fireEvent.change(input, { target: { value: 'fossil' } })

    expect(input.value).toBe('fossil')

    expect(screen.queryAllByText('Fossil')).not.toHaveLength(0)
    expect(screen.queryAllByText('Jungle')).toHaveLength(0)
  })

  test('menu item correctly pushes to router', () => {
    render(<Sidebar />)

    const jungleText = screen.getAllByText('Jungle')[0]

    fireEvent.click(jungleText)

    expect(mockRouter.push).toHaveBeenCalledWith('/sets/jungle')
  })
})
