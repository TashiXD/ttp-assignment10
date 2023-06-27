const express = require("express");
const router = express.Router();
const db = require("../db");

router.use(express.json());
//add new student into the database
router.post("/", (req, res) => {
    //extract data
    const {student_name, major_id, college_id, year_id } = req.body;
    //add an sql command to add the new student into the database
    const sql = "INSERT INTO student (student_name, major_id, college_id, year_id) VALUES ($1, $2, $3, $4) returning *";
    const values = [student_name, major_id, college_id, year_id];
    db.query(sql, values,(err, result)=>{
      try {
        res.status(201).json({status: "success", data: result.rows[0]});
      } catch (error) {
        console.error('ERROR EXECUTING QUERY:', error);
      }
    })
});

module.exports = router;
