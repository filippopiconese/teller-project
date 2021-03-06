const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const { testUri, userUri } = require('./configuration')

mongoose.Promise = global.Promise
if (process.env.NODE_ENV == 'test') {
  mongoose.connect(testUri, { useNewUrlParser: true })
    .catch((error) => {
      console.error(error + '\nCheck whether service mongod has started correctly - sudo service mongod start')
    })
} else {
  mongoose.connect(userUri, { useNewUrlParser: true })
    .catch((error) => {
      console.error(error + '\nCheck whether service mongod has started correctly - sudo service mongod start')
    })
}

const app = express()

// Middlewears moved morgan into if for clear tests
if (!process.env.NODE_ENV == 'test') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/users', require('./routes/users'))

// // Handler for 404 - Resource Not Found
// app.use((req, res, next) => {
//   console.info(status[404])
//   res.status(404).send('We think you are lost!')
// })

// // Handler for Error 500 - Internal Server Error
// app.use((err, req, res, next) => {
//   console.info(status[500])
//   res.status(500).send('Internal Server Error...')
// })

module.exports = app
