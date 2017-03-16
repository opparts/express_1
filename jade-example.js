/**
 * Created by apple on 17/3/16.
 */

var jade = require("jade");
var fs   = require("fs");

var data = {
    title: "learning Node.js",
    author:{
        wechat: "opparts",
        name: "阿雷克斯"
    },
    tags: ['sap','computer','machine-learning']
}

data.body = process.argv[2];

// fs.readFile('jade-example.jade','utf-8',function (error, source) {
//
//     // var template = jade.compile(source);
//     // var html = template(data);
//     // console.log(html);
//
//     //或者修改为这种写法
//     var html = jade.render(source, data);
//     console.log(html);
//
// });

//换成jade的renderFile会更加的方式
jade.renderFile('jade-example.jade',data,function (error, html) {
    console.log(html);
});
