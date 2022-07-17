<template>
  <div class="observer">
    （观察者）{{name}}：
    <button @click="follow">关注</button>
    <button @click="cancel">取关</button><br>
    <div style="margin:20px">
      {{name}}接受到女神发来的消息：{{msg}}
    </div>
  </div>
</template>
<script>
import { subject, Observer } from '../interview/observer'
export default {
  name: 'Home',
  data () {
    return {
      msg: '',
      name: '小明',
      observer: '',
      subject: ''
    }
  },
  created () {
    // 实例化主题
    this.subject = subject
  },
  methods: {
    // 关注
    follow () {
      // 实例化观察者
      this.observer = new Observer((res) => {
        this.msg = res
        console.log(`${this.name},你的女神发朋友圈了:${res}`)
      })
      // 添加订阅者
      this.subject.add(this.name, this.observer)
      console.log(`${this.name}关注了女神`)
    },
    // 取关
    cancel () {
      this.subject.remove(this.name, this.observer)
      console.log(`${this.name}取消了关注`)
    }
  }
}
</script>
<style lang="less" scoped>
.observer {
  padding: 20px 0;
}
</style>
