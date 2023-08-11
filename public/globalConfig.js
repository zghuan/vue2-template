const CONFIG = {
  "name": "全局配置文件", 
  "apiUrl": "http://8.210.225.162:3000", // 接口
  "zuiCdn": {
    "js": "http://8.210.225.162:3334/z-ui.js", 
    "css": "http://8.210.225.162:3334/index.css"
  }
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = CONFIG
}
  
