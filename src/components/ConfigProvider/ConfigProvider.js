export default {
  name: 'config-provider',
  abstract: true, // 抽象组件
  props: ['name'],
  created () {
    console.log('props name:', this.name)
  },
  render (h) {
    const slot = this.$slots.default && this.$slots.default[0]
    if (slot) {
      return slot
    }
  }
}
