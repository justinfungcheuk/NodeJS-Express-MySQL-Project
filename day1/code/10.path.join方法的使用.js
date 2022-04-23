const fs = require("fs")
const path = require("path")

//注意：../ 會抵銷前面的路徑
//const pathStr = path.join("/a", "/b/c", "../../", "./d", "e")

//console.log(pathStr) // a/d/e

// fs.readFile(__dirname + "/files/1.txt")

// 只要涉及到路徑拼接的操作，都要使用 path.join()方法進行處理
// path.join()方法，可以把多個路徑片段拼接為完整的路徑字符串
fs.readFile(path.join(__dirname, "/1.txt"), "utf8", function(err, dataStr){
    if(err){
        return console.log(err.message)
    }
    console.log(dataStr)
})

/**
 * 獲取路徑中的文件名
 * 使用 path.basename()方法，可以獲取路徑中的最後一部分，該方法獲取路徑中的文件名，語法格式如下：
 * path.basename(path[, ext])
 * 參數解讀：
 * path <string> 必選參數，表示一個路徑的字符串
 * ext <string>  可選參數，表示文件擴展名
 * 返回：<string> 表示路徑的最後一部分
 */