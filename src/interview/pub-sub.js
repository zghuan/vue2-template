// 手写发布订阅模式
// 定义一个事件中心
export const busCenter = {
  // 订阅的类型，订阅者
  list: {},
  // 订阅
  subscribe: function (type, fun) {
    if (!this.list[type]) this.list[type] = []
    this.list[type].push(fun)
  },
  // 发布
  publish: function (type, params) {
    this.list[type].forEach(item => {
      item(params)
    })
  }
}

// 订阅qq消息
busCenter.subscribe('qq', (msg) => {
  console.log('qq', msg)
})
// 订阅微信消息
busCenter.subscribe('wx', (msg) => {
  console.log('wx', msg)
})

// 发布qq消息
busCenter.publish('qq', '我今天很累')
busCenter.publish('wx', '我吃的很饱')
