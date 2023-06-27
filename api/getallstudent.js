const express = require("express");
const router = express.Router();
const db = require("../db");

//get and return all the student from the database as an json object
//returns results combining tables
/**
 * {
 *  student_id:
 *  student_name:
 *  college_name:
 *  major:
 *  year:
 * }
 */
router.get("/", (req, res) => {
    console.log('getting students')
    const query =
    "SELECT student.student_id, student.student_name,college.college_name, major.major, year.year FROM student INNER JOIN college ON student.college_id = college.college_id INNER JOIN major ON student.major_id = major.major_id INNER JOIN year ON student.year_id = year.year_id";
    db.query(query, (err, result) => {
    try {
      res.send(result.rows);
    } catch (error) {
      console.error("ERROR EXECUTING QUERY:", error);
    }
  });
});

module.exports = router;
