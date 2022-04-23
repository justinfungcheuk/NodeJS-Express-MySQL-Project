// 定義轉移 HTML字符 的函數
function htmlEscape(htmlstr){ //接收htmlstr字符串
    //在內部進行 htmlstr字符的repalce操作
    return htmlstr.replace(/<|>|"|&/g, (match) => { //g 代表全局替換，不只是替換一次，而是有的全都可以替換
        switch(match) {//進行 switch case判斷，switch 誰呢？就是匹配的結果 - match
        case '<':
            return '&lt;'
        case '>':
            return '&gt;'
        case '"':
            return '&quot;'
        case '&':
            return '&amp;' 
        }
    })
}

// 定義還原 HTML字符串 的函數
function htmlUnEscape(str){ //接收htmlstr字符串
    //在內部進行 htmlstr字符的repalce操作
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => { //g 代表全局替換，不只是替換一次，而是有的全都可以替換
        switch(match) {//進行 switch case判斷，switch 誰呢？就是匹配的結果 - match
        case '&lt;':
            return '<'
        case '&gt;':
            return '>'
        case '&quot;':
            return '"'
        case '&amp;':
            return '&' 
        }
    })
}

module.exports = {
    htmlEscape,
    htmlUnEscape
}