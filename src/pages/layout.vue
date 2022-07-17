<template>
  <div class="grid">
    <div class="space-around flex-align fixed-0">
      <span v-anchor="'grid1'">常见宫格</span>
      <span v-anchor="'grid2'">特殊布局</span>
      <span v-anchor="'grid3'">自动布局</span>
      <span v-anchor="'grid4'">瀑布流</span>
    </div>
    <!-- 常见宫格 -->
    <div class="grid1" v-loading="loading">
      <template v-for="item in n">
        <div class="item1 flex-align flex-center" :key="item">{{item}}</div>
      </template>
    </div>
    <div class="functional">
      <button @click="loading = !loading">自定义loading</button>
      <button @click="openToast('alwa')">js调用toast</button>
    </div>
    <!-- 特殊布局 -->
    <div class="grid2" >
      <template v-for="item in n2">
        <div class="item2 flex-align flex-center" :class="'area' + item" :key="item">{{item}}</div>
      </template>
    </div>

    <!-- 自动布局算法 -->
    <div class="grid3">
      <template v-for="item in n">
        <div
        class="item3 flex-align flex-center"
        :style="{
          'grid-column-start': `span ${item % 3 === 0 ? 2 : 1}`
        }"
        :key="item">{{item}}</div>
      </template>
    </div>
    <!-- 瀑布流 -->
    <div class="grid4">
      <template v-for="item in list">
        <div
        class="item4 flex-align flex-center"
        :style="{
          'height': randomWidth(50, 300)
        }"
        :key="item">{{item}}</div>
      </template>
    </div>
  </div>
</template>
<script>
import { throttle, debounce } from '@/utils'
export default {
  name: 'Grid',
  data () {
    return {
      debounce,
      loading: false,
      n: 8,
      n2: 6,
      list: [...(new Array(10)).keys()]
    }
  },
  mounted () {
    // 节流测试
    window.addEventListener('scroll', throttle((e) => {
      console.log(e)
      this.scrollBottom()
    }, 500))
  },
  methods: {
    // 防抖测试
    openToast: debounce(function (e) {
      console.log(e)
      this.$Toast('加载呀~')
    }, 500),
    scrollBottom () {
      console.log('scroll')
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (Math.ceil(scrollTop + windowHeight) >= scrollHeight - 100) {
        this.loadMore()
      }
    },
    loadMore () {
      if (this.list.length < 20) {
        this.list.push(...(new Array(10)).keys())
      }
    },
    // 随机值
    randomWidth (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min) + 'px'
    }
  }
}
</script>
<style lang="less" scoped>
  .grid {
    padding: 10px 0;
  }
  .grid1 {
    display: grid;
    margin: 50px 20px 20px 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    .item1 {
      width: 100%;
      height: 100px;
      color: #fff;
      background: var(--themeColor);
    }
  }
  .grid2 {
    display: grid;
    margin: 50px 20px 20px 20px;
    color: #fff;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;
    grid-template-areas:
      "area1 area2 area2"
      "area3 area2 area2"
      "area3 area4 area5"
      "area3 area4 area6";
    .item2 {
      background: var(--themeColor);
    }
    .area1 {
      height: 100px;
      grid-area: area1
    }
    .area2 {
      height: 220px;
      grid-area: area2
    }
    .area3 {
      height: 340px;
      grid-area: area3
    }
    .area4 {
      height: 220px;
      grid-area: area4
    }
    .area5 {
      height: 100px;
      grid-area: area5
    }
    .area6 {
      height: 100px;
      grid-area: area6
    }
  }
  .grid3 {
    margin: 50px 20px 20px 20px;
    color: #fff;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-flow: row dense;
    .item3 {
      height: 100px;
      background: var(--themeColor);
    }
  }
  .grid4 {
    color: #fff;
    margin: 50px 20px 20px 20px;
    column-count: 2;
    column-gap: 20px;
    column-span: 2;
    .item4 {
      break-inside: avoid;
      border-radius: 10px;
      margin-bottom: 20px;
      background: var(--themeColor);
    }
  }
  .functional {
    margin: 0 20px;
    button + button {
      margin-left: 10px;
    }
  }
</style>
