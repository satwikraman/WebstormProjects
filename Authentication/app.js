var express=require('express');
const mongoose=require('mongoose');
var app=express();
const db=mongoose.connect('mongodb://localhost/Registrationdb');
const regRoute=express.Router();
const register=require('./models/schema');


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
     db.Registrationdb.insert(rg);
    res.send('Registration succesfull');
});

var port=4000;
app.listen(port,()=>{
    console.log(`Running on ${port}`);
});