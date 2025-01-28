const express = require("express");
const userModel = require("../models/user.models");

const router = express.Router();

// Fetching All Users 

router.get('/', (req, res) => {

});


// Fetching one user

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(id);
});

// Registering a user

router.post('/signup', (req, res) => {
    const { fullname, email, phone, password, address } = req.body;

    userModel.create({
        email: email,
        fullName: fullname,
        password: password,
        phone: phone,
        address: address,
    })

    res.send("hi")



})

module.exports = router