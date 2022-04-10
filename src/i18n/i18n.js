import store from '../store'
export default class I18n {
  constructor (options = {}) {
    this.options = options
  }

  $t (str, params) {
    if (str) {
      let splitStr = ''
      if (str.indexOf('.') > -1) {
        const arr = str.split('.')
        let obj = { ...this.options.messages[store.state.lang] }
        arr.forEach(e => {
          obj = obj[e]
        })
        splitStr = obj
      } else {
        splitStr = this.options.messages[store.state.lang][str]
      }
      if (!splitStr) return str
      if (splitStr && Object.prototype.toString.call(splitStr) === '[object Object]') {
        console.error(`Should be for sure -> origin ${JSON.stringify(splitStr)}`)
      }
      if (!params) return splitStr
      let res = ''
      const matchArr = splitStr.match(/\{.*?\}/g)
      matchArr.forEach((e) => {
        const reg = new RegExp(`${e}`, 'g')
        splitStr = splitStr.replace(reg, e.replace(/\s/g, ''))
      })
      for (const [k, v] of Object.entries(params)) {
        const reg = new RegExp(`{${k}}`, 'g')
        res = res !== '' ? res.replace(reg, v) : splitStr.replace(reg, v)
      }
      return res
    } else {
      console.error('$t function parameter is not exist')
    }
  }
}
