const express = require("express")
const router = express.Router();
//Root path her is /api/test
router.get("/",(req, res)=>{
    console.log("THIS IS THE TEST ROUTE");
})

// this is == api/test/apple
router.get("/apple",(req, res)=>{
    console.log("THIS IS THE TEST ROUTE WITH APPLE");
})

module.exports = router;