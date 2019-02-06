var fs= require('fs');
fs.readFile('readText.txt','utf8',function(err,data){
    fs.writeFile('WriteText.txt',data);
    console.log(data);
});
//fs.unlink('./stuff/writeFile.txt');
//fs.mkdirSync('STUFF');
//fs.rmdir('STUFF');

/*fs.mkdir('stuff',function(){
    fs.readFile('readText.txt','utf8',function(err,data){
        fs.writeFile('./stuff/writeFile.txt',data);
    });
});*/