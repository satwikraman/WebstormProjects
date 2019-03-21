var express=require('express');
var bodyParser=require('body-parser');
//const registrationdb=require('./models/schema');
var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.post('/',(req,res)=>{
    let ip=req.body;
    console.log(ip);
    res.send('data posted succesfully');
});

app.get('/registration',(req,res)=>{
    res.sendFile(__dirname+'/registration.html');
});
app.post('/registration',(req,res)=>{
    let rg=req.body;
    console.log(rg);
    res.send('Registration succesfull');
});

var port=4000;
app.listen(port,()=>{
    console.log(`Running on ${port}`);
});