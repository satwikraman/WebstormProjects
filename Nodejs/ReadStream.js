var http= require('http');
var fs= require('fs');
var myReadStream=fs.createReadStream(__dirname+'/ReadStream.txt','utf8');
myReadStream.on('data',function(chuck){
    console.log('new chunk recievced:');
    console.log(chuck);
});