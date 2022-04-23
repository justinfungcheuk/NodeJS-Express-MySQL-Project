## 安裝
```
npm install itheima-tools
```

## 導入
```js
const itheima = require('itheima-tools)

```

##格式化時間
```js
//調用 dateFormat 對時間進行格式化
const dtStr = itheima.dateFormat(new Date())
// 結果 2022-031-02 05:29:25
console.log(dtStr)
```

## 轉義 HTML 中的特殊字符
```js
// 帶轉換的 HTML 字符串
const htmlStr = '<h1 title="abc">這是h1標籤<span>123&nbsp</span></h1>'
// 調用 htmlEscape方法 進行轉換 &lt;h1 title=&quot;abc&quot;&gt;這是h1標籤&lt;span&gt;123&amp;nbsp&lt;/span&gt;&lt;/h1&gt;
const str = itheima.htmlEscape(htmlStr)
// 轉換的結果
console.log(str)
```

## 還原 HTML 中的特殊字符
```js
// 帶還原的 HTML字符串
const str2 = itheima.htmlUnEscape(str)
// 輸出的結果 <h1 title="abc">這是h1標籤<span>123&nbsp</span></h1>
console.log(str2)
```

## 開源協議
ISC

// 注意！！！在運行 npm login命令 之前，必須先把下包的服務器地址切換為 npm的官方服務器。否則會導致發布包失敗！