import Vue from 'vue'
import ToastComponents from './Toast.vue'
const ToastConstructor = Vue.extend(ToastComponents)
let nId = 1
const Toast = (text) => {
  const id = 'toast-' + nId++
  const ToastInstance = new ToastConstructor()
  ToastInstance.id = id
  const vm = ToastInstance.$mount()
  console.log(vm, 'vm')
  vm.text = text
  vm.value = true
  document.body.appendChild(vm.$el)
}

export default {
  install: Vue => {
    Vue.prototype.$Toast = Toast
  }
}
