const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://0.0.0.0:27017/ballot");

if (connection) {
    console.log("Connected to DB");
}