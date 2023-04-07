<<<<<<< HEAD
=======
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
>>>>>>> 632c72b3cc9e165c60c87b136f2bdbd6c417b965

module.exports = {
  HOST: "localhost",
  USER: "root",
<<<<<<< HEAD
  PASSWORD: "71benutaqwer",
=======
  PASSWORD: "NINZAcoder$103",
>>>>>>> 632c72b3cc9e165c60c87b136f2bdbd6c417b965
  DB: "hermes",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
