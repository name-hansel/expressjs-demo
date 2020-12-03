const express = require("express");
const app = express();

let { username, password, host, port, database } = require("./config");

const { Pool } = require("pg");
const pool = new Pool({
  user: username,
  host,
  database,
  password,
  port,
});

app.get("/", async (req, res) => {
  let result = await pool.query("SELECT * FROM demotable");
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
