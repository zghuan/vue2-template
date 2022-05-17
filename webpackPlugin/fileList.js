class FileListPlugin {
  constructor (options) {
    this.filename = options.filename
  }

  apply (compiler) {
    compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
      console.log('FileListPlugin 构建过程开始！"')
      // 在生成文件中，创建一个头部字符串：
      let filelist = 'In this build:\n\n'

      // 遍历所有编译过的资源文件，
      // 对于每个文件名称，都添加一行内容。

      for (const filename in compilation.assets) {
        filelist += ('- ' + filename + '\n')
      }

      // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
      compilation.assets[this.filename] = {
        source: function () {
          return filelist
        },
        size: function () {
          return filelist.length
        }
      }
    })
  }
}

module.exports = FileListPlugin
