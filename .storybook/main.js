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

    // HACK: 根本解決ではない気もする
    // NOTE: デフォルトではcss modulesは読み込まれないので読み込まれるように設定する
    // ref: https://qiita.com/s6n/items/f64b2c4be580e1fc1cb8#css-%E3%81%8C%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BE%E3%82%8C%E3%81%AA%E3%81%84%E5%95%8F%E9%A1%8C
    const cssRule = baseConfig.module.rules.find(
      (rule) => String(rule.test).indexOf('css') !== -1,
    )
    if (!cssRule) return { ...baseConfig }

    // NOTE: 対象から.module.cssファイルを外す
    cssRule.test = /^.*(?<!\.module)\.css$/
    const cssLoader = cssRule.use.find(
      (u) => String(u.loader).indexOf('css-loader') !== -1,
    )
    if (cssLoader) {
      cssLoader.options = {
        // NOTE: css-loaderを呼ぶ前に適用されるローダーの数 1だとpostcss-loaderを適用することになる
        importLoaders: 1,
      }
    }

    // NOTE: postcss-loaderはaddon-postcssのものをそのまま使う
    const postcssLoader = cssRule.use.find(
      (u) => String(u.loader).indexOf('postcss-loader') !== -1,
    )

    if (postcssLoader) {
      baseConfig.module.rules.push({
        // NOTE: .module.cssファイルのみが対象
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // NOTE: css modulesを有効にする
              modules: true,
            },
          },
          postcssLoader,
        ],
      })
    }

    return { ...baseConfig }
  },
}
