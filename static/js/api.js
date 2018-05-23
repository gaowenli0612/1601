var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'test',    
});
connection.connect();
http.createServer(function(request, response) {
	//解决跨域的问题
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.writeHead(200, {
		'Content-Type': 'text/html;charset:utf-8'
	});
	var sql = 'SELECT * FROM music';
	console.log(request);
	//查
	connection.query(sql, function(err, result) {
		response.end(JSON.stringify(result));
	});

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');