const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "rogul@123",
  host: "localhost",
  port: "5432",
  database: "testdb",
});

module.exports = pool;
