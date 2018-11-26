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
//note to self: put and delete use a id number after '/' 
// and post uses a param after '/' such as a word or number of my choosing
app.post('/api/datedObj',controller.putDatedObj)
const port = 3001
app.listen(port, () => console.log(`Life is meaningless on ${port}`))