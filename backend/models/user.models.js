const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    phone: Number,
    address: String,
    dob: Date,
    gender: String,
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;