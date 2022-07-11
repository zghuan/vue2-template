<template>
  <div class="list">
    <div class="flex-row">
      <div class="show">
        <div class="content" v-html="content"></div>
      </div>
      <div class="action">
        <!-- 模块区域 -->
        <div class="model">
        </div>
        <div class="space-around console">
          <div @click="defaultLayout" class="btn">默认</div>
          <div @click="getCode" class="btn">初始化</div>
          <div @click="getCode" class="btn">导出源码</div>
        </div>
      </div>
    </div>
    <div class="code">
      <textarea v-model="sourceCode" />
      <div class="btn copy" @click="copy">复制</div>
    </div>
  </div>
</template>
<script>
import { copyContent } from '@/utils'
export default {
  name: 'listgenerator',
  data () {
    return {
      // 默认布局样式
      defaultContStyle: {
        borderRadius: '10px'
      },
      signImg: 'http://qnimg.zowoyoo.com/img/15463/1652759788804.PNG',
      infoTitle: '从化溪边汤宿 合院双床房+自助早餐 从化溪边汤宿 合院双床房+自助早餐',
      content: '', // 布局内容！
      sourceCode: '' // 源码
    }
  },
  methods: {
    // 生成一个默认布局
    defaultLayout () {
      this.content = `
        <div class="product flex-row">
          <div style="width:110px;height:110px"><img src="${this.signImg}" style="width:100%;height:100%;object-fit:cover"></div>
          <span style="flex:1;padding:0 10px">${this.infoTitle}<span>
        </div>
      `
    },
    // 生成源码
    getCode () {
      this.code = '<div>'
    },
    // 复制
    copy () {
      if (copyContent(this.sourceCode)) this.$Toast('复制成功')
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  margin: 20px 0;
  .show {
    border: 8px solid #4DC2A5 ;
    border-radius: 50px;
    width: 375px;
    height: 667px;
    overflow: auto;
    box-sizing: border-box;
    background: #f6f6f6;
    .content {
      padding: 10px;
    }
    .product {
      border-radius: 10px;
    }
  }
  .action {
    position: relative;
    flex: 1;
    margin-left: 20px;
    border: 2px solid #4DC2A5 ;
    overflow: auto;
    .console {
      width: 100%;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
  .code {
    position: relative;
    height: 200px;
    overflow: auto;
    margin-top: 20px;
    border: 2px solid #4DC2A5;
    &::-webkit-scrollbar {
      display:none
    }
    textarea {
      width: 100%;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      border: none;
      outline: none;
    }
  }
  .btn {
    cursor: pointer;
    border: 1px solid #4DC2A5;
    border-radius: 10px;
    background: #4DC2A5;
    color: #fff;
    padding:5px 10px;
  }
}
</style>
