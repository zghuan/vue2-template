
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      // selectorBlackList: ['.van'],
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
