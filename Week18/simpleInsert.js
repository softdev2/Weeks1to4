var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "softdev2"
});
var sqlInsert = "insert into student (id, firstName, age) values (1, 'joe', 56);";
var sqlInsertFromVars = "insert into student (id, firstName, age) values (?, ?, ?);";
var sqlInsertMultiple = "insert into student (id, firstName, age) values ?;";
var sqlInsertFromObject = "insert into student set?;";

var valuesAsArray = ["10", "fred", "78"];
var multipleValues = [
    [5, "frank", 12],
    [6, "Fatima", 13],
    [7, "Greg", 56],
    [4, "AliBabba", 67]];
var valuesAsObject = {id:3, firstName:"mary", age:45};

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sqlInsert, function (err, result) {
        if (err) throw err;
        console.log("row inserted " + JSON.stringify(result));
    });
    con.query(sqlInsertFromVars, valuesAsArray, function (err, result) {
        if (err) throw err;
        console.log("row inserted " + JSON.stringify(result));
    });
    con.query(sqlInsertMultiple, [multipleValues], function (err, result) {
        if (err) throw err;
        console.log("row inserted " + JSON.stringify(result));
    });
    con.query(sqlInsertFromObject, valuesAsObject, function (err, result) {
        if (err) throw err;
        console.log("row inserted " + JSON.stringify(result));
    });
});