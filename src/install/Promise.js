/**
 * 重写promise
 * @param {function} executor
 * @param {function} executor.resolve 成功执行
 * @param {function} executor.reject 失败执行
 * @example
 * new Promise((resolve, reject) => {
 * console.log(1)
 * }).then(res => {
 * console.log(res)
 * }, err => {})
*/
export default class MyPromise {
  constructor (executor) {
    this.status = 'pending' // pending fulfilled rejected
    this.successVal = '' // 成功的值
    this.failReason = '' // 失败的原因
    this.successfunArr = []
    this.errorfunArr = []
    this.thenValue = '' // 执行then函数里的返回值
    const resolve = (res) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.successVal = res
        this.successfunArr && this.successfunArr.forEach(fn => {
          this.thenValue = fn(this.thenValue || this.successVal)
          // 一直then链式调用的话，当前then没有返回值，则复制为undefined跟原生promise一样
          this.successVal = undefined
        })
      }
    }
    const reject = (res) => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.failReason = res
        this.errorfunArr && this.errorfunArr.forEach(fn => fn(this.failReason))
      }
    }
    executor(resolve, reject)
  }

  then (resolve, reject) {
    // 异步
    if (this.status === 'pending') {
      this.successfunArr.push(resolve)
      typeof reject === 'function' && this.errorfunArr.push(reject)
    }
    if (this.status === 'fulfilled') {
      // 可能存在返回值，收录一下
      this.thenValue = resolve(this.thenValue || this.successVal)
      // 执行完清空，因为下一个then如果没返回值，就得展示undefined
      this.successVal = undefined
    }
    if (this.status === 'rejected') {
      // 第二个参数可能不传，此处判断是否是函数再调用
      typeof reject === 'function' && reject(this.failReason)
    }
    // 返回给catch调用
    return this
  }

  catch (reject) {
    // catch异步
    if (this.status === 'pending') {
      this.errorfunArr.push(reject)
    }
    // 兼容then里第二参数执行err=>void
    if (this.status === 'rejected') {
      reject(this.failReason)
    }
  }
}

// 静态方法 Promise.resolve(arg) 返回的是一个promise
MyPromise.resolve = (params) => {
  return new MyPromise((resolve) => {
    resolve(params)
  })
}
MyPromise.reject = (params) => {
  return new MyPromise((resolve, reject) => {
    reject(params)
  })
}
