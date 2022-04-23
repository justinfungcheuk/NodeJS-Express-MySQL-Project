const express = require('express')
const app = express()


// 定義全局中間件的簡化形式
app.use((req, res, next) => {
    /**
     * 中间件的作用
     * 多个中间件之间，共享同一份 req 和 res。基于这样的特性，我们可以在上游的中间件中，统一为 req 或 res 对象添
  加自定义的属性或方法，供下游的中间件或路由进行使用。
     */
    //獲取到請求到達服務器的時間
    const time = Date.now()
    //為 req對象，掛載自定義屬性，從而把時間共享給後面的所有路由
    req.startTime = time
    next()
})

app.get('/', (req, res) => {
    
    res.send('Home page' + req.startTime)
})

app.get('/user', (req, res) => {
    
    res.send('User page' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})