# wap-cli

小程序 命令行
推荐使用[wepy](https://github.com/wepyjs/wepy) 和 [labrador] (https://github.com/maichong/labrador) ,这两个库已经封装得非常优雅了！

## 作用：
新建小程序demo

## 微信开发者工具
项目初始化后使IDE打开项目根目录。  
安装完依赖后使用 `npm run dev` ，然后打开`微信web开发者工具`新建项目，本地开发目录选择 `dist`目标目录。
请**务必**先进行 `npm run dev` 命令后再打开`微信开发者工具`。

## 开发流程
1. 使用 `npm install wap-cli -g` 全局安装 `wap命令行工具`
1. `wap create` 创建项目
2. `npm install` 或 `yarn install` 安装依赖
3. `npm run dev` 进入开发模式
4. 使用IDE 打开代码，使用`微信开发者工具` 打开`dist` 目录，查看效果
  - `微信开发者工具` 的 `设置` - `编辑器` 勾选`文件保存时自动编译小程序`，可实现自动刷新。**注意：**其它选项请**不要**勾选！！！
5. 开发完成，使用`npm run build` 进行打包  
 - `npm run build` 与 `npm run dev` 的区别在于，`build` 命令会压缩代码量
