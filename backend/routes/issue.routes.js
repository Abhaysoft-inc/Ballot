const express = require('express');

const router = express.Router()

router.get("/", (req, res) => {

})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(id);
});

router.post('/create-issue', (req, res) => {
    const { } = req.body


})

router.post('/delete/:id', (req, res) => {
    const id = req.params.id;

})

router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
})

module.exports = router