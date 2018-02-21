var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "softdev2"
});

var sqlDelete = "delete from student where id=1;";
var sqlDeleteByName = "delete from student where firstName='fred';";

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sqlDelete, function (err, result) {
        if (err) throw err;
        console.log("row updated " + JSON.stringify(result));
    });
    con.query(sqlDeleteByName, function (err, result) {
        if (err) throw err;
        console.log("row updated " + JSON.stringify(result));
    });
});