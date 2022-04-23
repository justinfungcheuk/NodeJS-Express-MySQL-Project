//導入 express模塊
const express = require('express')
//創建 express 的服務器實例
const app = express()

//1. 定義中間件函數
const mw1 = (req, res, next) => {
    console.log('調用了局部生效的中間件')
    next()
}

//2. 創建路由
/**
 * 局部生效的中间件
 * 不使用 app.use() 定义的中间件，叫做局部生效的中间件，示例代码如下:
 */
// mw1 這個中間件只在 ‘當前路由中生效’，這種用法屬於 “局部生效的中間件”
app.get('/', mw1, (req, res) => {
    res.send('Home page')
})

// 這個中間件不會影響下面這個路由
app.get('/user', (req, res) => {
    res.send('User page')
})

//調用 app.listen方法，指定端口號並期待服務器
app.listen(80, function(){
    console.log('Express server running at http://1270.0.1')
})