import store from '../store'
window.onload = () => {
  const style = window.sessionStorage.getItem('style')
  if (style) {
    document.body.style.setProperty('--themeColor', style)
  } else {
    document.body.style.setProperty('--themeColor', store.state.themeColor)
  }
}
