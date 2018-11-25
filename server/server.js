const express = require('express')
const controller = require('./controller')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const urlEx = "/api/exercise"
const urlCal = "/api/calories"
//exercise data
app.post( `${urlEx}/:intensity/:duration`, controller.createEx );
app.get( urlEx, controller.readEx );
app.put( `${urlEx}/:id`, controller.putEx)
app.delete( `${urlEx}/:id`, controller.deleteEx)
//calorie data
app.post( `${urlCal}/:cals`, controller.createCal );
app.get( urlCal, controller.readCal );
app.put( `${urlCal}/:id`, controller.putCal)
app.delete( `${urlCal}/:id`, controller.deleteCal)


const port = 3001
app.listen(port, () => console.log(`Life is meaningless on ${port}`))