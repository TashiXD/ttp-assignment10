const express = require("express");
const router = express.Router();
const db = require("../db");

//get and return all the student from the database as an json object
router.get("/", (req, res) => {
    console.log('getting students')
    const query =
    "SELECT * FROM STUDENT";
    db.query(query, (err, result) => {
    try {
      res.send(result.rows);
    } catch (error) {
      console.error("ERROR EXECUTING QUERY:", error);
    }
  });
});

module.exports = router;
