const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "mariadb",
  port: "3306",
  user: "root",
  password: "root",
  database: "ecommerce",
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL is connected...");
});

module.exports = connection;
