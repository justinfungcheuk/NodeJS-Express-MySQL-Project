const express = require('express')
const app = express()

/*
//定義一個最簡單的中間件函數
//next 函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。
//Express 的中间件，本质上就是一个 function 处理函数，Express 中间件的格式如下:
const mw = function(req, res, next){ //注意:中间件函数的形参列表中，必须包含 next 参数。而路由处理函数中只包含 req 和 res。
    console.log('這是最簡單的中間件函數')
    //把流轉關係，轉角給下一個中間件或路由
    next()
}

/**
 * 全局生效的中间件
 * 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。
 * 通过调用 app.use(中间件函数)，即可定义一个全局生效的中间件，示例代码如下:
 *
//將 mw 註冊為全局生效的中間件
app.use(mw)
*/

// 定義全局中間件的簡化形式
app.use((req, res, next) => {
    console.log('這是最簡單的中間件函數')
    next()
})

app.get('/', (req, res) => {
    console.log('調用了 / 這個路由 ')
    res.send('Home page')
})

app.get('/user', (req, res) => {
    console.log('調用了 /user 這個路由 ')
    res.send('User page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})