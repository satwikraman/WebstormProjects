var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('request was made');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myObj = {
        name: 'satwik',
        age: 23,
        height: 175
    };
    res.end(JSON.stringify(myObj));
});
server.listen(3030, '127.0.0.1');
