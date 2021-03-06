// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

import '@testing-library/jest-dom/extend-expect'

// set the default matchMedia. this can be edited with 'setMediaMatches' in testUtils.js
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {}
  }
}
