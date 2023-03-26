// 手写一个babel， 移除代码里的debugger，并把debugger那行改成console.log('debugger')
module.exports = ({ types: t }) => {
  return {
    visitor: {
      DebuggerStatement (path) {
        // path.remove()
        if (t.debuggerStatement()) {
          path.replaceWithSourceString('console.log(\'debugger\')')
        }
      }
    }
  }
}
