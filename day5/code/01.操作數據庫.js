//1. 導入 mysql模塊
const mysql = require('mysql')
//2. 建立與 MySQL 數據庫的連接關係
const db = mysql.createPool({ // 調用 mysql 提供的 createPool方法，立與 MySQL 數據庫的連接關係，注意！在建立連接關係期間必須要提供以下的配置對象，指定以下4個項目！
    host: '127.0.0.1', //數據庫的 IP地址
    user: 'root', // 登錄數據庫的帳號
    password: 'admin123', // 登錄數據庫的密碼
    database: 'my_db_01', // 指定要操作那個數據庫
})

//測試 mysql模塊 能否正常工作
/*
db.query('select 1', (err, results) => {
    // mysql 模塊工作期間報錯了
    if(err) return console.log(err.message) // 只要能打印出 [ RowDataPacket { '1': 1 } ] 的結果，就證明數據庫連接正常
    // 能夠成功的執行 SQL語句
    console.log(results)
})
*/

/*
// 查詢 users 表中所有的數據
const sqlstr = 'select * from users'
db.query(sqlstr, (err, results) => {
    // 查詢數據失敗
    if(err) return console.log(err.message)
    // 查詢數據成功
    // 注意！如果執行的是 select 查詢語句，則執行的結果是數組 - 一個對象的數組
    console.log(results)
})
*/

/*
//1. 要插入到 users 表中的數據對象
const user = {username: 'Spider-Man', password: 'pcc321'}
//2. 待執行的 SQL語句，其中英文的 ？表示佔位符
const sqlstr = 'INSERT INTO users (username, password) VALUES (?, ?)' 
//在 SQL 語句中，可以使用 ？佔位符 去表示具體的一個值，替該值作出佔位，再從執行 sqlstr語句期間，可以通過數組 [user.username, user.password] 分別為每個佔位符提供真正的值

//3. 使用數組的形式，依次為 ？佔位符 指定具體的值
db.query(sqlstr, [user.username, user.password], (err, results) => {
    if(err) return console.log(err.message) //失敗
    // 注意！如果執行的是 insert into 插入語句，則 results 是一個對象
    // 可以通過 affectedRows屬性，來判斷是否插入數據成功
    if(results.affectedRows === 1) {console.log('插入數據成功')} //通過 affectedRows === 1 判斷數據是否插入成功
})
*/

/*
// 演示插入數據的便捷方式
const user = {username: 'Spider-Man2', password: 'pcc4321'}
// 定義待執行的 SQL語句
const sqlstr = 'insert into users set ?'
// 執行 SQL語句
db.query(sqlstr, user, (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1) {console.log('插入數據成功')}
})
*/

/*
//1. 演示如何更新用戶的信息
const user = {id: 8, username: 'aaa', password: '000'}
//2. 定義 SQL語句
const sqlStr = 'UPDATE users SET username=?, password=? WHERE id =?'
//3. 調用 db.query() 執行 SQL語句 的同時，使用數組依次為佔位符指定具體的值
// 要執行的 SQL語句
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if(err) return console.log(err.message) // 失敗
    //注意！執行了 update語句 之後，執行的結果，也就是一個對象，可以通過 affectedRows 判斷是否更新成功
    if(results.affectedRows === 1){
        console.log('更新數據成功!')} //成功
}) 
*/

/*
// 演示更新數據的便捷方式
const user = {id:8, username: 'aaaa', password: '0000'}
// 定義 SQL語句
const sqlStr = 'update users set ? where id=?'
// 執行 SQL語句
db.query(sqlStr, [user, user.id], (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1){
        console.log('更新數據成功')
    }
})
*/

/*
//1. 要執行的 SQL語句，刪除 id 為 5 的用戶
const sqlStr = 'delete from users where id=?'
//2. 調用 db.query() 執行 SQL語句 的同時，為佔位符指定具體的值
//注意！如果 SQL語句 中有多個佔位符，則必須使用數組為每個佔位符指定具體的值
// 如果 SQL語句 中只有一個佔位符，則可以省略數組
db.query(sqlStr, 5, (err, results) => {
    if(err) return console.log(err.message)
    //注意！執行 delete語句 之後，結果也是一個對象，也會包含 affectedRows屬性
    if(results.affectedRows === 1){
        console.log('刪除數據成功')
    }
})
*/

// 標記刪除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 8], (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1){
        console.log('標記刪除成功')
    }
})
/**
 * 标记删除
使用 DELETE 语句，会把真正的把数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。 
所谓的标记删除，就是在表中设置类似于 status 这样的状态字段，来标记当前这条数据是否被删除。
当用户执行了删除的动作时，我们并没有执行 DELETE 语句把数据删除掉，而是执行了 UPDATE 语句，将这条数据对应 的 status 字段标记为删除即可。
 */
