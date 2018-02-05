var express = require('express');
var app = express();
var carRouter = require('./routes/cars.js');
//other code eg routing to public
app.use("/car", carRouter);

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.use(express.static('public'));
var server = app.listen(3003, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s%s", host, port)
});

