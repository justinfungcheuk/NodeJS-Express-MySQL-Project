//1.導入 express
const express = require('express')
const app = express()

//app.use(express.static('./files'))

//1. 導入路由模塊
const router = require('./03.router')

//2. 註冊路由模塊 - 讓路由模塊能夠在 app服務器正常工作
app.use('/api', router)
/**
 * 为路由模块添加前缀 例子：'/api'
 * 类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单:
 */

//注意！app.use()函數的作用，就是來註冊全局中間件

app.listen(80, () => {
    console.log('http://127.0.0.1')
})