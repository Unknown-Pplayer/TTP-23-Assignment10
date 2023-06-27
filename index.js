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
  try {
    const result = await pool.query(
      `SELECT id, name, age, major, instructor_id, course_id FROM student`
    );
    res.send(result.rows);
  } catch (error) {
    console.log("Error is caught:", error);
  }
});

app.get("/instructor", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, department, major, course_id FROM instructor`
    );
    res.send(result.rows);
  } catch (error) {
    console.log("Error is caught:", error);
  }
});

app.get("/course", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, credit FROM course`
    );
    res.send(result.rows);
  } catch (error) {
    console.log("Error is caught:", error);
  }
});

app.get("/department", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, course_id, instructor_id FROM department`
    );
    res.send(result.rows);
  } catch (error) {
    console.log("Error is caught:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

