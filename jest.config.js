module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: [
    "<rootDir>/src/__test__/setupTest.js"
  ],
  moduleNameMapper: {
    "\\.(styl|css|scss|sass|less)$": "<rootDir>/src/__mocks__/styleTest.js"
  },
  testEnvironment: 'jsdom',
};
