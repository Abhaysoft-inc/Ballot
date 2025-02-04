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
    createBy: {
        type: String,
        required: true,
    },
    issueImage: {
        type: String
    },
    issueCreatedOn: Date.now,
    issueLastUpdatedOn: {
        type: Date,
    },
    issueFiles: {

    },
    upVotes: {
        type: String,
    },
    downVotes: {
        type: String
    }

})

const issueModel = mongoose.model('issues', issueSchema);

