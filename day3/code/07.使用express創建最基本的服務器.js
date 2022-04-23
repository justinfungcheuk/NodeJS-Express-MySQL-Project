//1. 導入 express
const express = require('express')

//2. 創建 web 服務器
const app = express() // 返回值是服務器的實例

//4. 監聽客戶端的 GET 和 POST 請求，並向客戶端響應具體的內容
app.get('/user', (req, res) => {
    //調用 express 提供的 res.send()方法，向客戶端響應一個 JSON對象
    res.send({name: 'zs', age: 20, gender:'男'})
})

app.post('/user', (req, res) => {
    //調用 express 提供的 res.send()方法，向客戶端響應一個 文本字符串
    res.send('請求成功')
})

app.get('/', (req, res) => {
    /* 通過 req.query對象， 可以獲取客戶端通過 查詢字符串 的形式，發送發喔服務器的參數：
     * 注意！默認情況下，req.query 是一個空對象
     * 客戶端使用 ?name=zs&age=20 這種 查詢字符串 形式，發送到服務器的參數
     * 可以通過 req.query對象 訪問到，例如：
     * req.query.name   req.query.age
     * 
     */
    console.log(req.query)
    res.send(req.query)
})

//注意！這裡的 :id 是一個動態的參數
app.get('/user/:id/:username', (req, res) => { // : 冒號是固定的寫法，但是，後面的 id 字符串可以是任意的名稱，只要合理合法就可以
    /* 參數對應的值，是由客戶端填寫 URL 的時候所填寫的，填寫什麼就匹配相應的值
    例子：
     * GET請求的 URL是 - http://127.0.0.1/user/3/zs
     * 獲取到的屬性和值如下：
     * {
    "id": "3",
    "username": "zs"}
     * 
     * 
     * 獲取 URL 中的動態參數
     * 通過 req.params對象，可以訪問到 URL 中，通過 : 匹配到的 動態參數
     * URL 地址中，可以通過 :參數名 的形式, 匹配動態參數值
     * req.params 是動態匹配到的 URL 參數，默認也是一個空對象
     * 裡面存放著通過 : 動態匹配到的參數值 
     * 
     */
    console.log(req.params)
    res.send(req.params)
})

//3. 啟動 web 服務器 - 調用 app.listen(端口號，啟動成功後的回調函數)
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})