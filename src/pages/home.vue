<template>
  <div class="home">
    <z-nav-bar title="我是zui组件导航栏" navBarType="search"></z-nav-bar>
    <button @click="go('/layout')">布局</button>
    <button @click="go('/topics')" >观察者模式</button>
  </div>
</template>
<script>
import MyPromise from '../interview/Promise'
import { easyClone, deepClone } from '../utils'
import { Sones6, Sones5 } from '../interview/extend'
export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      show: false,
      originObj: {
        a: 1,
        b: {
          c: 3
        },
        e: [1, 2, 3],
        f: function () {
          console.log(666)
        }
      }
    }
  },
  created () {
    this.$root.name = '曾'
    // this.protoExtend() // 测试原型继承
    // this.testPromise() // 测试promise
    // this.testClone() // 测试深浅拷贝
  },
  methods: {
    go (path) {
      this.$router.push(path)
    },
    protoExtend () {
      const res = new Sones6()
      console.log(res.getInfo().name, 'es6继承')
      const res2 = new Sones5()
      console.log(res2.getInfo().name, 'es5继承')
    },
    testClone () {
      const res1 = easyClone(this.originObj)
      const res2 = deepClone(this.originObj)
      this.originObj.a = 2
      this.originObj.b.c = 4
      this.originObj.e[0] = 'zgh'
      console.log(res1, '浅拷贝')
      console.log(res2, '深拷贝')
    },
    testPromise () {
      this.promise1() // 测试1 -> 成功
      this.promise2() // 测试2 -> 成功
      this.promise3() // 测试3
    },
    promise3 () {
      const p = new MyPromise((resolve, reject) => {
        // setTimeout(() => {
        //   resolve(1)
        // }, 1000)
        resolve(1)
      })
      p.then(res => {
        return MyPromise.resolve(2)
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
<style lang="less" scoped>
  .home {
    height: 100vh;
    padding: 10px;
  }
</style>
