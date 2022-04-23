const express = require('express')
const router = express.Router()

//在這裏掛載對應的路由
//在發送請求的時候，URL地址不是 /get 而是在 /get 之前一定要拼接一個前綴 /api
router.get('/get', (req, res) => {
    //通過 req.query 獲取客戶端通過查詢字符串，發送到服務器的數據
    const query = req.query
    //調用 res.send()方法，向客戶端響應處理的結果
    res.send({
        status: 0, // 0 表示處理成功，1 表示處理失敗
        msg: 'GET 請求成功', //狀態的描述
        //需要響應給客戶端的數據
        data: query // 客戶端向我們提交了什麼數據，就會把提交的數據響應回去
    })
})

//定義 POST 接口
router.post('/post', (req, res) => {
    // 通過 req.body 獲取請求體中包含的 url-encoded格式 的數據
    const body = req.body

    // 調用 res.send()方法，向客戶端響應結果
    res.send({
        status: 0,
        msg: 'POST 請求成功',
        data: body
    })
})

//定義 DELETE 接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE請求成功'
    })
})

module.exports = router

