const express = require('express')
const app = express()

//在這裏，調用 express.static()方法，快速的對外提供靜態資源
app.use('/files', express.static('./files'))
/**
 * 挂载路径前缀
 * 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式:
 * 现在，你就可以通过带有 /files 前缀地址来访问 files 目录中的文件了: 
 * http://localhost:3000/files/images/kitten.jpg 
 * http://localhost:3000/files/css/style.css 
 * http://localhost:3000/files/js/app.js
 */
app.use(express.static('./clock'))
/**
 * 托管多个静态资源目录
 * 如果要托管多个静态资源目录，请多次调用 express.static() 函数:
 * 访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件。  
 */

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})

/**
 * 
 * express 提供了一个非常好用的函数，叫做 express.static()，通过它，我们可以非常方便地创建一个静态资源服务器，
例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了:

现在，你就可以访问 public 目录中的所有文件了: 
http://localhost:3000/images/bg.jpg
 http://localhost:3000/css/style.css
 http://localhost:3000/js/login.js

注意:Express 在指定的静态目录中查找文件，并对外提供资源的访问路径
因此，存放静态文件的目录名不会出现在 URL 中。

 */

/**
 * 为什么要使用 nodemon
在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐。
现在，我们可以使用 nodemon(https://www.npmjs.com/package/nodemon) 
这个工具，它能够监听项目文件 的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大方便了开发和调试。

安装 nodemon
在终端中，运行如下命令，即可将 nodemon 安装为全局可用的工具:
npm install -g nodemon

使用 nodemon
当基于 Node.js 编写了一个网站应用的时候，传统的方式，是运行 node app.js 命令，来启动项目。这样做的坏处是:
  代码被修改之后，需要手动重启项目。
现在，我们可以将 node 命令替换为 nodemon 命令，使用 nodemon app.js 来启动项目。这样做的好处是:代码 被修改之后，会被 nodemon 监听到，从而实现自动重启项目的效果。
 */