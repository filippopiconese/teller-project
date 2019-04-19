const mongoose = require('mongoose')
const {
  localUri
} = require('../../config')

mongoose.connect(localUri, {
  useNewUrlParser: true
})

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)
