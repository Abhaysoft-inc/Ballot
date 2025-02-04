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



module.exports = router