var mysql = require('mysql');

var DAOHelper = {
    blah:'ee',
    callSQL: function (sql, data, logInfo, callback) {
        var con = getConnection();
        con.connect(function (err) {
            if (err) throw err;
            con.query(sql, data, function (err, result) {
                handleErrorAndLog(err, logInfo, result);
                if (callback) callback (result);
            });
        });
    }
};

function getConnection() {
    return mysql.createConnection({
        host:'localhost',
        user: 'root',
    })
}
