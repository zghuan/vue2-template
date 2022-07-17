// 一个简单的loader实例，md转成console打印出来
const { marked } = require('marked')
module.exports = function (source) {
  const html = marked(source).replace(/[\r\n]/g, '')
  const str = html.match(/(?<=>).\S*?(?=<)/gm)
  let res = ''
  str.forEach(item => {
    res += `console.info.apply(console.info, [
      '%c ${item} ',
      'padding: 1px; border-radius: 3px; color: #fff; background: orange'
    ])\n`
  })
  return this.callback(null, res)
}
