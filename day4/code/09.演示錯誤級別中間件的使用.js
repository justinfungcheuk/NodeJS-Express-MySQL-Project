/**
 * 中间件的分类
 * 为了方便大家理解和记忆中间件的使用，Express 官方把常见的中间件用法，分成了 5 大类，分别是:
1 应用级别的中间件
- 通过 app.use() 或 app.get() 或 app.post() ，绑定到 app 实例上的中间件，叫做应用级别的中间件

2 路由级别的中间件
- 绑定到 express.Router() 实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。
只不过，应用级别中间件是绑定到 app 实例上，路由级别中间件绑定到 router 实例上

3 错误级别的中间件
- 错误级别中间件的作用:专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
- 格式:错误级别中间件的 function 处理函数中，必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)。
！！注意:错误级别的中间件， 必须注册在所有路由之后!
- 错误级别中间件的 function 处理函数中，必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)。

4 Express 内置的中间件 5 第三方的中间件
自 Express 4.16.0 版本开始，Express 内置了 3 个常用的中间件，极大的提高了 Express 项目的开发效率和体验:
- 1 express.static 快速托管静态资源的内置中间件，例如: HTML 文件、图片、CSS 样式等(无兼容性)
- 2 express.json 解析 JSON 格式的请求体数据(有兼容性，仅在 4.16.0+ 版本中可用)
- 3 express.urlencoded 解析 URL-encoded 格式的请求体数据(有兼容性，仅在 4.16.0+ 版本中可用)
 */


//導入 express模塊
const express = require('express')
//創建 express 的服務器實例
const app = express()

//1. 定義路由
app.get('/', (req, res) => { //路由
    //1.1 人為的製造錯誤
    throw new Error('服務器內部發生了錯誤!') //拋出一個自定義的錯誤
    res.send('Home page')
})

//2. 定義錯誤級別的中間件，捕獲整個項目的異常錯誤，從而防止程序的崩潰
app.use(function (err, req, res, next){     //2. 錯誤級別的中間件
    console.log('發生了錯誤:' + err.message) //2.1 在服務器打印錯誤信息
    res.send('Error!' + err.message)        //2.2 向客戶端響應錯誤相關的內容
})

//調用 app.listen方法，指定端口號並啟動 web服務器
app.listen(80, function() {
    console.log('Express server running at http://127.0.0.1')
})