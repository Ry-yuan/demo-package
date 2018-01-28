// 静态文件
// express.static
var express = require('express');
var app = express();

// 通过use express.static 使得public目录可以被访问
// Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
// 你可以使用 express.static 中间件来设置静态文件路径
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send("hello world");
}).listen(8080, function() {
    console.log("start at 8080")
})
