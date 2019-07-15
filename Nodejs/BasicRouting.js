var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  console.log(`request was made: ${req.url}`);
  if ((req.url === '/home') || (req.url === '/')) {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/table') {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream(__dirname + '/BS Table.html').pipe(res);
  } else if (req.url === '/api') {
    res.writeHead(200, { 'content-type': 'application/json' });
    var myObj = { 'name': 'satwik', 'age': 23, 'height': 175 };
    res.end(JSON.stringify(myObj));
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('url not found');
  }
});
server.listen(3030, '127.0.0.1');
console.log('server started');