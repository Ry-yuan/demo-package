// e-demo1.js
// 启动一个web服务器
// 学习点app.listen(port , fn)
var express = require('express');
var app = express();

app.get('', function(req, res) {
    res.send('Hello World');
})

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('start http://%s:%s', host, port);
})
