// 手写继承写法
// es6继承
class Parentes6 {
  constructor () {
    this.name = 'alwa-es6'
  }

  getName () {
    return this.name
  }
}
class Sones6 extends Parentes6 {
  constructor () {
    super()
    this.age = 18
  }

  getInfo () {
    return this
  }
}

// es5继承
function Parentes5 () {
  this.name = 'alwa-es5'
}

Parentes5.prototype.getMame = function () {
  return this.name
}

function Sones5 () {
  this.age = 19
}
Sones5.prototype = new Parentes5()
Sones5.prototype.getInfo = function () {
  return this
}
export {
  Sones6,
  Sones5
}
