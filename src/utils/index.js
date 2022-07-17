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
 * 0.1+0.2=0.3 转化二进制值计算的时候变成了循环
 * 由于js里IEEE 754进行运算尾数位只能保留n位数字，这就存在误差
 * 最后结果再->十进制丢失了精度
 */
export function CalculationPrice (f, multiple = 100) {
  const num = Math.round(f * multiple)
  return num / multiple
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

/**
 * @description 浅拷贝-只拷贝一层
 * @param {object} object 复制的源对象
 * @returns {object} 新拷贝的对象
*/
export function easyClone (originObj) {
  const newObj = {}
  for (const item in originObj) {
    newObj[item] = originObj[item]
  }
  return newObj
}
/**
 * @description 深拷贝
 * @param {object} object 复制的源对象
 * @returns {object} 新拷贝的对象
*/
export function deepClone (originObj) {
  // 如果是对象
  if (typeof originObj === 'object') {
    const newObj = Array.isArray(originObj) ? [] : {}
    for (const item in originObj) {
      newObj[item] = deepClone(originObj[item])
    }
    return newObj
  } else {
    return originObj
  }
}

// 防抖-事件被触发后，延迟n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。
export function debounce (fn, delay) {
  let timer = null
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this)
    }, delay)
  }
}

// 节流-减少一段时间内事件的触发频率
export function throttle (fn, delay) {
  let flag = true
  return function () {
    if (flag) {
      setTimeout(() => {
        fn.call(this)
        flag = true
      }, delay)
    }
    flag = false
  }
}
