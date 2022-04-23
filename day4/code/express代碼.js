// 導入 express模塊
const express = require('express')
// 創建 express 的服務實例
const app = express()


//調用 app.listen方法，指定端口號並啟動 web服務器
app.listen(80, () => {
    console.log('http://127.0.0.1')
})