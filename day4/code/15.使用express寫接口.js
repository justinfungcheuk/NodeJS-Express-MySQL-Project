// 導入 express模塊
const express = require('express')
// 創建 express 的服務實例
const app = express()

//配置解析表單數據的中間件
app.use(express.urlencoded({extended : false}))

/**
 * 创建 JSONP 接口的注意事项
 * 如果项目中已经配置了 CORS 跨域资源共享，为了防止冲突，必须在配置 CORS 中间件之前声明 JSONP 的接口。
 * 否則 JSONP 接口会被处理成开启了 CORS 的接口。
 */
//必須在配置 cors中間件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => { // jsonp的路由並沒有放到 路由模塊的 app.use('/api', router)做一個統一的註冊，所以我們在這裡也要加上 /api 前綴
    //TODO: 定義 JSONP 接口具體的實現過程
    //1. 得到函數的名稱

    const funcName = req.query.callback // 代表客戶端在請求該接口 '/api/jsonp'時，需要提供一個查詢字符串，裡面包含 callback屬性，它的值就是函數的名稱
    //2. 定義要發送到客戶端的數據對象
    const data = {name: 'zs', age: 22}

    //3. 拼接出一個函數的調用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    /**
     *
 * 實現 JSONP 接口的具體代碼：
例子：const scriptStr = `${funcName}(${JSON.stringify(data)})` 
 * 在有了 名字 和 data數據 之後，需要拼接出一個函數調用的字符串， 使用模板字符串把他們拼接起來，使用小括號 (${JSON.stringify(data)})代表要調用該函數，
 * 在調用期間，我們傳遞一個數據對象 ${JSON.stringify(data)}，把 data 轉成 JSON格式的字符串 JSON.stringify(data)，然後把這些字符串拼接起來就可以！
 * - 經過 JSON.stringify 的處理，就能夠把一個數據對象（這裡的數據對象例子是：const data = {name: 'zs', age: 22}）轉成一個 JSON格式的字符串。
 * 最後把拼接好的字符串，通過 scriptStr 響應給客戶端，客戶端就能夠拿到服務器給它響應回去的數據
 */
     
    //4. 把拼接的字符串，響應給客戶端
    res.send(scriptStr) // 響應完畢後，客戶端就能夠拿到通過 JSONP 發送給它的數據對象

})

//一定要在路由之前，配置 cors 這個中間件，從而解決接口跨域的問題
/**
 * 接口的跨域问题
 * 刚才编写的 GET 和 POST接口，存在一个很严重的问题:不支持跨域请求。
 * 解决接口跨域问题的方案主要有两种:
 * 1 CORS(主流的解决方案，推荐使用)
 * 2 JSONP(有缺陷的解决方案:只支持 GET 请求)
 * 
 * 使用 cors 中间件解决跨域问题
 * cors 是 Express 的一个第三方中间件。通过安装和配置 cors 中间件，可以很方便地解决跨域问题。
 * 使用步骤分为如下 3 步:
 * 1 运行 npm install cors 安装中间件
 * 2 使用 const cors = require('cors') 导入中间件
 * 3 在路由之前调用 app.use(cors()) 配置中间件
 * 
 * 什么是 CORS
 * CORS (Cross-Origin Resource Sharing，跨域资源共享)由一系列 HTTP 响应头组成,
 * 这些 HTTP 响应头决定浏览器是否阻止前端 JS 代码跨域获取资源。
 * 
 * 浏览器的同源安全策略默认会阻止网页“跨域”获取资源。
 * 但如果接口服务器配置了 CORS 相关的 HTTP 响应头， 就可以解除浏览器端的跨域访问限制。
 * 
 * CORS 的注意事项
 * 1 CORS 主要在服务器端进行配置。客户端浏览器无须做任何额外的配置，即可请求开启了 CORS 的接口。
 * 2 CORS 在浏览器中有兼容性。只有支持 XMLHttpRequest Level2 的浏览器，才能正常访问开启了 CORS 的服务端接口(例如:IE10+、Chrome4+、FireFox3.5+)。
 */
const cors = require('cors')
app.use(cors())

//導入路由模塊
const router = require('./16.apiRouter') // router 就是一個中間件
//把路由模塊，註冊到 app上
app.use('/api', router)


//調用 app.listen方法，指定端口號並啟動 web服務器
app.listen(80, () => {
    console.log('Express server running at http://127.0.0.1')
})