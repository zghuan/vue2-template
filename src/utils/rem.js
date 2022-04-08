// 设置 rem 函数
function setRem () {
  const baseSize = 75
  const scale = document.documentElement.clientWidth / 750 // 当前页面宽度相对于750宽的缩放比例
  // 设置根节点字体大小
  document.documentElement.style.fontSize = (scale >= 1 ? 75 : (baseSize * Math.min(scale, 2))) + 'px'
  return scale
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
