/**
 * Created by apple on 17/3/9.
 */


/**
 * Created by apple on 17/3/9.
 */

var express = require('express');
var http = require('http');
var path = require('path');

// 为express构建一个实例对象
var app = express();

//app.set('port',process.evn.PORT || 3000);
// 服务器到底应该监听那个端口号，针对当前的这个服务
app.set('port', 3000);
// 视图模板的绝对路径
app.set('views', path.join(__dirname, 'views'));


// 模板文件的扩展，例如jade，html。这里的view engine不能写错
app.set('view engine', 'jade');


app.all('*', function (req, res) {
    res.render('index', {msg: 'Welcome'});

});

http
    .createServer(app)
    .listen(
        app.get('port'),
        '127.0.0.1',
        function () {
            console.log(
                'Express.js server listening on port: 127.0.0.1:' + app.get('port')
            );
        }
    );


