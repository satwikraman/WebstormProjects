var express=require('express');
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.post('/',(req,res)=>{
    console.log(req.body);
    console.log('data posted succesfully');
});
var port=4000;
app.listen(port,()=>{
    console.log(`Running on ${port}`);
});