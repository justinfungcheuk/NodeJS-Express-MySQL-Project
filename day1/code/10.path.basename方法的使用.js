/**
 * 獲取路徑中的文件名
 * 使用 path.basename()方法，可以獲取路徑中的最後一部分，該方法獲取路徑中的文件名，語法格式如下：
 * path.basename(path[, ext])
 * 參數解讀：
 * path <string> 必選參數，表示一個路徑的字符串
 * ext <string>  可選參數，表示文件擴展名
 * 返回：<string> 表示路徑的最後一部分
 */

const path = require("path")

//定義文件的存放路徑
const fpath = "/a/b/c/index.html"

//const fullName = path.basename(fpath)

//console.log(fullName)

const nameWithoutExt = path.basename(fpath, ".html") // 只輸出文件名，把擴展名移除 .html
console.log(nameWithoutExt)