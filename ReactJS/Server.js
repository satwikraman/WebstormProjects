var express=require('express');
var app= express();
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
});
app.get('/form',function(req,res){
    res.sendFile(__dirname+'/Form.html')
});
app.listen(3030);