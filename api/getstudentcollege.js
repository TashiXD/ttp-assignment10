const express = require("express");
const router = express.Router();
const db = require("../db");

//get and return all the student from the database as an json object
router.get("/", (req, res) => {
    const query =
    "SELECT student.student_id, student.student_name, college.college_name FROM student INNER JOIN College ON student.college_id = college.college_id";
    db.query(query, (err, result) => {
    try {
      res.send(result.rows);
    } catch (error) {
      console.error("ERROR EXECUTING QUERY:", error);
    }
  });
});

module.exports = router;
