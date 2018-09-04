const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./Routes')

app.use('/', routes)

app.listen(3003, () => {
    console.log('Start server at port 3003.')
})