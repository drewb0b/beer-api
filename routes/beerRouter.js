const express = require('express')
const beerRouter = express.Router()

beerRouter.use('/', (req, res) => {
    res.send(`beer router working`)
})

module.exports = beerRouter;