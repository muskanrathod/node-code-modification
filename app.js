const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dbconnection = require("./mongoose/dbconnection");
const friendRoutes = require("./routes/friend/friend-route");

dbconnection.then( (data) => {
    console.log('Connected to database');
})
.catch( (err) => {
    console.error(`Error connecting to the database`);
});

app.use(express.json());

app.use(friendRoutes);

app.listen(8080, function(){
    console.log("server is upto port 8080")
});