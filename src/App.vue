<template>
  <div id="app">
    <configProvider name="alwa">
      <router-view></router-view>
    </configProvider>
  </div>
</template>

<script>
import configProvider from './components/ConfigProvider/ConfigProvider'
export default {
  name: 'App',
  components: {
    configProvider
  },
  created () {
    this.$log({
      tit: '当前版本',
      cont: window.version
    })
    this.$log({
      tit: '当前语言',
      cont: this.$store.state.lang
    })
    this.$log({
      tit: '当前主题',
      cont: this.$store.state.themeColor,
      bgColor: this.$store.state.themeColor
    })
  },
  watch: {
    $route: function (route) {
      this.$setTitle(route.name)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
  margin: auto;
}
</style>
