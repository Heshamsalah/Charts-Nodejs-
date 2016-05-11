var mysql = require('mysql');
var http = require('http');
var fs = require('fs');
//var app = connect();
var connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'R00t@123',
  database: 'charts'
});

function onCreate(request, response){
	if (request.method == 'GET' && request.url == '/') {
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./main.html").pipe(response);

	}
}

http.createServer(onCreate).listen(3000);