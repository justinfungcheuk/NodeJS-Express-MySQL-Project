//這是包的入口文件
const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

//向外暴露需要的成員
module.exports = {
    ...date, // ... 代表展開運算符，把 date這個對象的每一個屬性展開，交給了 {} 這個對象，進行存儲
    // 所以在 module.exports 所指向的對象中，就包含了一個屬性 dateFormat, 指向 (dateStr : any) => string;
    ...escape
}