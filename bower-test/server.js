var express = require('express');
var app = express();
// var fs = require('fs');
var path = require('path');
app.use(express.static(path.join(__dirname, '/')));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/ajaxtest.html');
    // res.end();
}).listen(8000, function() {
    console.log("start at 8000 port");
})
