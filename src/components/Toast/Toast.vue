<template>
  <div
    class="u-toast"
    :class="[
      isShow ? 'u-show' : '',
      'u-type-default',
      'u-position-center',
    ]"
    :style="{
      zIndex: uZIndex,
    }"
  >
    <span class="u-text">{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    // z-index值
    zIndex: {
      type: [Number, String],
      default: '999'
    },
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      timer: null // 定时器
    }
  },
  computed: {
    isShow: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    uZIndex () {
      // 显示toast时候，如果用户有传递z-index值，有限使用
      return this.isShow ? this.zIndex : '999999'
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.hide()
      }, 2000)
    })
  },
  methods: {
    // 隐藏toast组件
    hide () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.u-toast {
  position: fixed;
  z-index: -1;
  transition: opacity 0.3s;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background: #585858;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  opacity: 0;
  pointer-events: none;
  padding: 9px 20px;
}

.u-toast.u-show {
  opacity: 1;
}

.u-position-center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.u-type-default {
  color: #fff;
  background-color: #585858;
}
</style>
