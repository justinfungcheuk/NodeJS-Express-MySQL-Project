 const moment = require('moment')

 const dt = moment().format('YYYY-MM-DD')
 console.log(dt)

 /**
  * 包管理配置文件
  * - 一次性安裝所有包 - 可以運行 npm install 命令（或 npm i ）一次性安裝所有的依賴包
  * 執行 npm install 命令時，npm 包管理工具會先讀取 package.json 中的 Dependencies節點，
  * 讀取到記錄的所有依賴包名稱和版本號之後，npm包管理工具會把這些包一次性下載到項目中
  */

 /**
  * devDependencies
  * 如果某些包 只在項目開發階段 會用到，在項目上線之後不會用到，則建議把這些包紀錄到 devDependencies節點中。
  * 與之對應的，如果某些包在 開發 和 項目上線之後 都需要用到，則建議把這些包紀錄到 dependencies 節點中。
  * 
  * 可以使用如下命令，將包紀錄到 devDependencies節點中：
  * npm i 包名 -D 或完整寫法：npm install 包名 --save-dev
  */

 /**
  * 3.5 包的分類
  * 3. i5ting_toc
  * -  i5ting_toc 是一個可以把 md文檔 轉為 html頁面 的小工具，使用步驟如下：
  * npm install -g i5ting_toc
  * 
  * 
  * i5ing_toc -f 要轉換的md文件路徑 -o 
  * 
  * -o 代表開啟該轉換的文件
  */