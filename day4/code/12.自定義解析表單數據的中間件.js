// 導入 express模塊
const express = require('express')
// 創建 express 的服務實例
const app = express()
//導入 Node.js 內置的 querystring模塊
const qs = require('querystring')

//這是解析表單數據的中間件
app.use((req, res, next) => {
    //定義中間件具體的業務邏輯
    //1. 定義一個 str字符串，專門用來儲存客戶端發送過來的請求體數據
    let str = ''
    //2. 監聽 req 的 data事件(請求體發生完畢後自動觸發)
    /**
     * 在中间件中，需要监听 req 对象的 data 事件，来获取客户端发送到服务器的数据。
     * 如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器
     * 所以 data 事件可能会触发多次，每一次触发 data 事件时，获取到数据只是完整数据的一部分，需要手动对接收到的数据进行拼接。
     */
    req.on('data', (chunk) => {
        str += chunk
    })
    //3. 監聽 req 的 end事件
    req.on('end', () => {
        // 在 str 中存放的是完整的請求體數據
        // console.log(str) // 打印完整的請求體數據
        // TODO：把字符串格式的請求體數據，解析成對象格式
    
    /**
     * 使用 querystring 模块解析请求体数据
     * Node.js 内置了一个 querystring 模块，专门用来处理查询字符串。
     * 通过这个模块提供的 parse() 函数，可以轻松把 查询字符串，解析成对象的格式。
     */
    const body = qs.parse(str) // 調用 qs.parse()方法，把查詢字符串解析為對象
    // console.log(body)
    /**
     * 将解析出来的数据对象挂载为 req.body
     * 上游的中间件和下游的中间件及路由之间，共享同一份 req 和 res。
     * 因此，我们可以将解析出来的数据，挂载为 req 的自定义属性，命名为 req.body，供下游使用。
     */
    req.body = body            // 將解析出來的請求體對象，掛載為 req.body 屬性 
    next()                     // 最後，一定要調用 next(）函數，執行後續的業務邏輯
    })
})

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