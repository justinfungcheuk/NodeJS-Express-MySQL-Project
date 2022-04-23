const itheima = require('./itheima-tools-justin/index')

//格式化時間的功能
const dtStr = itheima.dateFormat(new Date())
console.log(dtStr)
console.log('------------------')

const htmlStr = '<h1 title="abc">這是h1標籤<span>123&nbsp</span></h1>'
const str = itheima.htmlEscape(htmlStr)
console.log(str)
console.log('------------------')

const str2 = itheima.htmlUnEscape(str)
console.log(str2)