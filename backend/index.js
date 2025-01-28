const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user.routes");
const issueRouter = require("./routes/issue.routes")
require('./config/db.config')

Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes

app.use('/user', userRouter);
app.use('/issues', issueRouter);





app.listen(3000, () => console.log("Server is listening on PORT: 3000"));