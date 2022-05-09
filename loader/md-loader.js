// 一个简单的loader实例，md转成console打印出来
const { marked } = require('marked')
module.exports = function (source) {
  const html = marked(source)
  const str = html.match(/>(\S*)</)[1]
  return `module.exports = console.info.apply(console.info, [
    '%c ${str} ',
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060;'
  ])`
}
