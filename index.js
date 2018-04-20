
//// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// require and configure Express
const express = require('express')
const app = express()
const cors = require('cors')

// require Middleware
const bodyParser = require('body-parser')

// configure Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())





//// START SERVER ON ENVIRONMENT PORT /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// set app Port to either the Environment port, or local 400
app.set('port', process.env.PORT || 4000)

// // configure Express server port
app.listen(app.get('port'), () => {
  console.log(`\n\tServer listening on port : ${app.get('port')}.\n`)
})



//// ROUTES ///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// require and configure Controllers
const beersController = require('./controllers/beersController')
const usersController = require('./controllers/usersController')

// configure controllers for all routes
app.use('/', beersController)
app.use('/', usersController)











//// EXPRESS TEST /////////////////////////////////////////////////////////////

// app.get('/', (req, res) => {
//   res.send("Route Working")
// })
