const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/UsersAPIAuthN')
// const status = require('http-status')
// const path = require('path')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
// const personRoute = require('./routes/person')
// const customerRoute = require('./routes/customer')

app.use('/user', require('./routes/user'))
// app.use(personRoute)
// app.use(customerRoute)
// app.use(express.static('public'))

// // Handler for 404 - Resource Not Found
// app.use((req, res, next) => {
//   console.info(status[404])

//   res.status(404).send('We think you are lost!')
// })

// // Handler for Error 500
// app.use((err, req, res, next) => {
//   console.error(err.stack)

//   res.sendFile(path.join(__dirname, '../public/500.html'))
// })

// Start the server
const {
  port
} = require('../config')
app.listen(port, () => console.info(`Server has started on ${port}`))
