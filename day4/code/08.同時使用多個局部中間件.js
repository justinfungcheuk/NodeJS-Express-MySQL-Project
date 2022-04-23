//導入 express模塊
const express = require('express')
//創建 express 的服務器實例
const app = express()

//1. 定義中間件函數
const mw1 = (req, res, next) => {
    console.log('調用了局部生效的第一個中間件')
    next()
}

const mw2 = (req, res, next) => {
    console.log('調用了局部生效的第二個中間件')
    next()
}

//2. 創建路由
/**
 * 局部生效的中间件
 * 不使用 app.use() 定义的中间件，叫做局部生效的中间件，示例代码如下:
 */
// mw1 這個中間件只在 ‘當前路由中生效’，這種用法屬於 “局部生效的中間件”
app.get('/', [mw1, mw2], (req, res) => {
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

/**
 * 了解中间件的5个使用注意事项
 * 1 一定要在路由之前注册中间件
2 客户端发送过来的请求，可以连续调用多个中间件进行处理
3 执行完中间件的业务代码之后，不要忘记调用 next() 函数
4 为了防止代码逻辑混乱，调用 next() 函数后不要再写额外的代码 
5 连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象
 */