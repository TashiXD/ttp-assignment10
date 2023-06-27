const express = require("express")
const router = express.Router();

// Mount
router.use("/getallstudent", require("./getallstudent"));
router.use("/addstudent", require("./addstudent"));
router.use("/customlist", require("./customlist"));
//handle 404
router.use("*", (req, res, next)=>{
    const error = new Error('404 Not Found');
    error.status = 404;
    next();
});

module.exports= router;