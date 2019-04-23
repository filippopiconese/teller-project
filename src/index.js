const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
app.use('/user', require('./routes/user'))

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  console.info(status[404])
  res.status(404).send('We think you are lost!')
})

// Handler for Error 500 - Internal Server Error
app.use((err, req, res, next) => {
  console.info(status[500])
  res.status(500).send('Internal Server Error...')
})

// Start the server
const { port } = require('../config')
app.listen(port, () => console.info(`Server has started on ${port}`))
