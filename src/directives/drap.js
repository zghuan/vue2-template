export default {
  inserted: (el, binding) => {
    el.style.position = 'absolute'
    el.ontouchstart = function (e) {
      const l = e.touches[0].clientX - el.offsetLeft
      const t = e.touches[0].clientY - el.offsetTop
      const w = document.body.clientWidth // 视口宽
      const h = document.documentElement.clientHeight // 视口高
      const ew = el.offsetWidth // 元素宽
      const eh = el.offsetHeight // 元素高
      const nh = 50 // 底部导航栏高
      el.ontouchmove = function (e) {
        e.preventDefault()
        el.style.left = e.touches[0].clientX - l < 0 ? 0 : e.touches[0].clientX - l + 'px'
        el.style.top = e.touches[0].clientY - t < 0 ? 0 : e.touches[0].clientY - t + 'px'
        if (e.touches[0].clientX - l > w - ew) {
          el.style.left = w - ew + 'px'
        }
        if (e.touches[0].clientY - l > h - eh - nh) {
          el.style.top = h - eh - nh + 'px'
        }
      }
      el.ontouchend = function () {
        el.onmousemove = null
        el.onmouseup = null
      }
    }
  }
}
