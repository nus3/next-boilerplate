const postcssConfig = require('../postcss.config')
const usePlugins = {}

// NOTE: Using Next.js postcss config
// Convert a plugins format for postcss-loader.
postcssConfig.plugins.forEach((plugin) => {
  // Has options?
  if (Array.isArray(plugin) && plugin.length === 2) {
    usePlugins[plugin[0]] = plugin[1]
  } else {
    usePlugins[plugin] = {}
  }
})

module.exports = {
  plugins: usePlugins,
}
