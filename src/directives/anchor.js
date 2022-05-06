export default {
  // 锚点指令
  inserted: (el, binding) => {
    el.onclick = function () {
      let total
      if (binding.value === 0) {
        total = 0
      } else {
        try {
          const element = document.querySelector(`.${binding.value}`) || document.getElementById(`${binding.value}`)
          total = element.offsetTop
        } catch (e) {
          console.error('找不到元素')
        }
      }
      let distance = document.documentElement.scrollTop || document.body.scrollTop
      let step = total / 10
      if (total > distance) {
        const scroll = setInterval(() => {
          if (distance < total) {
            distance += step
            document.documentElement.scrollTop = distance
            window.pageYOffset = distance
            document.body.scrollTop = distance
          } else {
            document.documentElement.scrollTop = total
            window.pageYOffset = total
            document.body.scrollTop = total
            clearInterval(scroll)
          }
        }, 1000 / 60)
      } else {
        const newTotal = distance - total
        step = newTotal / 50
        const scroll = setInterval(() => {
          if (distance < total) {
            distance -= step
            document.documentElement.scrollTop = distance
            window.pageYOffset = distance
            document.body.scrollTop = distance
          } else {
            document.documentElement.scrollTop = total
            window.pageYOffset = total
            document.body.scrollTop = total
            clearInterval(scroll)
          }
        }, 1000 / 60)
      }
    }
  }
}
