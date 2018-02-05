// Create a directory called routes and a file in there called "cars.js" that will deal with the HTTP requests to
// do with cars

//in cars.js, create a router and a test handler
var express = require('express');
var router = express.Router();

var counter = 0;
var cars = {1:{id:1, reg:'123MO123', make: 'ford', model: 'mondeo'}}



/* Car methods: GET, POST & DELETE/ */
// Operation: getAll, URL: /car/, Method: GET
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(cars));
    console.log("in cars home");
});

//Operation: FindById, URL: /car/:id, Method: GET
router.get('/:id', function (req, res, next) {
    var id = req.param("id");
    console.log("got param" + id);
});

//Operation: Create, URL: /car/create, Method: POST
router.post('/create', function (req, res, next) {
    console.log(req.body);
    var car = req.body;
    // put into a database
    cars[car.id] = car;
    res.send("created?")
});

//Operation: Update, URL: /car/update/:id, Method: POST
router.post('/update/:id', function (req, res, next) {
    console.log("update function");
});

//Operation: Delete, URL: /car/:id, Method: DELETE
router.delete('/:id', function (req, res, next) {
    console.log()
})
module.exports = router;