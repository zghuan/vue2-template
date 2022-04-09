const state = {
  // 皮肤
  themeColor: sessionStorage.getItem('themeColor') || '#4DC2A5',
  // 语言
  lang: sessionStorage.getItem('lang') || (navigator.language || navigator.userLanguage).slice(0, 2) || 'zh'
}
export default state
