const mongoose = require("mongoose");

const issueSchema = mongoose.Schema({
    issueTitle: {
        type: String,
        required: true,
    },
    issueDesc: {
        type: String,
    },
    issueLocation: {
        type: String,
        required: true,

    },
    issueCreatedOn: Date.now,
    issueImage: {}


})

const issueModel = mongoose.model('issues', issueSchema);

