var express = require('express');
var router = express.Router();

var db = [{title: 'hi', genre: 'comedy'},{title: 'hello', genre: 'horror'}];

router.get('/', function (req, res) {
    console.log('getAll');
    res.send(db);
});
router.post('/create', function (req, res) {
    var film = {};
    film.title = req.body.title;
    film.genre = req.body.genre;

    db.push( film);

    res.redirect('/index.html');
})


module.exports = router;