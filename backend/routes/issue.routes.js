const express = require('express');
const issueModel = require("../models/issues.models");
const userModel = require('../models/user.models');
const router = express.Router();


router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const issue = await userModel.findOne({
        _id: id
    });

    if (issue) {
        res.send(issue);
    } else {
        res.status(404).send("issue not found");
    }

});

router.post('/create-issue', async (req, res) => {
    const { issueTitle, issueDesc, issueLocation, createdBy, issueImage, issueCreatedOn, issueLastUpdatedOn, issueFiles, } = req.body

    const issue = await issueModel.create({
        issueTitle: issueTitle,
        issueDesc: issueDesc,
        issueLocation: issueLocation,
        createdBy: createdBy,
        issueImage: issueImage,
        issueCreatedOn: issueCreatedOn,
        issueLastUpdatedOn: issueLastUpdatedOn,
        issueFiles: issueFiles,

    });


    if (issue) {
        res.status(200).json({
            msg: "issue created successfully"
        });
    }


})

router.post('/delete/:id', async (req, res) => {
    const id = req.params.id;

    const deleteIssue = await issueModel.deleteOne({
        _id: id
    })

    if (deleteIssue) {
        res.status(200).send(`Issue ${id} deleted successfully`)
    } else {
        res.send("error deleting issue");
    }

})

// adding edit logic

router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
})

module.exports = router