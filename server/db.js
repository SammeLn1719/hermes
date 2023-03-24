
var mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "hermes",
  password: "71benutaqwer"
});

connection.connect(function(err) {
	if (err) throw err
	
});
module.exports = connection
