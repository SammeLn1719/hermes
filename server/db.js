/*
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
module.exports = connection*/

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "NINZAcoder$103",
  DB: "hermes",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
