var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "trebor",
    database: "burgers_db",
    PORT: 8080
})

connection.connect(function(err) {
    if(err)throw err;
    console.log("connected as id: "+ connection.threadId);

});

module.exports = connection;