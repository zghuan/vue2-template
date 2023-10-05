const CONFIG = {
  "name": "全局配置文件",
  "apiUrl": "https://zghuan.cc/api", // 接口
  "zuiCdn": {
    "js": "https://zghuan.cc/zui/lib/z-ui.js",
    "css": "https://zghuan.cc/zui/lib/index.css"
  }
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = CONFIG
}

