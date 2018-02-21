var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "softdev2"
});

var sqlGetAll = "select * from students;";
var sqlFindById = "select * from students where id=?;";

var idToFind = 3;

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sqlGetAll, function (err, result) {
        if (err) throw err;
        console.log("getAll: " + JSON.stringify(result));
    });
    con.query(sqlFindById, [idToFind], function (err, result) {
        if (err) throw err;
        console.log("findById: " + JSON.stringify(result));
    });
});

