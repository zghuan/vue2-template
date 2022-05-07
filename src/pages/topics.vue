<template>
  <div class="topics">
    <p>观察者模式测试：</p>
    <div>女生发圈：<input v-model="msg" />
      <button @click="publish">发布</button>
    </div>
    <observer />
  </div>
</template>
<script>
import { subject } from '../interview/observer'
import observer from './observer'
export default {
  name: 'Home',
  components: {
    observer
  },
  data () {
    return {
      msg: '',
      subject: ''
    }
  },
  created () {
    // 实例化主题
    this.subject = subject
  },
  methods: {
    // 女神发表朋友圈
    publish () {
      this.subject.notify(this.msg)
    }
  }
}
</script>
<style lang="less" scoped>
.topics {
  padding: 20px;
}
</style>
