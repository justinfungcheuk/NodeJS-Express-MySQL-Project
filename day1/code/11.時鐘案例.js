// 1. 導入 fs模塊
const fs = require("fs")
const { Server } = require("http")

//1.2 導入 path模塊
const path = require("path")

//1.3 定義正則表達式，分別匹配 <style></style> 和 <script></script>標籤
// 其中 \s 表示空白字符； \S 表示非空白字符； * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]<\/script>/

//2.1 調用 fs.readFile()方法 讀取文件
fs.readFile(path.join(__dirname, "../素材/index.html"), "utf-8", function(err, dataStr){
    //2.2 讀取 HTML 文件失敗
    if(err) return console.log("讀取HTML文件失敗!" + err.message)
    //2.3 讀取文件成功後，調用對應的三個方法，分別拆解處 css，js，html文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

//3.1 定義處理 css 樣式的方法 - 接收外部傳過來的 html字符串
function resolveCSS(htmlStr){
    //3.2 使用正則提取需要的內容 - htmlStr - 用 r1拿到提取的結果
const r1 = regStyle.exec(htmlStr) 
//console.log(r1)
//3.3 將提取出來的樣式字符串，進行字符串的 replace 替換操作 - 獲取正式的CSS樣式
const newCSS = r1[0].replace('<style>', '').replace('</style>', '') // 索引為 0，代表我們樣式的字符串，將 style 的開始和結束標籤替換成空的字符串""
console.log(newCSS)
//3.4 調用 fs.writeFile()方法，將提取的樣式，寫入到 clock目錄中 index.css 的文件裡面
fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) { // newCSS 代表指定寫入的內容
    // 用path.join() 拼接出文件的存放路徑，
    if(err) return console.log("寫入CSS樣式失敗!" + err.message)
    console.log("寫入樣式文件成功!")
})
}


//4.1 定義處理 js腳本的方法
function resolveJS(htmlStr){

    //4.2 通過正則，提取對應的 <script></script> 標籤內容
    const r2 = regScript.exec(htmlStr)
    //4.3 將提取出來的內容，做進一步的處理
    const newJS = r2[0].replace('<script>', '').replace('</script>','')
    //4.4將處理的結果，寫入到 clock目錄中的 index.js 文件裡面
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err){
        if(err) return console.log("寫入 JavaScript 腳本失敗!" + err.message)
        console.log("寫入JS腳本成功!")
    })
}


//5.1 定義處理 HTML結構的方法
function resolveHTML(htmlStr){
    //5.2 將字符串調用 replac方法，把內嵌的 style 和 script標籤，替換為外聯的 link 和 script標籤
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    //5.3 寫入 index.html 這個文件
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err){
        if(err) return console.log("寫入HTML文件失敗!" + err.message)
        console.log("寫入HTML頁面成功!")
    }) 
}

/**
 * 時鐘案例的兩個注意點！！！
 * 1. fs.writeFile()方法 只能用來創建文件，不能用來創建路徑
 * 2. 重複調用 fs.writeFile() 寫入同一個文件時，新寫入的內容會覆蓋之前的舊內容
 */