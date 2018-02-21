var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "softdev2"
});

var sqlUpdate = "update student set firstName = 'updated' where id=1;";
var sqlUpdateFromObject = "update student set ? where id = ?;";

student = {id:3, firstName:"updated mary", age: 54};
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sqlUpdate, function (err, result) {
        if (err) throw err;
        console.log("row updated " + JSON.stringify(result));
    });
    con.query(sqlUpdateFromObject, [student, student.id], function (err, result) {
        if (err) throw err;
        console.log("row update from obj" + JSON.stringify(result));
    });
});