// 手写封装promise
// new PromiseAlwa((resolve, refect) => {
//  resolve(123)
// }).then(res => {
//   console.log(res)
// }),catch(err => {
//   console.log(err)
// })
export class PromiseAlwa {
  constructor (executor) {
    this.status = 'pending'
    this.successValue = ''
    this.failValue = ''
    this.callBackSuccess = []
    this.callBackFail = []
    this.res = undefined
    this.resolve = (val) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.successValue = val
        this.callBackSuccess.forEach((fn) => {
          this.res = fn(this.res || this.successValue)
        })
      }
    }
    this.reject = (val) => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.failValue = val
        this.callBackFail.forEach(fn => {
          fn(this.failValue)
        })
      }
    }
    executor(this.resolve, this.reject)
  }

  then (success) {
    // 同步
    if (this.status === 'fulfilled') {
      this.res = success(this.res || this.successValue)
    }
    // 异步
    if (this.status === 'pending') {
      this.callBackSuccess.push(success)
    }
    return this
  }

  catch (fail) {
    if (this.status === 'rejected') {
      fail(this.failValue)
    }
    // 异步
    if (this.status === 'pending') {
      this.callBackFail.push(fail)
    }
  }
}
