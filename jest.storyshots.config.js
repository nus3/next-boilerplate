const baseConfig = require('./jest.config')

module.exports = {
  ...baseConfig,
  name: 'Storyshots',
  displayName: 'storyshots',
  testMatch: ['<rootDir>/test/test.storyshots.ts'],
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
  },
}
