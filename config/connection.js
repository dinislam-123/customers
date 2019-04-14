var mysql = require("mysql");

var pool = mysql.createPool({

    // Host:'www.remotemysql.com',
    // // host:'37.59.55.185'
    // Username: 'E13HOqhRBJ',
    // Password: 'mGNHY2i6Sr',
    // Database : 'E13HOqhRBJ',
    // Port:3306
        host: 'localhost',
        user: 'root',
        password : 'root',
        port : 3306,
        database:'mydata'
    });

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};