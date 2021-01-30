export const setMediaMatches = (matches) => {
  Object.defineProperty(window, 'matchMedia', {
    value: jest.fn(() => {
      return {
        matches,
        addListener: jest.fn(),
        removeListener: jest.fn()
      }
    })
  })
}
