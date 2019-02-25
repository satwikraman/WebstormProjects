//var http= require('http');
var fs= require('fs');
var myReadStream=fs.createReadStream(__dirname+'/ReadStream.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/WriteStream.txt');
myReadStream.on('data',function(chunk){
    console.log('new chunk recievced:');
   myWriteStream.write(chunk);
});