const { Pool } = require('pg');
const express = require('express');

const PORT = 8080;

const app = express();
const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "dbtest",
    user: "postgres",
    password: "6120",
})

app.get("/student", async (req, res) => {
  await pool.query(
    `select student_id, name, age, major, instructor_id, course_id`,
    (error, result) => {
      try {
        res.send(result.rows);
        console.log('hello')
      } catch (error) {
        console.log("Error is catched");
      }
    }
  );
});
