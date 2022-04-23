//1. 導入 fs模塊
const fs = require("fs")

//2. 調用 fs.readFile() 讀取文件的內容
fs.readFile("../files/素材/成績.txt", "utf8", function(err, dataStr){ // "utf8" 代表使用 utf8 的格式
    //3. 判斷是否讀取成功
    if(err){
        return console.log("讀取文件失敗！" + err.message) // err.message 表示把失敗的結果打印出來
    }
    // 如果沒有被 return 出去，就代表讀取成功
    // console.log("讀取文件成功！" + dataStr) // dataStr 代表把讀取成功的結果打印出來

//4.1 先把成績的數據，按照空格進行分割
const arrOld = dataStr.split(" ")
//console.log(arrOld)

//4.2 循環分割後的數組，對每一項數據，進行字符串的替換操作
const arrNew = []
arrOld.forEach(item => {
    arrNew.push(item.replace("=", ":")) // 將 = 替換成 :
})
//console.log(arrNew)

//4.3 把新數組中的每一項，進行合併，得到一個新的字符串
const newStr = arrNew.join("\r\n") // \r\n 代表回車換行的意思
//console.log(newStr)

//5. 調用 fs.writeFile()方法，把處理完畢的成績，寫入到新文件中
fs.writeFile("./素材/成績-ok.txt ", newStr, function(err) { // newStr 代表要寫入的文件內容
    if(err){
        return console.log("寫入文件失敗！" + err.message)
    }
    console.log("成績寫入成功！")
  })
}) 