var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});
app.get('/table', function (req, res) {
    res.sendFile(__dirname + '/BS Table.html')
});
app.get('/api', function (req, res) {
    res.sendFile(__dirname + '/BS Table.html')
});

app.get('/profile/:id', function (req, res) {

    res.send(`The Profile you are looking for is ${req.params.id}`);
});
app.listen(3030);