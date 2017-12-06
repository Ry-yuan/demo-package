//使用express
var express = require('express');
var path = require('path');
//express 对象
var app = express();
//静态资源加载
app.use(express.static(path.join(__dirname,'../')));
//get方法获得请求
app.get('/', function(req, res) {
    //返回当前index
    res.sendFile(path.join(__dirname,'../')+ "/demo1.html");
}).listen(3010, function() {  //监听80端口
    console.log("web start at 80 port");
});

// jsonp路由,用于jsonp测试，返回数据
app.get('/jsonp', function(req,res){
    // 获得参数callback
    var callbackFuncName = req.query.callback;
    // 数据
    var data = [
        {
            "姓名" : "ry",
            "年龄":21,
            "性别":"男",
            "职业":"学生",
            "爱好":"女"
        }
    ];
    // 转换为字符串
    var data_str = JSON.stringify(data);
    res.send(callbackFuncName+"("+data_str+");");
})
