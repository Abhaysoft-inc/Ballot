const express = require("express");
const userModel = require("../models/user.models");

const router = express.Router();

// Fetching All Users 

router.get('/', async (req, res) => {

    const users = await userModel.find({})
    res.send(users);
});


// Fetching one user

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findOne({
        _id: id,
    })
    res.send(user);
});




module.exports = router