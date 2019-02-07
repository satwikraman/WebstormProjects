var http= require('http');
var server=http.createServer(function(req,res){
    console.log("request was made "+req.url);
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("hai satwik");
});
server.listen(3030,'127.0.0.1');
console.log('server started');