const express = require('express')
const app = express()
const status = require('http-status')
const path = require('path')
const bodyParser = require('body-parser')
const personRoute = require('./routes/person')
const customerRoute = require('./routes/customer')
const { port } = require('../config')

app.use(bodyParser.json())
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  console.info(status[404])

  res.status(404).send('We think you are lost!')
})

// Handler for Error 500
app.use((err, req, res, next) => {
  console.error(err.stack)

  res.sendFile(path.join(__dirname, '../public/500.html'))
})

app.listen(port, () => console.info(`Server has started on ${port}`))
