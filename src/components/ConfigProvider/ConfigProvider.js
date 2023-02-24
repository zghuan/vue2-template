export default {
  name: 'config-provider',
  abstract: true,
  props: ['name'],
  created () {
  },
  render (h) {
    console.log(this.name, 111)
    const slot = this.$slots.default
    return h('div', {
    }, slot || slot[0])
  }
}
