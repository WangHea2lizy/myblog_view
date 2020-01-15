// 这个核心模块，能够帮我们解析 URL地址，从而拿到  pathname  query
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/*", function(req, res) {
  var url = req.url;
  // console.log("url:" + url);
  if (url.indexOf("?") !== -1) {
    url = url.substr(1, url.indexOf("?") - 1);
  } else {
    url = url.substr(1);
  }
  //在Express中没有内置获取表单post请求的api，
  //这里我们需要使用一个第三方包 body-parser
  var params = req.body;
  console.log("post params:");
  if (params.simuMark) {
    url = url + "-" + params.simuMark;
    console.info("simuMark:" + params.simuMark);
  }
  console.info("url:" + url);
  console.log(params);
  var data = fs.readFileSync(url + '.json');
  // res.end 发送给 客户端， 客户端去把 这个 字符串，当作JS代码去解析执行
  res.writeHead(200, {'Content-Type':'application/json;charset=utf-8'});
  res.end(data);
});
app.get("/*", function(req, res) {
  //获取url中的请求参数
  let url = req.url.slice(1);
  // console.log("url:" + url);
	let len = url.indexOf("?");
	if (len !== -1){
		url = url.substr(0, len)
	}
  let query = req.query;
  if (query.simuMark) {
    url = url + "-" + query.simuMark;
    console.info("simuMark:" + query.simuMark);
  }
  console.info("url:" + url);
  console.log("get query:");
  console.log(query);
  var data = fs.readFileSync(url + '.json');
  // res.end 发送给 客户端， 客户端去把 这个 字符串，当作JS代码去解析执行
  res.writeHead(200, {'Content-Type':'application/json;charset=utf-8'});
  console.log(data);
  res.end(data);
});
// 指定端口号并启动服务器监听
app.listen(3001, function () {
  console.log('server listen at http://127.0.0.1:3001')
})
