const { transformSync } = require('@babel/core')
const testCode = `
function name() {
  console.log('alwa')
  debugger
  const a = 1
  console.log(a + 1)
}
`
/**
 * @param {String} testCode 测试的代码
 */
const res = transformSync(testCode, {
  plugins: ['./debugger-console.js']
})
console.log(res.code, '最终结果') // debugger -> console.log('debugger')
