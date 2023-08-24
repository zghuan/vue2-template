# yorkie 使用步骤

## 注意事项

1.  yorkie 会在项目 npm install 初始化依赖时改写.git/hook 文件(通过 node runner.js 映射回 package.json 下的 gitHooks 命令)
2.  yorkie 会在 install 触发自己的 scripts.install 钩子，去重写
3.  如果失效，删除 node_module 重新 npm install，可能存在没有重写成功的情况

## 操作步骤

1. git init 初始化仓库
2. package.json 添加

```
"gitHooks": {
  "pre-commit": "npm version patch",
}
```

3. 依赖 npm i yorkie --save-dev

4. 之后就能直接使用了
