// 導入 express模塊
const express = require('express')
// 創建 express 的服務實例
const app = express()
//導入 Node.js 內置的 querystring模塊
const qs = require('querystring')

//1. 導入自己封裝的中間件模塊
const customBodyParser = require('./14.custom-body-parser') 
//2. 將自定義的中間件函數，註冊為全局可用的中間件
app.use(customBodyParser) //通過 app.use函數註冊自定義的中間件模塊，就可以解析表單的數據

/**
 * 监听 req 的 end 事件
 * 当请求体数据接收完毕之后，会自动触发 req 的 end 事件。
 * 因此，我们可以在 req 的 end 事件中，拿到并处理完整的请求体数据
 */
app.post('/user', (req, res) => {
    res.send(req.body)
})

//調用 app.listen方法，指定端口號並啟動 web服務器
app.listen(80, () => {
    console.log('http://127.0.0.1')
})