const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./route')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

app.listen(3003, () => {
    console.log('Start db server at port 3003.')
})