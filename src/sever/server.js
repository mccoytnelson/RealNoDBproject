const express = require('express')
const bodyParser = require('body-parser')
const config = require('./../config.js')

const app = express();

app.use(bodyParser.json())











app.listen(config.port, ()=>{
    `Listening on port ${config.port}`
})
