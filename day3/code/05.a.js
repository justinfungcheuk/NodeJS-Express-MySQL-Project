const m = require('./test')
console.log(m)

/**
 * 4.4 第三方模块的加载机制
如果传递给 require() 的模块标识符不是一个内置模块，也没有以 ‘./’ 或 ‘../’ 开头，则 Node.js 会从当前模块的父 目录开始，尝试从 /node_modules 文件夹中加载第三方模块。
如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。 
例如，假设在 'C:\Users\itheima\project\foo.js' 文件里调用了 require('tools')，则 Node.js 会按以下顺序查找: 1 C:\Users\itheima\project\node_modules\tools
2 C:\Users\itheima\node_modules\tools
3 C:\Users\node_modules\tools
4 C:\node_modules\tools
 */