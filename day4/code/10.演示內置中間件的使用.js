// 導入 express模塊
const express = require('express')
// 創建 express 的服務實例
const app = express()

//注意：除了錯誤級別的中間件，其他的中間件，必須在路由之前進行配置
//通過 express.json() 這個中間件，解析表單中的 JSON格式 的數據
app.use(express.json())
//通過 express.urlencoded() 這個中間件，來解析 表單中的 url-encoded格式 的數據
app.use(express.urlencoded({extended : false})) // 裡面傳一個配對象 {extended : false}
/**
 * 從客戶端Postman請求服務器，提交一個請求體的數據，而提交的是 x-www-form-urlencoded格式 這種數據，
 * 在服務器端，我們必須要通過 express.urlencoded({extended : false})，這個中間件來進行解析，
 * 解析完畢後，數據會被掛載到 req.body
 */

app.post('/user', (req, res) => {
    // 在服務器，可以使用 req.body 這個屬性，來接收客戶端發送過來的請求體數據
    // 默認情況下，如果不配置解析表單數據的中間件，則 req.body 默認等於 undefined
    console.log(req.body)
    res.send('ok')
})

app.post('/book', (req, res) => {
    //在服務器端，可以通過 req.body 來獲取 JSON格式 的表單數據和 url-encoded格式 的數據
    console.log(req.body)
    res.send('ok')
}) 

//調用 app.listen方法，指定端口號並啟動 web服務器
app.listen(80, function() {
    console.log('http://127.0.0.1')
})

/**
 * 在 postman裡面，
 * 可以通過 POST方法，請求URL地址，通過 body方式，發送一個請求體的數據，而且要用 JSON格式的請求體數據
 */


