//定義格式化時間的函數
function dateFormat(dateStr){
    const dt = new Date(dateStr)
    // 在 dateFormat方法內進行 padZero補零
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth()) + 1 // 月份是從 0開始，要拿到 1 - 12月，所以要加1
    const d = padZero(dt.getDay())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

//定義一個補零的函數
function padZero(n) {
    return n > 9 ? n : '0' + n // 如果大於 9就返回 n，否則就直接在 n 的前面加 0，
}

module.exports = {
    dateFormat
}