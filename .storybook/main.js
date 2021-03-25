const path = require('path')

module.exports = {
  stories: [
    '../src/components/**/**/*.stories.mdx',
    '../src/components/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (baseConfig) => {
    // NOTE: tsconfigのbaseUrlの対応
    baseConfig.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ]
    return { ...baseConfig }
  },
}
