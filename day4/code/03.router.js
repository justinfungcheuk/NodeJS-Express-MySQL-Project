//這是路由模塊
/**
 * 模块化路由
为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。 将路由抽离为单独模块的步骤如下:
1 创建路由模块对应的 .js 文件
2 调用 express.Router() 函数创建路由对象
3 向路由对象上挂载具体的路由
4 使用 module.exports 向外共享路由对象 5 使用 app.use() 函数注册路由模块
 */

//1. 導入express
var express = require('express')

//2. 創建路由對象
var router = express.Router() // 調用 express.Router() 函數，得到 router 的對象

//3. 掛載獲取用戶列表的路由
router.get('/user/list', function(req, res){
    res.send('Get user list')
})

//4. 掛載添加用戶的路由
router.post('/user/add', function(req, res){
    res.send('Add new user')
})

//5. 向外導出路由對象
module.exports = router