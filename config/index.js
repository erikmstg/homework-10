const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://postgres:nevermind@localhost:5432/dbmovies",
});

module.exports = pool;
