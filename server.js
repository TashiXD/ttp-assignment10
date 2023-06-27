require('dotenv').config();
const express = require('express');
const app = express();

//Mount on API
app.use("/api", require("./api"));

//-------server----
const PORT = 8080;
//function to run the server
const serverRun = () =>{
    const server = app.listen(PORT, ()=>{
        console.log(`Live on port: ${PORT}`)
    })
}

serverRun();