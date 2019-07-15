var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/Index.html', 'utf8');
    myReadStream.pipe(res);
});
server.listen(3030, '127.0.0.1');
console.log('server started');