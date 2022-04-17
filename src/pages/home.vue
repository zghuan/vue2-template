<template>
  <div>{{CONFIG.zgh}}</div>
</template>
<script>
import MyPromise from '../install/Promise'
export default {
  name: 'Home',
  data () {
    return {
      CONFIG
    }
  },
  created () {
    // this.promise1() // 测试1 -> 成功
    // this.promise2() // 测试2 -> 成功
    this.promise3() // 测试3
  },
  methods: {
    promise3 () {
      const p = new MyPromise((resolve, reject) => {
        // setTimeout(() => {
        //   resolve(1)
        // }, 1000)
        resolve(1)
      })
      p.then(res => {
        return MyPromise.resolve(1)
      }).then(res => {
        res.then(r => {
          console.log(r, 'then1')
        })
      })
    },
    promise2 () {
      const p = new MyPromise((resolve, reject) => {
        // setTimeout(() => {
        //   resolve(1)
        // }, 1000)
        resolve(1)
      })
      p.then(res => {
        console.log(res, 'success')
        return 'alwa1'
      }).then(res => {
        console.log(res, 'then')
        return 'alwa2'
      })
    },
    promise1 () {
      new MyPromise((resolve, reject) => {
        setTimeout(() => {
          resolve(1)
        }, 1000)
        // resolve(1)
      }).then(res => {
        console.log(res, 'success')
        return 'alwa1'
      }, err => {
        console.log(err, 'fail')
      }).then(res => {
        console.log(res, 'then')
        return 'alwa2'
      }).then(res => {
        console.log(res, 'then2')
      })
    }
  }
}
</script>
