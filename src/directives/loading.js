export default {
  bind (el, binding) {
    if (!el.style.position) el.style.position = 'relative'
    const img = document.createElement('img')
    el.createDom = () => {
      img.src = 'http://qnimg.zowoyoo.com/img/84826/1625656193727.gif'
      img.className = 'z-loading'
      img.style.width = '100%'
      img.style.height = '100%'
      img.style.position = 'absolute'
      img.style.top = '0'
      img.style.background = '#fff'
      img.style.objectFit = 'contain'
      img.style.border = '1px solid #f1f1f1'
      return img
    }
    el.removeDom = () => {
      el.removeChild(img)
    }
  },
  update (el, binding) {
    if (binding.oldValue !== binding.value) {
      if (binding.value) {
        el.appendChild(el.createDom())
      } else {
        el.removeDom()
      }
    }
  }
}
