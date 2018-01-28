var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})
app.get('/fileupload', function(req, res) {
    res.sendFile(__dirname + "/" + "fileupload.html");
})
app.get('/process_get', function(req, res) {
    var response = {
        "firstName": req.query.firstName,
        "lastName": req.query.lastName
    };

    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function(req, res) {
    var response = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName

    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/file_upload', function(req, res) {

    console.log(req.files[0]); // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})


var server = app.listen(8080, function() {
    console.log("start at 8080");
})
