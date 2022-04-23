const express = require('express')
const app = express()

//掛載路由
//为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Post Request.')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})