// 手写观察者模式
// 发布者类
class Subject {
  constructor () {
    this.observers = [] // 订阅者列表
  }

  // 添加订阅者
  add (name, observer) {
    console.log(`${name}订阅`)
    this.observers.push(observer)
  }

  // 移除订阅者
  remove (name, observer) {
    console.log(`移除${name}`)
    const index = this.observers.findIndex(item => item === observer)
    if (index === -1) {
      console.log('不存在该订阅者')
      return
    }
    this.observers.splice(index, 1)
  }

  // 通知
  notify (msg) {
    for (const item of this.observers) {
      item.update(msg) // 与观察者原型方法update对应
    }
  }
}

// 观察者类
class Observer {
  constructor (fun) {
    this.fun = fun
  }

  // 目标对象更新时触发的回调，即收到更新通知后的回调
  update (msg) {
    this.fun(msg)
  }
}
const subject = new Subject()
export {
  subject,
  Observer
}
