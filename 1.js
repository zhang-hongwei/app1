// let http = require('http')
// http.createServer(function (req, res) {
//     res.end(123)
// }).listen(5000)


var http = require('http'); //1
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n'); //6
}).listen(2000, '127.0.0.1'); //3
console.log('快去浏览器输入：127.0.0.1：2000');