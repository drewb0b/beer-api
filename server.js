const express = require('express');
const app = express();
const beerRouter = require('./routes/beerRouter')

app.use('/beers', beerRouter)

app.use('/', (req, res) => {
    res.send(`base route`);
})

const port = process.env.PORT || 9999;
app.listen(port, () => {
    console.log('listening on port 9999...');
});