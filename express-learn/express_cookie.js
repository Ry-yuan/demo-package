var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.get('/', function(req, res) {
    console.log("Cookie", req.cookies)
})

app.listen(8080, function() {
    console.log("start at 8080 port");
})
