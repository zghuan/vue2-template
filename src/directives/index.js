/* eslint-disable */
export default ((vue) => {
  const requireJs = require.context('.', false, /\.js$/)
  requireJs.keys().forEach(keys => {
    if (keys === './index.js') return
    const directivesName = keys.replace(/^\.\//, '').replace(/\.\w+$/, '')
    const directivesFile = requireJs(keys).default
    vue.prototype[directivesName] = directivesFile
    vue.directive(directivesName, directivesFile)
  })
})(Vue)
