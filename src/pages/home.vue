<template>
  <div>{{CONFIG.zgh}}</div>
</template>
<script>
import { PromiseAlwa } from '../plugins/promise'
export default {
  name: 'Home',
  data () {
    return {
      CONFIG
    }
  },
  created () {
    new PromiseAlwa((resolve, reject) => {
      console.log('开始执行executor')
      resolve('成功')
      // reject('失败')
      // setTimeout(() => {
      //   resolve('成功1')
      // }, 1000)
      // setTimeout(() => {
      //   reject('失败1')
      // }, 2000)
    }).then(res => {
      console.log(res, 'then1')
      return 'alwa'
    }).then(res => {
      console.log(res, 'then2')
    }).catch(err => {
      console.log(err, 'catch')
    })
  }
}
</script>
