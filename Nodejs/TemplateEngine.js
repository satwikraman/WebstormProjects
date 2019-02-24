var express=require('express');
var app= express();
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
});
app.get('/profile/:id',function(req,res){
    var data ={
        Age: 23,
        Job: 'UI Developer',
        hobbies:['VolleyBall','Tv Shows','Movies']
    }
    res.render('profile',{person:req.params.id, data:data});
});
app.listen(3030);