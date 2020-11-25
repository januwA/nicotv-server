nicotv 中转站(代理)

1. 打包 `npm run build`
2. 将`/package.json`拷贝到`/dist`文件夹去
3. 把`dist`扔服务器，安装依赖
4. 服务器运行`pm2 start main.js`，可以先用`node main.js`查看启动是否报错