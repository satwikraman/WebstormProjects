var fs= require('fs');
fs.readFile('readText.txt','utf8',function(err,data){
    fs.writeFile('WriteText.txt',data);
    console.log(data);
});
asdfsd