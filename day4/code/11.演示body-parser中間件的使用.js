// 導入 express模塊
const express = require('express')
// 創建 express 的服務實例
const app = express()

//1. 導入解析表單數據的中間件 body-parser
const parser = require('body-parser')
//2. 使用 app.use() 註冊中間件
app.use(parser.urlencoded({extended : false}))
// app.use(express.urlencoded({extended : false})) 上下兩個註冊中間件幾乎一樣
/**
 * 第三方的中间件
 * 非 Express 官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以按需下载并配置
  第三方中间件，从而提高项目的开发效率。
 *
 * 1 运行 npm install body-parser 安装中间件
 * 2 使用 require 导入中间件
 * 3 调用 app.use() 注册并使用中间件
 * 注意:Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的。
 */

app.post('/user', (req, res) => {
    //如果沒有配置任何解析表單數據的中間件，則req.body 默認等於 undefined
    console.log(req.body)
    res.send('ok')
})

//調用 app.listen方法，指定端口號並啟動 web服務器
app.listen(80, () => {
    console.log('http://127.0.0.1')
})