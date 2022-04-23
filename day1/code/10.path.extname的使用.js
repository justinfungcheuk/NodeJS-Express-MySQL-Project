const path = require("path")

//這是文件的存放路徑
const fpath = "/a/b/c/index.html"

const fext = path.extname(fpath)
console.log(fext)