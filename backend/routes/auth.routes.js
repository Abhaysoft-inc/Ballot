const express = require("express")
const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bc = require("bcrypt");

const router = express.Router();

// Signup

router.post('/signup', async (req, res) => {

    const { email, fullName, password, phone, address, dob, gender } = req.body;

    // Validation

    if (!email || !fullName || !password) {
        return res.status(400).json({
            msg: "Email, Full Name and Password is required!",
        });
    }

    const hashedPassword = await bc.hash(password, 2);



    createUser = await userModel.create({
        email: email,
        fullName: fullName,
        password: hashedPassword,
        phone: phone,
        address: address,
        dob: dob,
        gender: gender,

    });

    if (createUser) {

        const token = await jwt.sign({ "email": email, "password": hashedPassword }, 'thisismysecretkey');

        // Abhi ke liye ham nhi use kar sakte kyuki ye browser environment me kaam krta hai aur mai postman me test kar rha hoo

        // localStorage.setItem(
        //     "jwt", token
        // );

        res.status(201).json({
            "msg": "User Creation Successfull",
            "token": token,
        })
    } else {
        res.status(400).json({
            "msg": "Something went wrong"
        })
    }

});

// Logging in a User

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
    })

    if (!user) {
        return res.status(401).json({
            msg: "email or password is incorrect",
        });

    }
    const hash = user.password;
    const comparePassword = await bc.compare(password, hash);

    if (!comparePassword) {
        return res.status(401).json({
            msg: "email or password is incorrect",
        });

    }

    return res.status(200).json({
        msg: "Login Successfull"

    });



})


module.exports = router