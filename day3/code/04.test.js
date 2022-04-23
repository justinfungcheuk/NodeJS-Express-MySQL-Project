require('./03.自定義模塊')

require('./03.自定義模塊')

require('./03.自定義模塊')

require('./03.自定義模塊')

/**
 * 優先從緩存中加載
 * 模塊在第一次加載後會被緩存，這意味著多次調用 require() 不會導致模塊的代碼被執行多次
 * 注意！不論是內置模塊、用戶自定義模塊、還是第三方模塊，它們都會優先從緩存中加載，從而提高模塊的加載效率。
 */

/**
 * 內置模塊的加載機制
 * 內置模塊是由 Node.js 官方提供的模塊，內置模塊的記載優先級最高
 */

/**
 * 自定義模塊的加載機制
 * 使用 require() 加載自定義模塊時，必須知道以 ./ 或 ../ 開頭的路徑標識符。
 * 在加載自定義模塊時，如果沒有指定 ./ 或 ../ 這樣的路徑標識符，則 node 會把它當作 內置模塊 或 第三方模塊 進行加載。
 * 
 * 在使用 require() 導入自定義模塊時，如果省略了文件的擴展名，則 Node.js 會按順序分別嚐試加載以下的文件：
 * 1. 按照確切的文件名進行加載
 * 2. 補全 .js擴展名 進行加載
 * 3. 補全 .json擴展名 進行加載
 * 4. 補全 .node 擴展名 進行加載
 * 5. 加載失敗，終端報錯
 * 
 */