var path = require('path')
var express = require('express')
var app = express();
var proxy = require('http-proxy-middleware');

var HOST = 'http://test.xxxx.com:8093'
app.use(express.static(__dirname))
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(proxy('/p', { target: HOST }))


app.listen(3001);

console.log('服务成功开启')
