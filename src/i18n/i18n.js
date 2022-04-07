export default class I18n {
  constructor (options = {}) {
    this.options = options || {
      locale: 'zh',
      messages: {}
    }
  }

  $t (str, params) {
    if (str) {
      let splitStr = ''
      if (str.indexOf('.') > -1) {
        const arr = str.split('.')
        let obj = { ...this.options.messages[this.options.locale] }
        arr.forEach(e => {
          obj = obj[e]
        })
        splitStr = obj
      } else {
        splitStr = this.options.messages[this.options.locale][str]
      }
      if (!splitStr) return str
      if (splitStr && Object.prototype.toString.call(splitStr) === '[object Object]') {
        console.error(`Should be for sure -> origin ${JSON.stringify(splitStr)}`)
      }
      if (!params) return splitStr
      let res = ''
      // splitStr = splitStr.replace(/\s/ig, '')
      for (const [k, v] of Object.entries(params)) {
        const reg = new RegExp(`{${k}}`, 'g')
        res = res !== '' ? res.replace(splitStr.match(reg), v) : splitStr.replace(splitStr.match(reg), v)
      }
      return res
    } else {
      console.error('$t function parameter is not exist')
    }
  }
}
