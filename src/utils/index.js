import store from '@/store'

/**
 * 解析时间日期函数
 * @param {object} time // 时间戳或时间字符串
 * @param {string} cFormat // 格式化
 */
export function parseTime (time, cFormat) {
  time = time || new Date()
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })

  return timeStr
}

/**
 * 解决js计算精度问题 f:计算的价格 如: CalculationPrice(0.1+0.2)
 */
export function CalculationPrice (f) {
  const num = Math.round(f * 100)
  return num / 100
}

/**
 * 自定义样式打印
 * @param {object} options
 * @param {string} options.tit 打印标题
 * @param {string} options.cont 要打印的内容
 * @param {string?} options.bgColor 内容的背景颜色
 */
export function customizeConsole (options) {
  const settings = [
    `%c ${options.tit} %c ${options.cont} `,
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060;',
    `padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ${options.bgColor || store.state.themeColor};`
  ]
  console.info.apply(console.info, settings)
}
