<template>
  <div class="topics">
    观察者：{{name}}
      <button @click="follow">关注</button>
      <button @click="cancel">取关</button><br>
    女神发的消息：{{msg}}
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
    },
    // 取关
    cancel () {
      this.subject.remove(this.name, this.observer)
    }
  }
}
</script>
<style lang="less" scoped>
.topics {
  padding: 20px;
}
</style>
