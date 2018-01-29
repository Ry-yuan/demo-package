// 请求和响应
var express = require('express');
var app = express();

// 路由的简单应用，通过app的get或者是post来对指定的url进行处理，并返回对应的结果
// 学习点:app.get(url,fn)  app.post(url,fn) 
app.get('', function(req, res) {
    console.log("get 请求");
    res.send('Hello Get');
})

// post
app.post('', function(req, res) {
    console.log("post 请求");
    res.send('Hello Post');
})


// del页面

app.get('/del', function(req, res) {
    console.log('del 页面');
    res.send('删除页面');
})


app.get('/list', function(req, res) {
    console.log('list 页面');
    res.send('用户列表页面');
})


app.get('/ab*cd', function(req, res) {
    console.log('ab*cd 匹配');
    res.send('正则匹配');
})


var server = app.listen(8080, function() {
    console.log('start at 8080')
})
