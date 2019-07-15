var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/ReadStream.txt', 'utf8');

myReadStream.pipe();
var server = http.createServer(function (req, res) {
    //console.log("request was made "+req.url);
    res.writeHead(200, { 'content-type': 'text/plain' });
    var myReadStream = fs.createReadStream(__dirname + '/ReadStream.txt', 'utf8');
    myReadStream.pipe(res);

});

server.listen(3030, '127.0.0.1');
console.log('server started');