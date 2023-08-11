## 预渲染注意事项

### 1. 去掉全局变量，不然会报错

### 2. 根目录增加.npmrc 文件，不然依赖不到@dreysolano/prerender-spa-plugin

# 预渲染步骤

## 1. 安装依赖

```js
yarn add @dreysolano/prerender-spa-plugin --dev
```

## 2. vue.config.js 创建 prerender 插件

```js
const path = require("path");
const PrerenderSPAPlugin = require("PrerenderSPAPlugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
configureWebpack: {
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, "dist"),
      routes: ["/", "/about"], // 你需要预渲染的路由
      renderer: new Renderer({
        inject: {
          _m: "prerender",
        },
        // 渲染时显示浏览器窗口，调试时有用
        headless: false,
        // 等待触发目标时间后，开始预渲染
        renderAfterDocumentEvent: "render-event",
      }),
    }),
  ];
}
```

## 3. main.js mounted 调用自定义事件

```js
new Vue({
  mounted() {
    // 触发 renderAfterDocumentEvent
    document.dispatchEvent(new Event("render-event"));
  },
}).$mount("#app");
```
