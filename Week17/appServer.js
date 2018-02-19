var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var filmRouter = require('./routes/film');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/film', filmRouter);

var server = app.listen(3002, function() {
    var port = server.address().port;
    console.log('server started on port '+ port);
});