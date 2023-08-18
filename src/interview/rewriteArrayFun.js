
// eslint-disable-next-line
Array.prototype.myJoin = function (sep) {
  const seps = sep || ','
  let res = ''
  for (let i = 0, len = this.length; i < len; i++) {
    res += this[i] + (i === len - 1 ? '' : seps)
  }
  return res
}

// eslint-disable-next-line
Array.prototype.myslice = function (start, end) {
  const res = []
  start = start || 0
  end = end || this.length // this指向调用的对象
  for (let i = start; i < end; i++) {
    res.push(this[i])
  }
  return res
}

// eslint-disable-next-line
Array.prototype.myReserve = function() {
  const res = []
  let len = this.length
  while (len > 0) {
    res.push(this[len - 1])
    len--
  }
  return res
}
