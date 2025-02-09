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
    createdBy: {
        type: String,
        required: true,
    },
    issueImage: {
        type: String
    },
    issueCreatedOn: Date,
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

