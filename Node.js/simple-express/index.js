var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hi There!');
});

app.get('/contact', function (req, res) {
    res.send('Telegram username:\n@svnjvr');
}); 

app.get('/about', function (req, res) {
    res.send('About us page');
}); 

app.use(function (req, res, next) {
    res.status(404);
    res.send('There is no file with a name ');
});

app.listen(5000, function() {
    console.log('localhost:5000 running ...');
});