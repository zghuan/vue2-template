const state = {
  // 皮肤
  themeColor: localStorage.getItem('themeColor') || '#4DC2A5',
  // 语言
  language: localStorage.getItem('language') || (navigator.language || navigator.userLanguage).slice(0, 2) || 'zh',
  // header
  header: ''
}
export default state
